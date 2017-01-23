$(document).ready(function(){
	$("nav a:nth-child(1)").addClass("active")

//alert("hey!")

	$("nav a").click(function(event){
		event.preventDefault()
		goTo = $(this).attr("href")
		$("nav a").removeClass("active")
		$(this).addClass("active")
		$("html, body").animate({scrollTop:$(goTo).offset().top},1000)
	}) //end of nav a click


	$("section").each(function(){
		$(this).attr("start", $(this).offset().top-1)
		$(this).attr("end", $(this).offset().top+$(this).height())

	})

	$(window).scroll(function(value, index){
		curr = $(document).scrollTop()
		//console.log(curr)
		$("nav a").removeClass("active")
		
		$("section").each(function(){
			if((curr > $(this).attr("start")) && (curr < $(this).attr("end"))){
				$("nav .inner a").eq($(this).index()).addClass("active")
			}
		})
	})

	var total = 3;
	var current = 1;

	$(".left1").click(function() {
		if(current>1){
			$(".sliderbox1").animate({left:"+=1040"},500)
			current--;
		}
	})//end left click
	$(".right1").click(function() {
		if(current<total) {
			$(".sliderbox1").animate({left:"-=1040"},500)
			current++;
		}
	})//end right click

	var total2 = 3;
	var current2 = 1;

	$(".left2").click(function() {
		if(current2>1){
			$(".sliderbox2").animate({left:"+=1020"},500)
			current2--;
		}
	})//end left click
	$(".right2").click(function() {
		if(current2<total2) {
			$(".sliderbox2").animate({left:"-=1020"},500)
			current2++;
		}
	})//end right click

})//end doc ready