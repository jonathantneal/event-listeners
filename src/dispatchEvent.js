export default function dispatchEvent(event) {
	if (!arguments.length) {
		// require an event argument
		throw new Error('Not enough arguments');
	}

	if (!event || typeof event.type !== 'string') {
		// require an event argument
		throw new Error('DOM Events Exception 0');
	}

	let self = this;
	let type = event.type;

	try {
		if (!event.bubbles) {
			// if the bubble is cancelled, attempt to do this natively
			event.cancelBubble = true;

			let cancelBubbleEvent = function () {
				event.cancelBubble = true;

				self.detachEvent('on' + type, cancelBubbleEvent);
			};

			self.attachEvent('on' + type, cancelBubbleEvent);
		}

		self.fireEvent('on' + type, event);
	} catch (error) {
		let currentTarget = event.target = self;

		// while there is an element and the event bubble has not been cancelled
		do {
			// current target is the current element
			currentTarget = event.currentTarget = self;

			if (currentTarget._events && typeof currentTarget._events[type] === 'function') {
				// if the element has an event listener, run it
				currentTarget._events[type].call(currentTarget, event);
			}

			if (typeof currentTarget['on' + type] === 'function') {
				// if the element has a property listener, run it
				currentTarget['on' + type](event);
			}

			if (currentTarget.nodeType === 9) {
				// if the element is a document, move to the window
				currentTarget = currentTarget.parentWindow;
			} else {
				// otherwise, move to the parent node
				currentTarget = currentTarget.parentNode;
			}
		} while (currentTarget && !event.cancelBubble);
	}

	return true;
}
