export default function CustomEvent(type) {
	if (!type) {
		// specifying an event type is required
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	// EventInit dictionary
	let bubbles = arguments[1] && arguments[1].bubbles || false;
	let cancelable = arguments[1] && arguments[1].cancelable || false;
	let detail = arguments[1] && arguments[1].detail || null;

	if ('createEvent' in document) {
		try {
			// if document.createEvent exists, use it as a fallback
			let event = document.createEvent('CustomEvent');

			// initialize the event
			event.initCustomEvent(type, bubbles, cancelable, detail);

			return event;
		} catch (error) {
			// if CustomEvent fails, use a regular Event as a fallback
			let event = document.createEvent('Event');

			// initialize the event
			event.initEvent(type, bubbles, cancelable);
			event.detail = detail;

			return event;
		}
	} else {
		// otherwise, use document.createEventObject as a fallback
		let event = document.createEventObject();

		// initialize the event
		event.bubbles = bubbles;
		event.cancelable = cancelable;
		event.detail = detail;
		event.type = type;

		return event;
	}
}

CustomEvent.prototype = window.Event.prototype;
