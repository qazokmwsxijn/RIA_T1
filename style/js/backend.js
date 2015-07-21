(function() {
	//先来一些判断函数
	function isArray(arr) {
		if (typeof Array.prototype.isArray === 'function')
			return Array.prototype.isArray(arr);
		else
			return Object.prototype.toString.call(arr) === '[object Array]';
	}
	//用个对象放UI交互算了……不写构造器了orz
	var UI = {};
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

	UI.popbox(['createAlbumBtn', 'createAlbum'], ['importImgBtn', 'importImg']);
	UI.hide();
})()