let $menu    = document.querySelector('.mobile-menu-box');
let $overlay = document.querySelector('.mobile-menu-overlay');
let $menuBar = document.querySelector('.mobile-menu-bar');

let x1 = 0;
let x2 = 0;
let distance = 0;
let action = false;
let savedPosition = 0;

function menuController(value) {
	$menuBar.style.transform = 'translateX(' + value + 'px)';
	$overlay.style.opacity = (1 / 300 * value);
}


document.querySelector('.open-menu-btn').addEventListener('click', function() {
	menuController(300);
	$menu.style.visibility = 'visible'
})

document.querySelector('.mobile-menu-overlay').addEventListener('click', function() {
	menuController(0);
	$menu.style.visibility = 'hidden'
})



window.addEventListener('mousedown', function(e) {
	$menu.style.visibility = 'visible'
	x1 = e.pageX;
	action = true; 

});

window.addEventListener('mouseup', function() {

	action = false;
	savedPosition = distance;
	
	if (savedPosition >= 150) {
		menuController(300);
		savedPosition = 300;
	} else {
		menuController(0);
		savedPosition = 0;
	}
});

window.addEventListener('mousemove', function(e) {

	if (action) {
		x2 = e.pageX;
		distance = savedPosition + (x2 - x1);
	
		if (distance <= 300) {
			menuController(distance);
		}
	
	}

	
});
