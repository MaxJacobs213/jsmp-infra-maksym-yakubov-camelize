# jsmp-infra-maksym-yakubov-camelize

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
