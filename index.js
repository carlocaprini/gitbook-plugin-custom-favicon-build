var fs = require('fs');
var path = require('path');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			var args = process.argv;
			var dest = "_book";
			if (args[2] == "build" && args.length >= 5) {
				dest = args[4];
			}
			var pathFile = this.options.pluginsConfig && this.options.pluginsConfig['custom-favicon-build'].favicon;
			var favicon = path.join(process.cwd(), pathFile);
			var gitbookFaviconPath = path.join(process.cwd(), dest, 'gitbook', 'images', 'favicon.ico');
			if (pathFile && fs.existsSync(pathFile) && fs.existsSync(gitbookFaviconPath)){
				fs.unlinkSync(gitbookFaviconPath);
				fs.createReadStream(favicon).pipe(fs.createWriteStream(gitbookFaviconPath));
			}
		}
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
