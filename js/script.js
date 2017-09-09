	var search = document.querySelector(".btn-searching");
	var slide = document.querySelector(".form-show");
	
	document.addEventListener("DOMContentLoaded", function (loading){
		slide.classList.toggle("form-hidden");
	});
	
	search.addEventListener("click", function (evt){
		evt.preventDefault();
		slide.classList.toggle("form-hidden");
	});