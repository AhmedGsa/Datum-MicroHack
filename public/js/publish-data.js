const form = document.querySelector(".form");
const companyName = document.querySelector("#companyName");
const title = document.querySelector("#DataTitle");
const desc = document.querySelector("#description");
const category = document.querySelector("#category");
const fileInput = document.querySelector("#file");

form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("title", title.value);
    formData.append("desc", desc.value);
    formData.append("owner", companyName.value);
    formData.append("category", category.value);
    console.log(formData);
    try {
        await axios.post("/api/v1/marketplace-data", formData)
    } catch (error) {
        console.log(error);
    }
}