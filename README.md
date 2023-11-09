# hapi-vary-accept

hapi pre-response handler to include `Accept` in the `Vary` header

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Motivation](#motivation)
* [Usage](#usage)
  * [Installation](#installation)
* [Contribution](#contribution)
  * [Verification](#verification)

## Motivation

Google Chrome caches only the last response for any endpoint, regardless of
`content-type`, which results in rendering json data instead of the rendered
page based on the html representation. These values are cached even with the
`Cache-Control` header set to `no-cache` in order to optimize operations like
navigating back or duplicating a tab.

While normally unnecessary because of configuring the headers to prevent
caching,including `Accept` in the `Vary` header does technically further inform
a client that a single endpoint responds with different responses based on the
`Accept` header of the request.

* <https://bugs.chromium.org/p/chromium/issues/detail?id=94369>
* <https://bugs.chromium.org/p/chromium/issues/detail?id=108425>
* <https://stackoverflow.com/questions/1975416/what-is-the-function-of-the-vary-accept-http-header>

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

### Installation

:warning: This plugin does not yet support hapi v17

```sh
$ npm install hapi-vary-accept --save
```

## Contribution

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Renovate][renovate-badge]][renovate-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]

<!--contribution-badges end -->

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/hapi-vary-accept

[npm-badge]: https://img.shields.io/npm/v/hapi-vary-accept?logo=npm

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/travi/hapi-vary-accept.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/travi/hapi-vary-accept/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/travi/hapi-vary-accept/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/travi/hapi-vary-accept

[coverage-badge]: https://img.shields.io/codecov/c/github/travi/hapi-vary-accept?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release
