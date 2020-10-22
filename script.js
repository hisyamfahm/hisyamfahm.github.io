// function myFunction(){
// 	document.getElementById("logo").style.display = "none";
// };

// function changeTheme(){
// 	let hd = document.getElementById("head").value;
// 	document.getElementById("header").style.backgroundColor = hd;
// }

$(document).ready(function(){
	$("#js").click(function(){
		$("#slider").slideToggle("slow");
	});

	$("#back").change(function(){
		$("html").css("background-color",$(this).val());
	});
	$("#head").change(function(){
		$("#header").css("background-color",$(this).val());
	});
	$("#foot").change(function(){
		$("#footer").css("background-color",$(this).val());
	});
});