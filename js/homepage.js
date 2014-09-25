$(function(){
	var map = L.mapbox.map('map', 'examples.map-i87786ca', {
		zoomControl: false
		}).setView([41, 29], 10);
	appendList(".countryList",countries);
	appendList(".cityList",cities);
	$("#country").on("focus",function(){
		$(".countryList ul").html('');
		appendList(".countryList",countries);
		showCountryList();
		selectFromList(".countryList","#country");
	})
	$("#city").on("focus",function(){
		$(".cityList ul").html('');
		appendList(".cityList",cities);
		showCityList();
		selectFromList(".cityList","#city");
	})
	$("body").on("click",function(){
		hideCountryList();
		hideCityList();
	})
	$("#contactForm").on("click",function(e){
		e.stopPropagation();
	})
	searchList("#country",countries,".countryList");
	searchList("#city",cities,".cityList");
	selectFromList(".countryList","#country");
})