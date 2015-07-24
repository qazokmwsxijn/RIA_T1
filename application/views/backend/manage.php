<?php 
	$cssUrl = base_url().'style/css';
	$jsUrl = base_url().'style/js';
	$imgUrl = base_url()."style/image";
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>RIA杨帆 TASK1</title>
	<link rel="stylesheet" href="<?php echo $cssUrl?>/backend.css">
	<link rel="stylesheet" href="<?php echo $cssUrl?>/font-awesome.min.css">
	<!--虽然CI可以自己加载jQuery类，但是我还是选择用这种路径来加载一下orz-->
	<script type="text/javascript" src="<?php echo $jsUrl?>/jquery.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="sideNav">
			<div id="sideNavHeader" class="text-center">
				<p>照片管理器</p>
			</div>
			<div id="sideNavCreate" class="text-center">
				<p id="createAlbumBtn">
					<span id="addIcon">+</span>新建相册
				</p>
			</div>
			<div id="sideNavList">
				<ul class="sideNavUl">
					<li>全部<span class="classNum">(11)</span></li>
					<li>风景<span class="classNum">(5)</span><!--div class="classOptionIcon"><i class="fa fa-pencil classEditIcon"></i><i class="fa fa-times classDeleteIcon"></i></div--></li>
					<li>人物<span class="classNum">(6)</span></li>
				</ul>
			</div>
		</div>
		<div class="imgContent">
			<div id="importImgBtn">
				<p>导入图片</p>
			</div>
			<div id="imgList">
				<div class="imgShow"></div>
				<div class="imgShow"></div>
				<div class="imgShow"></div>
				<div class="imgShow"></div>
			</div>
		</div>
	</div>
	<div class="blacker"></div>
	<div class="popbox" id="createAlbum">
		<div class="popboxTitle">
			<h1>创建相册</h1>
			<span class="closePop">X</span>
		</div>
		<div class="popboxForm">
			<!--这个表单样式我打算仿一仿bootstrap-->
			<form class="form-inline">
				<label for="albumName" class="control-label">相册名</label>
				<input type="text" name="albumName" id="albumName" placeholder="相册名">
				<button type="submit">提交</button>
			</form>
		</div>
	</div>
	<div class="popbox" id="importImg">
		<div class="popboxTitle">
			<h1>导入照片</h1>
			<span class="closePop">X</span>
		</div>
		<div class="popboxForm">
			<!--这个表单样式我打算仿一仿bootstrap-->
		</div>
	</div>
	<script type="text/javascript" src="<?php echo $jsUrl?>/backendUI.js"></script>
	<script type="text/javascript" src="<?php echo $jsUrl?>/backendController.js"></script>
</body>
</html>