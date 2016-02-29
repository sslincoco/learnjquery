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

	});
})(this,this.document);