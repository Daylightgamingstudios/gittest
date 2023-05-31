
    // Initialize Firebase
    var firebaseConfig = {
      
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

    // Get references to the signup form fields
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('password');
    var signupForm = document.getElementById('signup-form');

    // Add signup form submit event listener
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      var email = emailField.value;
      var password = passwordField.value;

      // Create a new user with email and password
      auth.createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
          // Signup successful, redirect to the dashboard
          window.location.href = 'dashboard.html';
        })
        .catch(function(error) {
          // Handle signup errors
          console.error('Signup error:', error.message);
        });
    });
