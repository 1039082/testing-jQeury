$(document).ready(function(){


	//creating a litle game
		function getRandom(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			}
		var moveTime = 50;
		$("button.dtest1").hover(function(){
			var random1 = getRandom(0, 100);
			var time1 = getRandom(100, 1000);
				$(this).animate({left: random1 + "%"},time1);
				$(this).animate({ top: random1 + "%"},time1);
			},
			function(){
			var random1 = getRandom(0, 100);
			var time1 = getRandom(100, 1500);
				$(this).animate({left: random1 + "%"},time1);
				$(this).animate({ top: random1 + "%"},time1);
			});
		var point = 0
			$("button.dtest1").click(function(){
				$("#point").text(point += 1);
				moveTime -= 1;
			});
			$(".move").mouseenter(function(){
				$("#point").text(point -= point);
			});
			$("#tab").mousemove(function(event){
				$(".move").animate({left: event.pageX - 410, top: event.pageY - 390},moveTime,"linear");
				$("#delay1").delay(5);
				$("#delay2").delay(15);
				$("#delay3").delay(20);
		});
			//


// testing some stuff with buttons
			$("button.btest1").click(function(){
				$("p#ptest3").slideToggle(500);
				$("p:odd").toggle(1000);
			});
			$("button.btest4").hide();
			$("button.btest2").click(function(){
				$("p.ptest6").html("<strong>AAAAAAAAAAAAAAAHHHH</strong>");
				$("a.not1").attr("href", "https://www.youtube.com/?gl=NL&hl=nl").attr("target", "_blank").html("<li>Youtube</li>");
				$("a.not2").attr("href", "https://www.twitch.tv/").attr("target", "_blank").html("<li>twitch</li>");
				$("a.not3").attr("href", "https://store.steampowered.com/").attr("target", "_blank").html("<li>steam</li>");
				$("button.btest4").show();
				$(this).hide();
			});
			$("button.btest4").click(function(){
				$("p.ptest6").html("Click the white &#735;");
				$("a.not1").attr("href", "#").attr("target", "").html("<li>1</li>");
				$("a.not2").attr("href", "#").attr("target", "").html("<li>2</li>");
				$("a.not3").attr("href", "#").attr("target", "").html("<li>3</li>");
				$("button.btest2").show();
				$(this).hide();
			});
			$("button.btest3").click(function(){
				$("p.ptest4, p.ptest2").toggleClass("lol");
			});
		$("a.not1, a.not2, a.not3").click(function(){
				alert("don't click this");
			});
		//


	// search bar begin
		$("input#filter").on("keyup", function(){
			var input = $(this).val().toLowerCase();
			$("div#select p").filter(function(){
				$(this).toggle($(this).text().toLowerCase().indexOf(input)> -1)
			});
		});
		$("input#filter").focus(function(){
			$(this).animate({width: '85vw'},'slow',"swing");
		});
		$("input#filter").blur(function(){
			$(this).animate({width: '10vw'},'slow',"swing");
		});
	//search bar einde

	// loading icon start
		setInterval(function(){
					var div = $("div.dtest2");
					div.animate({left: '20px'},500,"swing");
					div.animate({top: '20px'},500,"swing");
					div.animate({left: '0px'},500,"swing");
					div.animate({top: '0px'},500,"swing");
				}, 2000);
	//loading icon einde

	//to the top off the page button begin
		$("#top").hide();
		$(window).scroll(function(){
			if($(document).scrollTop() > 100){
				$("#top").show();
			}
			else{
				$("#top").hide();
			}
		});
		$("#top").click(function(){
			$(document).scrollTop(0);
		});
		//to the top off the page button einde
});