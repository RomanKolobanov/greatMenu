    var $mainWrapper = $("#main-wrapper");

    $('.menu-icon').click(function(){
        $(this).toggleClass('active');
        $mainWrapper.toggleClass('active');
        // $('#nav-menu').toggleClass('main-toggle');
    });

    window.addEventListener("load", function() {
    	var bg = document.querySelector("#bg");
    	var title = document.querySelector(".lead-wrap");
    	bg.classList.add('active-bg');


    	// 	let x = 0;
    	// if (x !== 0) {
    	// 	clearTimeout();
    	// } else {
    	// 	let delayTitle = setInterval(, 5000);
    	// 	delayTitle;
    	// 	x++;
    	// }



    	let titledelay = setInterval(function() {
    		let x = 0;
    		if (x !== 0) {
    			clearInterval(titledelay);
    		} else {
    			title.classList.add('active-bg')
    			x++;
    			return true;
    		}
    	}, 700)
    	

});