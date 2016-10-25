import Event from './Event';
import CustomEvent from './CustomEvent';
import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';
import dispatchEvent from './dispatchEvent';
import onDOMContentLoaded from './onDOMContentLoaded';

if (typeof window.Event !== 'function') {
	Window.prototype.Event = Event;

	if (window.Event !== Event) {
		// manually attach the Event if inheritence fails
		window.Event = Event;
	}
}

if (typeof window.CustomEvent !== 'function') {
	Window.prototype.CustomEvent = CustomEvent;
}

if (typeof window.dispatchEvent !== 'function') {
	onDOMContentLoaded();

	Window.prototype.addEventListener = HTMLDocument.prototype.addEventListener = Element.prototype.addEventListener = addEventListener;
	Window.prototype.removeEventListener = HTMLDocument.prototype.removeEventListener = Element.prototype.removeEventListener = removeEventListener;
	Window.prototype.dispatchEvent = HTMLDocument.prototype.dispatchEvent = Element.prototype.dispatchEvent = dispatchEvent;
}
