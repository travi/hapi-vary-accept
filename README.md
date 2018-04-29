# hapi-vary-accept

hapi pre-response handler to include Accept in the Vary header

<!-- status badges -->
[![Build Status][ci-badge]][ci-link]
[![Codecov](https://img.shields.io/codecov/c/github/travi/hapi-vary-accept.svg)](https://codecov.io/github/travi/hapi-vary-accept)

## Motivation

tl;dr: Google Chrome caches only the last response for any endpoint, regardless
of `content-type`, which results in rendering json data instead of the rendered
page based on the html representation.

While normally unnecessary, including `Accept` in the `Vary` header is the technically
correct way to clarify that a single endpoint responds with different responses
based on the `Accept` header of the request.

* https://bugs.chromium.org/p/chromium/issues/detail?id=94369
* https://bugs.chromium.org/p/chromium/issues/detail?id=108425
* https://stackoverflow.com/questions/1975416/what-is-the-function-of-the-vary-accept-http-header

## Usage

<!-- consumer badges -->
[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

### Installation

:warning: This plugin does not yet support hapi v17

```sh
$ npm install hapi-vary-accept --save
```

## Contribution

<!-- contribution badges -->
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/hapi-vary-accept
[npm-badge]: https://img.shields.io/npm/v/hapi-vary-accept.svg
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/travi/hapi-vary-accept.svg
[ci-link]: https://travis-ci.org/travi/hapi-vary-accept
[ci-badge]: https://img.shields.io/travis/travi/hapi-vary-accept.svg?branch=master
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
