Package.describe({
	summary: "A collection of HTML element and attribute style-normalizations.",
	version: "1.1.5",
	git: "https://github.com/egladman/meteor-normalize.scss.git"
});

Package.onUse(function(api) {
	api.versionsFrom("METEOR@1.2");
	api.use('fourseven:scss@3.2.0');
	api.addFiles('_normalize.scss', 'client', { isImport: true });
});
