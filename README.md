# Event Listeners

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Event Listeners] are a polyfill for `Event`, `CustomEvent`, `addEventListener`, `removeEventListener`, `dispatchEvent`, and `DOMContentLoaded`.

```js
document.addEventListener('DOMContentLoaded', function () {
	// do stuff
});
```

## FAQ

### What’s the browser support?

[Event Listeners] works all major 2014+ browsers and polyfills missing features in Firefox 6-10, Interet Explorer 8-11, Opera 10-11.5, and Safari 4-7.

### What’s the catch?

[Event Listeners] is [public domain], dependency free, and 1162 bytes when minified and gzipped.

[Event Listeners]: https://github.com/jonathantneal/event-listeners

[public domain]: LICENSE.md

[npm-url]: https://www.npmjs.com/package/document-promises
[npm-img]: https://img.shields.io/npm/v/document-promises.svg?style=flat-square
[cli-url]: https://travis-ci.org/jonathantneal/document-promises
[cli-img]: https://img.shields.io/travis/jonathantneal/document-promises.svg?style=flat-square
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/document-promises.svg?style=flat-square
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[git-url]: https://gitter.im/jonathantneal/document-promises
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg?style=flat-square
