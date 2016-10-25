export default function () {
	// dispatch DOMContentLoaded after deferred scripts have loaded
	var onreadystatechange = function () {
		var script = document.createElement('script');

		script.src = 'javascript:void(0)';

		script.onreadystatechange = function () {
			if (script.readyState === 'loaded') {
				document.documentElement.removeChild(script);

				document.dispatchEvent(new Event('DOMContentLoaded'));
			}
		};

		document.documentElement.appendChild(script);

		document.detachEvent('onreadystatechange', onreadystatechange);
	};

	document.attachEvent('onreadystatechange', onreadystatechange);
}
