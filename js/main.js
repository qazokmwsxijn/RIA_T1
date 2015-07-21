$(function() {

	var pu_bu_liu = {
		col_height: [0, 0, 0],
		min_idx: 0,
		cur_img: 3,

		makePbl: function(id) {
			var self = this;
			var wrapper = $("#" + id);
			var sections = wrapper.children();

			for(var i = 0; i < self.col_height.length; i++) {
				self.col_height[i] = sections.eq(i).height()/$(window).height()*100+0.25;
			}

			self.min_idx = self.col_height.indexOf(Math.min.apply(null, self.col_height));

			while(self.cur_img < sections.length) {
				sections.eq(self.cur_img).css({position: "absolute", top: self.col_height[self.min_idx]+1.5 + "vh", left: self.min_idx*20.5+1 +"vw"});
				self.col_height[self.min_idx] += sections.eq(self.cur_img).height() / $(window).height() * 100 + 1.5;
				self.min_idx = self.col_height.indexOf(Math.min.apply(null, self.col_height));
				self.cur_img++;
			}

			wrapper.css({height: Math.max.apply(null, self.col_height)+2 + "vh"});
			// console.log(self.col_height[self.min_idx]/$(window).height()+1.5);

			// console.log(self.min_idx);
		},

		reset: function() {
			var self = this;
			self.col_height = [0,0,0];
			self.min_idx = 0;
			self.cur_img = 3;
		}
	}

	var displayCtrl = {
		cur_block: "",
		cur_img: "",
		

		switchDisplayBlock: function(id) {
			var self = this;

			self.resetPopup();

			if(self.cur_block !== "") {
				$("#photo-display-"+self.cur_block).css({display: "none", opacity: 0});
				$("#page-nav-"+self.cur_block).css({color: "#d5d5d5"});
			}
			self.cur_block = id.split("-")[2];

			var wrapper = $("#" + id);

			wrapper.css({display: "block"});

			pu_bu_liu.reset();
			pu_bu_liu.makePbl(id);

			$("#page-nav-"+self.cur_block).css({color: "white"});
			setTimeout(function(){
				wrapper.css({opacity: 1});
			});
		},

		showDisplay: function() {
			$("#manage-page").css({display: "none"});
			$("#display-page").css({display: "block"});
		},

		init: function(id) {

			displayCtrl.showDisplay();
			displayCtrl.switchDisplayBlock(id);
		},

		showPopup: function(obj) {
			this.cur_img = obj.parent().index();
			$(".img-popup").css({display: "block"});
			var src = obj.attr("src").replace("small", "large");
			$(".img-popup-large").attr("src", src);
		},


		resetPopup: function() {
			$("#display-page .img-popup").css({display: "none"});
			$("#display-page .img-popup .img-popup-bg").attr("src", "");
		},

		prevImage: function() {
			var self = this;
			if(self.cur_img == 0) return;
			console.log($("#photo-display-" + self.cur_block).children());
			var src = $("#photo-display-" + self.cur_block).children().eq(--self.cur_img).children("img").attr("src").replace("small", "large");
			$(".img-popup-large").attr("src", src);
		},

		nextImage: function() {
			var self = this;
			
			if(self.cur_img == $("#photo-display-" + self.cur_block).children().length-1) return;
			console.log($("#photo-display-" + self.cur_block).children());
			var src = $("#photo-display-" + self.cur_block).children().eq(++self.cur_img).children("img").attr("src").replace("small", "large");
			$(".img-popup-large").attr("src", src);
		}
	};

	var hash = window.location.hash;
	if(hash != "") {
		if(hash.split("/")[0].substring(1) == "display" && hash.split("/")[1] == "") {
			history.replaceState(null, "", "./#display/asdzxcqwe");
			displayCtrl.init("photo-display-asdzxcqwe");
		} else {
			history.replaceState(null, "", "./#display/" + hash.split("/")[1]);
			displayCtrl.init("photo-display-" + hash.split("/")[1]);
		}
	} else {
		history.replaceState(null, "", "./#display/asdzxcqwe");
		displayCtrl.init("photo-display-asdzxcqwe");
	}

	

	



	$(window).on("popstate", function(e) {
		var state = e.state;
		console.log(e);
		console.log( window.location.hash.split("/")[0]);
		if( window.location.hash.split("/")[0].substring(1) == "display") {
			displayCtrl.switchDisplayBlock("photo-display-" + window.location.hash.split("/")[1]);
		}
		
	});



	// $(".page-nav a").on("click", function(e) {
	// 	var nav_id = $(this).attr("id").split("-")[2];
	// });

	$("#photo-display .img-wrapper img").each(function() {
		$(this).on("click", function() {
			displayCtrl.showPopup($(this));
		});
	})

	$(".img-popup-close").on("click", function() {
		$(".img-popup").css({display: "none"});
		// var w_href = window.location.href;
		// var strs = w_href.split("#");
		// window.location.href = strs[0] + "#" + strs[1].split("/")[0];
	});

	$(".img-popup-left").on("click", function() {
		displayCtrl.prevImage();
	});

	$(".img-popup-right").on("click", function() {
		displayCtrl.nextImage();
	});
});



