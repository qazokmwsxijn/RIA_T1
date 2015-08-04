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
	<link rel="stylesheet" href="<?php echo $cssUrl?>/webuploader.css">
	<!--虽然CI可以自己加载jQuery类，但是我还是选择用这种路径来加载一下orz-->
	<script type="text/javascript" src="<?php echo $jsUrl?>/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo $jsUrl?>/webuploader.min.js"></script>
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
				</ul>
			</div>
		</div>
		<div class="imgContent">
			<div id="importImgBtn">
				<p>导入图片</p>
			</div>
			<div id="imgList">
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
			<form id="createAlbumForm" class="form-inline">
				<label for="albumName" class="control-label">相册名</label>
				<input type="text" name="albumName" id="albumName" placeholder="相册名">
				<button type="submit">提交</button>
			</form>
		</div>
		<div class="popboxInfo"></div>
	</div>
	<div class="popbox" id="editAlbum">
		<div class="popboxTitle">
			<h1>修改相册</h1>
			<span class="closePop">X</span>
		</div>
		<div class="popboxForm">
			<!--这个表单样式我打算仿一仿bootstrap-->
			<form id="editAlbumForm" class="form-inline">
				<label for="editalbumName" class="control-label">相册名</label>
				<input type="text" name="editalbumName" id="editalbumName" placeholder="相册名">
				<button type="submit">提交</button>
			</form>
		</div>
		<div class="popboxInfo"></div>
	</div>
	<div class="popbox" id="editImg">
		<div class="popboxTitle">
			<h1>修改照片信息</h1>
			<span class="closePop">X</span>
		</div>
		<div class="popboxForm">
			<!--这个表单样式我打算仿一仿bootstrap-->
			<form id="editImgForm" class="form-inline">
				<label for="editImgName" class="control-label">相片名</label>
				<input type="text" name="editImgName" id="editImgName" placeholder="相册名">
				<button type="submit">提交</button>
			</form>
		</div>
		<div class="popboxInfo"></div>
	</div>
	<div class="popbox" id="importImg">
		<div class="popboxTitle">
			<h1>导入照片</h1>
			<span class="closePop">X</span>
		</div>
		<div class="popboxForm">
			<div id="fileList" class="uploader-list"></div>
			<div id="filePicker">选择图片</div>
		</div>
	</div>
	<script type="text/javascript" src="<?php echo $jsUrl?>/backendUI.js"></script>
	<script type="text/javascript" src="<?php echo $jsUrl?>/backendController.js"></script>
	<script type="text/javascript" src="<?php echo $jsUrl?>/backendImgUploader.js"></script>
</body>
</html>