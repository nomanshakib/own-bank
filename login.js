document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'ownbank@gmail.com' && password === 'ownbank') {
        window.location.href = 'ownbank.html';
    }
    else {
        alert("Wrong Password, You Noob");
    }
})