import indexOf from './indexOf';

export default function addEventListener(type, listener) {
	let self = this;
	// let options = arguments[2];

	if (!self._events) {
		self._events = {};
	}

	if (!self._events[type]) {
		let eventsByType = self._events[type] = function (event) {
			// polyfill event properties
			event.currentTarget = self;
			event.relatedTarget = event.fromElement || null;
			event.target = event.target || event.srcElement || self;
			event.timeStamp = new Date().getTime();

			if ('clientX' in event) {
				event.pageX = event.clientX + document.documentElement.scrollLeft;
				event.pageY = event.clientY + document.documentElement.scrollTop;
			}

			// polyfill event methods
			event.preventDefault = function preventDefault() {
				if (event.cancelable !== false) {
					event.returnValue = false;
				}
			};

			event.stopPropagation = function stopPropagation() {
				event.cancelBubble = true;
			};

			event.stopImmediatePropagation = function stopImmediatePropagation() {
				event.cancelBubble = true;
				event.cancelImmediate = true;
			};

			// run listeners
			let eventsByTypeCache = eventsByType.list.slice();
			let index = -1;
			let eventListener = undefined;

			while (eventListener = !event.cancelImmediate && eventsByTypeCache[++index]) {
				if (indexOf(eventsByType.list, eventListener) !== -1 && typeof eventListener === 'function') {
					eventListener.call(self, event);
				}
			}
		};

		eventsByType.list = [];

		if (self.attachEvent) {
			// if possible, attach the event natively
			self.attachEvent('on' + type, eventsByType);
		}
	}

	// add the event
	self._events[type].list.push(listener);
}
