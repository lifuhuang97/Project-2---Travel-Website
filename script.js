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
