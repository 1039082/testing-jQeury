//zoom in for the picture
$(document).ready(function(){
	$(".modal").hide();
	$("#img01").hide();
	$("#test_img").click(function(){
		$(".modal").fadeIn();
		$("#img01").attr("src", this.src).slideDown("slow");
	});
	$(".close").click(function(){
		$(".modal").fadeOut();
		$("#img01").fadeOut();
	});
});