// Function to handle user registration
function registerUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        return { success: false, message: 'Username already exists.' };
    }

    users[username] = { password: password, plan: 'basic' };
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'User registered successfully.' };
}

// Function to handle user login
function loginUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (!users[username] || users[username].password !== password) {
        return { success: false, message: 'Invalid username or password.' };
    }

    return { success: true, message: 'Login successful.', plan: users[username].plan };
}

// Function to check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Function to handle logout
function logoutUser() {
    localStorage.removeItem('loggedInUser');
}

// Function to handle accessing catalogue page
function accessCataloguePage() {
    if (!isLoggedIn()) {
        alert('Please login to access the catalogue.');
        window.location.href = 'login.html';
    } else {
        // Redirect to catalogue page
        window.location.href = 'catalogue.html';
    }
}

// Function to handle accessing premium content
function accessPremiumContent() {
    if (!isLoggedIn()) {
        alert('Please login to access premium content.');
        window.location.href = 'login.html';
    } else {
        let loggedInUser = localStorage.getItem('loggedInUser');
        let users = JSON.parse(localStorage.getItem('users'));
        if (users[loggedInUser].plan !== 'premium') {
            alert('You need a premium account to access this content.');
            window.location.href = 'index.html'; // Redirect to home page
        }
    }
}
