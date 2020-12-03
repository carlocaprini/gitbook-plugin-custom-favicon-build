# gitbook-plugin-custom-favicon-build

Add your own favicon to gitbook themes.

Depending on the command used for building your gitbook, this plugin will:

* delete the gitbook favicon located at `_book/gitbook/images/favicon.ico` and replace it with your own when you are *serving* the gitbook (e.g.`gitbook serve .`);
* delete the gitbook favicon located at `{targetFolder}/gitbook/images/favicon.ico` and replace it with your own when you are *building* the gitbook (e.g.`gitbook build . {targetFolder}`: the command `gitbook build . public` will apply the favicon update to `public/gitbook/images/favicon.ico`).

## Install via gitbook

### In book.json

* Add `custom-favicon-build` to your `plugins` array
* Add path to your favicon in `custom-favicon-build.favicon` under `pluginsConfig`:

```json
{
	"plugins" : ["custom-favicon-build"],
	"pluginsConfig" : {
		"custom-favicon-build": {
			"favicon": "path/to/favicon.ico"
		}
	}
}
```

### Using gitbook-cli

```bash
gitbook install
```

### Using NPM
```bash
npm install gitbook-plugin-custom-favicon-build
```

## Note

This is a [fork](https://github.com/Bandwidth/gitbook-plugin-custom-favicon).
