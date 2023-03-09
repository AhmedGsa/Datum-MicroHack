const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
form.onsubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/v1/auth/login",{
            email: email.value,
            password: password.value
        });
        window.location.href = "/marketplace";
    } catch (error) {
        console.log(error);
    }
}