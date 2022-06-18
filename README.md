# jsmp-infra-maksym-yakubov-camelize <a href="https://www.npmjs.com/package/jsmp-infra-maksym-yakubov-camelize"><img src="https://badgen.net/npm/v/jsmp-infra-maksym-yakubov-camelize" alt="Version"></a> <img src="coverage/badge-lines.svg" alt="Coverage">

> Convert any string to camelCase: `foo-bar` → `fooBar`

## Install

```sh
npm install jsmp-infra-maksym-yakubov-camelize
```
or
```sh
yarn add jsmp-infra-maksym-yakubov-camelize
```

## Usage

```js
import { camelize } from 'jsmp-infra-maksym-yakubov-camelize';

camelize('foo-bar');
//=> 'fooBar'

camelize('foo_bar');
//=> 'fooBar'

camelize('Foo-Bar');
//=> 'fooBar'
