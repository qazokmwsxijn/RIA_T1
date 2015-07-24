(function() {
	//controller.js，负责和后台数据交互，并处理后台给的数据，然后传给UI
	var Controller = {};

	//增加照片和增加分类
	Controller.addImg = function() {}

	Controller.addType = function() {}

	//删除照片和删除分类
	Controller.deleteImg = function() {}

	Controller.deleteType = function() {}

	//修改照片和修改分类
	Controller.editImg = function() {}

	Controller.editType = function() {}

	//查询图片和查询分类
	Controller.getImg = function() {
		$.post("../Img/getImg", {typeid: 2}, function(data) {
			console.log(JSON.parse(data));
		})
	}

	Controller.getType = function() {
		$.get("../Img/getType", function(data) {
			console.log(JSON.parse(data));
		})
	}

	//绑定页面click事件
	Controller.bindClick = function() {}

	//初始化
	Controller.init = function() {}

	Controller.getImg();
	Controller.getType();
})()