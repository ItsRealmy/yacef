<img height="90" src="https://gist.githubusercontent.com/ItsRealmy/1cdce4c09ebab7471cdeecf8283cbc47/raw/a7c1cdbb77f2d65be5811d9567a46e6b1fb5b083/yacef.svg" alt="yacef logo" />

# yacef

_Yet another configuration/environment file_

A lightweight and dead simple package meant as a replacement for `dotenv` which can quickly load [YAML](https://yaml.org/) files.

**Note**: This package is ES6-only. It doesn't support CommonJS.

## How to use

It's simple! Just put a `conf.yml` file in the root of your project (as in, the directory which you run `node` from), and you can import it into your project using `yacef/default`:

```js
import config from "yacef/default";
// ...
```

`config` will automatically be the parsed version of your `conf.yml` file. If you'd like to specify the path to a different YAML file, that's also possible:

```js
import yacef from "yacef";
const config = yacef("./path/to/file.yml");
```

That's how easy it is!

## Author & license

This package was made by me for [Yuuper](https://yuuper.com). This package is licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
