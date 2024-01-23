function auth() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation, you may want to improve this
    if (email === 'admin@gmail.com' && password === '123456') {
        window.location.href = 'landingpage.html';
        alert("Login successful");
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid credentials. Please try again.';
    }
}