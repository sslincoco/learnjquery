// $(function(){

// });
(function(window,document){
	
	$(document).ready(function(){
		$this = $(this);

		//搜索框文字效果
		$(".search").blur(function(){
			$(this).val("");
		}).keyup(function(event){
			if (event.keyCode==13) {
				console.log("回车提交信息");
				$(".search").blur();
			}

		});

		// 网页换肤
		$(".skin li").each(function(index){
			this.index = index;
		});
		$(".skin li").on("click",function(){
			var index = this.index;
			$(this).addClass("selected").siblings().removeClass("selected");
			$("head").append('<link rel="stylesheet" type="text/css" href=./css/skin'+index+'.css>')
		});

		//点击小图片，上方显示对应的大图片
		$(".smallPic li").each(function(index){
			this.index =index;
		});
		$(".smallPic li").on("click",function(){
			var index = this.index;
			$(".bigPic ul").css("left",-index*310+'px');

		});

		//选项卡点击切换
		$(".tab_btn").each(function(index){
			this.index = index;
		});
		$(".tab_btn").on("click",function(){
			var index = this.index;
			$(this).addClass("clicked").siblings().removeClass("clicked");
			$(".jnInfo li").eq(index).show() .siblings().hide();

		});

		//选择右侧的颜色，左边显示相应的图片
		$(".color_choice li").each(function(index){
			this.index = index;
		});
		$(".color_choice li").on("click",function(){
			var index = this.index;
			$(this).css("border-color","#f90") .siblings().css("border-color","#a2a2a2");
			$(".bigPic ul").css("left",-index*3*310+'px');
			$(".smallPic ul").css("left",-index*297+'px');
			var color = $(this).find("img").attr("alt");
			$(".jnColor").html(color);

		});

		//当选择尺寸时，在上方显示尺寸
		$(".size_choice li").on("click",function(){
			var size = $(this).html();
			$(this).addClass("bg_size") .siblings().removeClass("bg_size");
			$(".jnSize").html(size);

		});

		//当商品数量变化时，下面的金额也随之变化
		$(".jnNum").change(function(){
			var num = parseInt($(this).find("option:selected").val());
			$(".pay").html(num*200+'元');
		});

		//评价商品
		$(".evaluation li a").each(function(index){
			this.index= index;
		});
		$(".evaluation a").on("click",function(){
			var index =this.index;
			console.log("您的评价是："+(index+1)+"分");
			alert("您的评价是："+(index+1)+"分");
			// $(this).css("background-position","0 -96px");
			// $(this).addClass("2star");


			$(this).parent().parent().removeClass() .addClass("star"+(index+1));
		});

		// 加入购物车效果
		$(".cart").on("click",function(){
			var product = $(".jnDetail h3").html();
			var size = $(".jnSize").html();
			var color =  $(".jnColor").html();
			var num = parseInt($(".jnNum option:selected").val());
			var total = num *200;
			var text = "您购买的产品是："+product+"；尺寸是："+size+"；颜色是："+color+"；数量是："+num+"；总价是："+total+"。";

			$(".overlay").show();
			$(".box_dialog").show();
			$(".main_content p").html(text);
		});

	});
})(this,this.document);