// Navbar color toggling

const navbar = document.getElementById('main-nav');

window.onscroll = () => {
	if (window.pageYOffset > 100 && window.pageYOffset < 847) {
		navbar.classList.remove('pagetop');
		navbar.classList.remove('pagebottom');
	} else if (window.pageYOffset >= 847) {
		navbar.classList.remove('pagetop');
		navbar.classList.add('pagebottom');
	} else {
		navbar.classList.add('pagetop');
		navbar.classList.remove('pagebottom');
	}
};


const current_location_state = '.home-nav';

navbar.addEventListener('click', (e) => {
	
})