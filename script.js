document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('useremail').value;
    const phone = document.getElementById('userphone').value;
    
    if (username === 'admin' && password === 'admin' && email !== '' && phone !== '') {
        
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.todo-app').style.display = 'block';
        document.querySelector('body').style.background = 'linear-gradient(to right, #6a11cb, #2575fc)'; // Change background color
    } else {
        alert('Invalid credentials or missing fields');
    }
});

document.getElementById('addTask').addEventListener('click', function () {
    const newTask = document.getElementById('newTask').value;
    if (newTask) {
        const li = document.createElement('li');
        li.textContent = newTask;
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
        
         
        li.addEventListener('click', function() {
            document.getElementById('taskList').removeChild(li);
        });
    }
});

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "") {
        alert('All fields are required.');
    } else if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
    } else {
         
        alert('Form submitted successfully!');
        document.getElementById('myForm').style.display = 'none';
        document.querySelector('.todo-app').style.display = 'block';
         
        document.querySelector('body').style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
    
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.todo-app').style.display = 'block';
    }
});
