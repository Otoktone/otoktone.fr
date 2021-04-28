

function $(selector) {
	return document.querySelector(selector)
}

const showAsideBtn = $('.show-side-btn')
const sidebar = $('.sidebar')
const wrapper = $('#wrapper')

showAsideBtn.addEventListener('click', function () {
	$(`#${this.dataset.show}`).classList.toggle('show-sidebar')
	wrapper.classList.toggle('fullwidth')
})

if (window.innerWidth < 767) {
	sidebar.classList.add('show-sidebar');
}

window.addEventListener('resize', function () {
	if (window.innerWidth > 767) {
		sidebar.classList.remove('show-sidebar')
	}
})

$('.sidebar .close-aside').addEventListener('click', function () {
	$(`#${this.dataset.close}`).classList.add('show-sidebar')
	wrapper.classList.remove('margin')
})


// Global defaults
window.animation.duration = 2000; // Animation duration



