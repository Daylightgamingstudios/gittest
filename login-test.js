// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDf8WKtC3igTauCp2y7Af8NdBZn4YQty-w",
    authDomain: "messagingapp-c71e3.firebaseapp.com",
    projectId: "messagingapp-c71e3",
    storageBucket: "messagingapp-c71e3.appspot.com",
    messagingSenderId: "405110883840",
    appId: "1:405110883840:web:1eea502e952429c84a7ae5",
    measurementId: "G-KB92SWGM6N"
  };
 
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase authentication service
  var auth = firebase.auth();
  
  // Get references to the signup form fields
  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');
  var confirmPasswordField = document.getElementById('confirm-password');
  var nameField = document.getElementById('name');
  var phoneField = document.getElementById('phone');
  var termsField = document.getElementById('terms');
  var signupForm = document.getElementById('signup-form');
  
  // Add signup form submit event listener
  signupForm.addEventListener('signup', function(event) {
    event.preventDefault(); // Prevent form submission
    
  
    var email = emailField.value;
    var password = passwordField.value;
    var confirmPassword = confirmPasswordField.value;
    var name = nameField.value;
    var phone = phoneField.value;
    var agreedToTerms = termsField.checked;
  
    // Additional validation logic
    if (!agreedToTerms) {
      console.error('Please agree to the terms and conditions.');
      return;
    }
  
    if (password !== confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }
  
    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Get the created user's unique ID
        var userId = userCredential.user.uid;
  
        // Store additional user information in Firestore
        var userRef = firebase.firestore().collection('users').doc(userId);
        userRef.set({
          name: name,
          phone: phone
        })
        .then(function() {
          // Signup and user information storage successful, redirect to the dashboard
          window.location.href = 'dashboard.html';
        })
        .catch(function(error) {
          // Handle user information storage errors
          console.error('User information storage error:', error.message);
        });
      })
      .catch(function(error) {
        // Handle signup errors
        console.error('Signup error:', error.message);
      });
  });
  