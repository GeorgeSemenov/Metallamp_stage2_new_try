module.exports = function(){
	return {
		devServer: {//Можно легко изменить порт, по которому будет находиться сайт и куча других настроек в пункте dev-server
			contentBase:'./build',//Указываем директорию, откуда будет строиться сайт на локальном сервере(по умолчанию сразу по адрессу localhost:8080 будет выводиться index.html), если в этой папке будет, например, blog.html , то эта страница будет доступна по https://localhost/blog.html
			//hot: true, //Это указание на то что мы используем горячую замену модулей Hot Module Replacement при ней может (и скороее всего так и случится) отключится live reload
			stats: 'errors-only',//Теперь в косноли будут вылезать только ошибки
			port: 9003,//теперича сайт будет открываться на 9000 порту
			overlay: true,
	    open: true, //при запуске девсервера браузер, выбранный по умолчанию откроется автоматически
		}
	}
}