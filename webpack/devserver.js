const path = require ('path');
/*Бывает так, что девсервер загружает только статичную версию из 
папки build, или вообще выдаёт обшибку "Cannot get / " в таком случае
нужно залесть в основной файл webpack.config.js и прописать 
common.output.publicPath = "/" Видимо после прошлой сборки в папку build
я зыбыл убрать там точку, ведь для сборки, нужно чтобы стояла ./ */
module.exports = function(){
	return {
		devServer: {//Можно легко изменить порт, по которому будет находиться сайт и куча других настроек в пункте dev-server
			// contentBase:'./build',//Указываем директорию, откуда будет строиться сайт на локальном сервере(по умолчанию сразу по адрессу localhost:8080 будет выводиться index.html), если в этой папке будет, например, blog.html , то эта страница будет доступна по https://localhost/blog.html
			// hot: true, //Это указание на то что мы используем горячую замену модулей Hot Module Replacement при ней может (и скороее всего так и случится) отключится live reload
			// stats: 'errors-only',//Теперь в косноли будут вылезать только ошибки
			static: {
        directory: path.join(__dirname, '../build'),
      },
			port: 9003,//теперича сайт будет открываться на этом порту
	   //  open: false, //при запуске девсервера браузер, выбранный по умолчанию откроется автоматически
	    client: {
				overlay: true,//выводит в браузере ошибки, допущенные при сборке с помощью наложения тёмного экрана на браузер.
				progress: true,//Показывает програсс бар компиляции в браузере 
	    }
		}
	}
}