
    // Initialize Firebase
    var firebaseConfig = {
      // Replace with your own Firebase config object
      apiKey: "AIzaSyDf8WKtC3igTauCp2y7Af8NdBZn4YQty-w",
  authDomain: "messagingapp-c71e3.firebaseapp.com",
  projectId: "messagingapp-c71e3",
  storageBucket: "messagingapp-c71e3.appspot.com",
  messagingSenderId: "405110883840",
  appId: "1:405110883840:web:1eea502e952429c84a7ae5"
    };

    firebase.initializeApp(firebaseConfig);

    // Get a reference to the Firebase authentication service
    var auth = firebase.auth();

    // Get references to the login form fields
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('password');
    var loginForm = document.getElementById('login-form');

    // Add login form submit event listener
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      var email = emailField.value;
      var password = passwordField.value;

      // Sign in with email and password
      auth.signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
          // Login successful, redirect to the dashboard
          window.location.href = 'dashboard.html';
        })
        .catch(function(error) {
          // Handle login errors
          console.error('Login error:', error.message);
        });
    });
  