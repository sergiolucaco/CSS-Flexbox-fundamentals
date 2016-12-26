$(document).ready(function() {

	$("#magnify").click(function(){
		$(this).hide(); // this === #magnify
		// $("#search").show(); //no animation
		$("#search").toggle("scale"); 
		$("#search").css("display","block"); 

	})

});

