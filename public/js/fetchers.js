let users_link = "http://localhost:5000/api/v1/requested-data";
method = { method: "GET" };

const getData = async (url) => {
	let { data } = await axios.get(url);
	let users_container = document.querySelector(".users .container");
	data = data.data;
	console.log(data);
	data = data.map((user) => {
		const { purpose, companyName, requesterEmail, requesterName, requesterNumber, title, desc } = user;
		return `	<div class="user">
					<div class="user-info">
						<div class="test">
							<img src="./assets/user_image.jpg" alt="" />
						</div>
						<div class="user-content">
							<h5 class="job">${title}</h5>
							<p class="name">${requesterName}</p>
							<p class="para-fetcher">Data fetcher : <span class="fetcher">${companyName}</span></p>
							<p class="reason">${purpose}</p>
						</div>
					</div>
					<div class="description">
						<h6>Description</h6>
						<p class="description">${desc}</p>
					</div>
					<div class="contact">
						<h6>contact</h6>
						<p>${requesterNumber}</p>
						<p>${requesterEmail}</p>
					</div>
				</div>`;
	});
	users_container.innerHTML = data.join("");
};
getData(users_link);
