import indexOf from './indexOf';

export default function removeEventListener(type, listener) {
	let self = this;
	// let options = arguments[2];

	if (self._events && self._events[type]) {
		let index = indexOf(self._events[type].list, listener);

		if (index !== -1) {
			self._events[type].list.splice(index, 1);

			if (!self._events[type].list.length) {
				if (self.detachEvent) {
					self.detachEvent('on' + type, self._events[type]);
				}

				delete self._events[type];
			}
		}
	}
}
