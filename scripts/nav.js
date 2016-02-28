
$(function(){
	$("#nav li").on("mouseover",function(){
		$(this).find(".jnNav").eq(0).show();
	});
	$("#nav li").on("mouseout",function(){
		$(this).find(".jnNav").eq(0).hide();
	});

});