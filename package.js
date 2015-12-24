Package.describe({
	summary: "A collection of HTML element and attribute style-normalizations.",
	version: "1.1.3",
	git: "https://github.com/egladman/meteor-normalize.scss.git"
});

Package.onUse(function(api) {
	api.versionsFrom("METEOR@0.9.0");
	api.use('fourseven:scss@3.4.0-beta');
});
