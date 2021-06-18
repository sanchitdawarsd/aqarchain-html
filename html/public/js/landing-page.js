$(function () {

	if($(".owl-carousel").length > 0)
	{
		$(".owl-carousel").owlCarousel({
			items:1,
			margin:30,
			nav:true,
			nav: true,
			navText: ["<img src='/public/images/owl-carousel-previous-icon.svg'>","<img src='/public/images/owl-carousel-next-icon.svg'>"],
			dots:false
		});
	}
});