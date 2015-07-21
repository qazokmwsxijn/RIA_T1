<?php 
	$cssUrl = base_url().'style/css';
	$jsUrl = base_url().'style/js';
	$imgUrl = base_url()."style/img";
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>RIA_TASK1</title>
		<link rel="stylesheet" type="text/css" href="<?php echo $cssUrl?>/main.css">
		<script type="text/javascript" src="<?php echo $jsUrl?>/jquery.min.js"></script>
	</head>
	<body>
		<div id="display-page">
			<header class="page-header">
				<nav class="page-nav">
					<a id="page-nav-lesty" href="./#display/lesty">Lesty</a>
					<a id="page-nav-zhimeng" href="./#display/zhimeng">Zhimeng</a>
					<a id="page-nav-asdzxcqwe" href="./#display/asdzxcqwe">Asdzxcqwe</a>
				</nav>
			</header>


			<div id="photo-display">
				<div class="photo-container" id="photo-display-lesty">
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/lesty/small/1.jpg">
					</section>
				</div>

				<div class="photo-container" id="photo-display-zhimeng">
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/zhimeng/small/1.jpg">
					</section>	
				</div>

				<div class="photo-container" id="photo-display-asdzxcqwe">
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/1.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/2.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/3.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/4.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/5.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/6.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/7.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/8.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/9.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/10.jpg">
					</section>
					<section class="img-wrapper">
						<img src="<?php echo $imgUrl?>/asdzxcqwe/small/11.jpg">
					</section>
				</div>	
			</div>


			<div class="img-popup">
				<div class="img-popup-bg"></div>
				<img class="img-popup-large" src="" alt="loading">
				<img class="img-popup-close" src="<?php echo $imgUrl?>/X.png" alt="close">
				<img class="img-popup-left img-popup-arrow" src="<?php echo $imgUrl?>/display-left.png">
				<img class="img-popup-right img-popup-arrow" src="<?php echo $imgUrl?>/display-right.png">
			</div>
		</div>
		
		<div id="manage-page">

		</div>


		<script type="text/javascript" src="<?php echo $jsUrl?>/main.js"></script>
	</body>
</html>
