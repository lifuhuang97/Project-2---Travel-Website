// Function expression to select elements

const selectElement = (e) => document.querySelector(e);

// Open menu on click
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});

// Close menu on click
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});

// Navbar lightbox effect >>> (to be worked on)

// const navbar = document.getElementById('header');

// window.onscroll = function () {
// 	if (window.pageYOffset < 100) {
// 		navbar.classList.add('navbar-top');
// 	} else {
// 		navbar.classList.remove('navbar-top').add('navbar-not-top');
// 	}
// };
