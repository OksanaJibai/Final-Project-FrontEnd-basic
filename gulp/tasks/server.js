export const server = (done) => {
	console.log(done)
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	});
}