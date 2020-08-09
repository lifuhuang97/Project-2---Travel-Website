const navbar = document.getElementById('main-nav');

window.onscroll = () => {
	if (window.pageYOffset > 100) {
		navbar.classList.remove('top');
	} else {
		navbar.classList.add('top');
	}
};
