const form = document.querySelector(".request");
const fullname = document.querySelector("#FullName");
const companyName = document.querySelector("#companyName");
const title = document.querySelector("#DataTitle");
const desc = document.querySelector("#description");
const email = document.querySelector("#Email");
const phone = document.querySelector("#phone");
const purpose = document.querySelector("#purpose");

form.onsubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/v1/requested-data", {
            requesterName: fullname.value,
            requesterEmail: email.value,
            requesterNumber: phone.value,
            companyName: companyName.value,
            title: title.value,
            desc: desc.value,
            purpose: purpose.value
        })
    } catch (error) {
        console.log(error);
    }
}