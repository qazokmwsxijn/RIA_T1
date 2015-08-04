//这个js打算仿照webuploader的那个demo写的
(function() {
	var uploader = WebUploader.create({
		auto: false,
		server: '../Img/uploadImg',
		pick: '#filePicker',
		accept: {
			title: 'Images',
			extensions: 'gif,jpg,jpeg,bmp,png',
			mimeTypes: 'image/*'
		},
		fileNumLimit: 20,
		fileSizeLimit: 40 * 1024 * 1024
	})
	$("#filePicker").find("div").css({
		'height': '50px',
		'width': '100px'
	})
	//生成缩略图、输入框、type选择框
	function addFile(file) {
	}
	//加入列表的处理函数
	uploader.onFileQueued = function(file) {
		file.on("statuschange", function(cur, prev) {
			//绑定成功之后的处理函数，向后台发送post请求，存储该图片的name/type/link等信息
			//失败的话return false，同时print错误信息
		})
	}
})()