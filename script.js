
document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to GreenGold Corporation. Let's build something together");
	
	// Toggle gallery visibility
document.getElementById('toggle-gallery-btn').addEventListener('click', function () {
    const gallery = document.getElementById('completed-project-gallery');
    if (gallery.style.display === 'none') {
        gallery.style.display = 'block';
    } else {
        gallery.style.display = 'none';
    }
});

});
