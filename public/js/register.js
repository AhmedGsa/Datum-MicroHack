const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const nameInput = document.querySelector('#name');
form.onsubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/v1/auth/register",{
            email: email.value,
            password: password.value,
            name: nameInput.value
        });
        window.location.href = "/marketplace";
    } catch (error) {
        console.log(error);
    }
}