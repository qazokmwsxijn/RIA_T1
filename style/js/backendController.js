(function() {
	var localData = {};
	//controller.js，负责和后台数据交互，并处理后台给的数据，然后传给UI
	var Controller = {};

	//增加照片和增加分类
	Controller.addImg = function() {}

	Controller.addType = function() {
		$("#createAlbumForm").submit(function(e) {
			e.preventDefault();
			var typename = $("#albumName").val(), textinfo = $(this).parent().siblings('.popboxInfo');
			if (!typename) {
				textinfo.html("输入框不可为空");
				return ;
			}
			$.post('../Img/addType', {typename: typename}, function(data) {
				if (data == 1) {
					textinfo.html("插入成功");
					window.location.reload();
				}
				else
					textinfo.html("插入失败，请重试");
			})
		})
	}

	//删除照片和删除分类
	Controller.deleteImg = function() {
		$(".imgDeleteIcon").click(function() {
			var imgid = $(this).parents(".hoverEffect").attr("code");
			$.post('../Img/deleteImg', {imgid: imgid}, function(data) {
				if (data == 1) {
					alert("删除成功！")
					window.location.reload();
				}
			})
		})
	}

	Controller.deleteType = function() {
		$(".typeDeleteIcon").click(function() {
			var typeid = $(this).parents('.hoverEffect').attr("code");
			if (typeid === 'all') {
				alert("总目录不可删除")
				return false;
			}
			$.post('../Img/deleteType', {typeid: typeid}, function(data) {
				if (data == 1) {
					alert("删除成功！")
					window.location.reload();
				}
			})
		})
	}

	//修改照片和修改分类，这两个函数太类似了，有空的时候我会想想怎么复用的……╮(╯▽╰)╭智商不够就是这么烦
	Controller.editImg = function() {
		var imgid;
		$(".imgEditIcon").click(function() {
			imgid = $(this).parents('.hoverEffect').attr('code');
			$(".blacker").show();
			$("#editImg").show();
		});
		$('#editImgForm').submit(function(e) {
			e.preventDefault();
			var imgname = $("#editImgName").val(), 
				textinfo = $(this).parent().siblings('.popboxInfo');
			$.post('../Img/editImg', {
				imgid: imgid,
				imgname: imgname
			}, function(data) {
				if (data == 1)
					window.location.reload();
			})
		})
	}

	Controller.editType = function() {
		var typeid;
		$(".typeEditIcon").click(function() {
			typeid = $(this).parents('.hoverEffect').attr('code');
			$(".blacker").show();
			$("#editAlbum").show();
		});
		$('#editAlbumForm').submit(function(e) {
			e.preventDefault();
			var typename = $("#editalbumName").val(), 
				textinfo = $(this).parent().siblings('.popboxInfo');
			$.post('../Img/editType', {
				typeid: typeid,
				type: typename
			}, function(data) {
				if (data == 1)
					window.location.reload();
			})
		})
	}

	//查询图片和查询分类
	Controller.getImg = function(typeid, init) {
		//这个地方传给我后台的typeid我说一下，全部这个分类的typeid统一为all，然后各个分类的typeid在getType的方法里面已经获得
		//了，你们把typeid保存到dom里面，然后引用这个接口的时候记得post就好……注意一定得是post啊-。-
		$.ajax({
			url: '../Img/getImg',
			type: 'post',
			async: init ? false : true,
			data: {typeid: typeid},
			success: function(data) {
				localData['img'] = JSON.parse(data);
			}
		})
	}

	Controller.getType = function(init) {
		$.ajax({
			url: '../Img/getType',
			type: 'get',
			async: init ? false : true,
			success: function(data) {
				localData['type'] = JSON.parse(data);
			}
		})
	}

	//绑定页面click事件
	Controller.bindClick = function() {}

	//初始化，绑定函数，发送同步ajax请求以得到数据并保存，然后调用UI.init()保存数据
	Controller.init = function() {
		this.getImg('all', true);
		this.getType(true);
		UI.init(localData);
		this.addType();
		this.deleteType();
		this.deleteImg();
		this.editType();
		this.editImg();
	}

	Controller.init();

})()