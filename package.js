Package.describe({
	summary: "A collection of HTML element and attribute style-normalizations.",
	version: "1.1.1",
	git: "https://github.com/stevezhu/meteor-normalize.scss.git"
});

Package.onUse(function(api) {
	api.versionsFrom("METEOR@0.9.0");
	api.use('stevezhu:sass@1.2.1');
	api.addFiles('sass_include_paths.json', 'server');
});
