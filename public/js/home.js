// display the links in the header
let links_container = document.querySelectorAll(".links");
let url = "../test.json";
fetch(url)
	.then((resolved) => {
		return resolved.json();
	})
	.then((data) => {
		data = data.map((ele) => {
			return `<a href=${ele.url} ><li class="link" >${ele.link}</li></a>`;
		});
		const links_container_html = data.join("");
		links_container.forEach((container) => {
			container.innerHTML = links_container_html;
		});
	});
// add active class to the clicked
let links = document.querySelectorAll(".links a");

links.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		e.currentTarget.classList.add("clicked");
	});
});
// footer date year
let year = document.querySelector(".year");
let date = new Date();
if (year) {
	year.innerHTML = date.getFullYear();
}
