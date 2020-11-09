const $like = document.querySelector("#like");
$like.addEventListener("click", () => ($like.style.color = "red"));
document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
});