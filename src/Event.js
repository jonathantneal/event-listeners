export default function Event(type) {
	if (!type) {
		// require an event type
		throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
	}

	// EventInit dictionary
	let bubbles = arguments[1] && arguments[1].bubbles || false;
	let cancelable = arguments[1] && arguments[1].cancelable || false;

	if ('createEvent' in document) {
		// if document.createEvent exists, use it as a fallback
		let event = document.createEvent('Event');

		// initialize the event
		event.initEvent(type, bubbles, cancelable);

		return event;
	} else {
		// otherwise, use document.createEventObject as a fallback
		let event = document.createEventObject();

		// initialize the event
		event.bubbles = bubbles;
		event.cancelable = cancelable;
		event.type = type;

		return event;
	}
}
