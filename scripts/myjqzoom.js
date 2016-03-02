
	$(function(){

		//实现鼠标在大图上移动时，放大局部区域效果
		$(".bigPic").mousemove(function(e){
			var oleft = $(this).offset().left;
			var otop = $(this).offset().top;
			var opageX = e.pageX;
			var opageY = e.pageY;
			var x = opageX - oleft -75;
			var y = opageY -otop - 75;
			if (x>0 && x<160 ) {
				$(".zoomOut").css("left",x+'px');
			}else if (x<0) {
				$(".zoomOut").css("left",0);
			}
			else{
				$(".zoomOut").css("left",'160px');
			} 
			if (y>0 && y<160) {
				$(".zoomOut").css("top",y+'px');
			}else if (y<0) {
				$(".zoomOut").css("top",0);
			}else{
				$(".zoomOut").css("top",'160px');
			}
			var oimg = $(".bigPic .active").find("img")
			var iurl = oimg.attr("src").replace("small","big");
			var bgurl= 'url('+'./'+iurl;
			console.log(bgurl);
			var scale = 2.5;
			x= Math.max(Math.floor((x+75)*2.58)-200 ,0);
			y= Math.max(Math.floor((y+75)*2.58)-200 ,0);
			x= Math.min(x, 400);
			y= Math.min(y, 400);

			var bgpos = (-x)+'px'+' '+(-y)+'px';
			console.log(bgurl+'\n\n');
			console.log(bgpos);
			$this.find(".zoomIn").css("background-image",bgurl);
			$this.find(".zoomIn").css("background-position",bgpos);
			$(".zoomOut").show();
			$(".zoomIn").show();
		});

		$(".bigPic").mouseout(function(){
			$(".zoomOut").hide();
			$(".zoomIn").hide();
		});

});