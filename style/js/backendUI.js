
	//先来一些判断函数
	function isArray(arr) {
		if (typeof Array.prototype.isArray === 'function')
			return Array.prototype.isArray(arr);
		else
			return Object.prototype.toString.call(arr) === '[object Array]';
	}
	//这个是对象数组排序
	function by(name) {
		return function(a, b) {
			if (typeof a === 'object' && typeof b === 'object' && a && b) {
				var tempa = a[name], tempb = b[name];
				if (a === b)
					return 0;
				if (typeof a === typeof b)
					return a < b ? -1 : 1;
				return typeof a < typeof b ? -1 : 1;
			}
			else {
				throw('error');
			}
		}
	}
	//用个对象放UI交互算了……不写构造器了orz
	var UI = {
		localdata: {}
	};
	//初始化，同时将所需数据给存储在UI中，只有当调用edit或者delete的时候才更新数据并重新保存，此时会重新调用初始化函数
	//来将页面初始化，然后重新绑定事件
	UI.init = function(data) {
		this.localdata = data;
		this.renderImg(this.localdata['img']);
		this.renderType(this.localdata['type']);
		this.hoverEffect();
		$(".optionicon").hide();
	}
	//弹出层UI，接受多个参数，参数形式为一维数组，数组第一位存btn的ID名或class名，第二位存弹出层的ID名，默认遮罩层的class为blacker
	UI.popbox = function() {
		//遍历参数，用的是ES5的方法
		Array.prototype.forEach.call(arguments, function(item) {
			//只有当给的参数是数组且数组长度为2时才进行下一步
			if (isArray(item) && item.length === 2) {
				var btn = item[0], popbox = item[1];
				//先检测传进来的是btn的ID还是class
				if ($("#" + btn).length)
					btn = "#" + btn;
				else if ($("." + btn).length)
					btn = "." + btn;
				else
					return false;
				$(btn).prop('click', null).off('click').click(function() {
					$(".blacker").show();
					$("#" + popbox).show();
				})
			}
		})
	}
	//弹出层隐藏UI，默认关闭按键的class为closePop，且弹出层统一class名为popbox，遮罩层class为blacker
	UI.hide = function() {
		$(".closePop").click(function() {
			$(this).parents(".popbox").hide().siblings(".blacker").hide();
		})
	}
	//渲染图片，data由controller.js来传递
	UI.renderImg = function(data) {
		var str = [];
		//根据sequence排序
		data = data.sort(by('sequence'));
		for (var i = 0; i < data.length; i ++) {
			str.push("<div class='imgShow hoverEffect' draggable=true data-index='" + data[i]['sequence'] +"' code='" + data[i]['imgid'] + "'>");
			str.push("<div class='imgShowContent'>");
			str.push("<div class='imgLink'><img src='" + data[i]['url'] + "'></div>");
			str.push("<div class='imgName'>" + data[i]['imgname'] + "</div>");
			str.push("<div class='optionicon imgOption'><i class='fa fa-pencil imgEditIcon'></i><i class='fa fa-times imgDeleteIcon'></i></div>");
			str.push("</div></div>")
		}
		$("#imgList").html(str.join(''));
		//鼠标点击后通过ajax更新重新渲染页面 || 拖动图片时hover经过某个nav时ajax更新渲染页面
	}
	//渲染分类
	UI.renderType = function(data) {
		var str = [], count = 0;
		for (var i = 0; i < data.length; i ++) {
			str.push("<li class='hoverEffect' code='" + data[i]['typeid'] + "' type='type'>" + data[i]['type'])
			str.push(" <span class='typeNum'> (" + data[i]['num'] + ") </span>");
			str.push('<div class="optionicon typeOptionIcon"><i class="fa fa-pencil typeEditIcon"></i><i class="fa fa-times typeDeleteIcon"></i></div>')
			str.push("</li>")
			count += data[i]['num'];
		}
		var first = [];
		first.push("<li class='hoverEffect' code='all' type='type'>全部 <span class='classNum'> (" + count + ') </span>');
		first.push('<div class="optionicon typeOptionIcon"><i class="fa fa-pencil typeEditIcon"></i><i class="fa fa-times typeDeleteIcon"></i></div>')
		first.push("</li>");
		str.unshift(first.join(''));
		$("#sideNavList>.sideNavUl").html(str.join(""));
	}
	//hover效果
	UI.hoverEffect = function() {
		//移除之前的mousehover事件
		$(".hoverEffect").prop('mouseenter', null).off('mouseenter').mouseenter(function() {
			$(this).find(".optionicon").show();
		})
		$(".hoverEffect").prop('mouseleave', null).off('mouseleave').mouseleave(function() {
			$(this).find(".optionicon").hide();
		})
	}
	//拖动效果
	UI.imgDrag = function(ele) {
		//
	}
	
	UI.popbox(['createAlbumBtn', 'createAlbum'], ['importImgBtn', 'importImg']);
	UI.hide();