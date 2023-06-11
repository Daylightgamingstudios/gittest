const firebaseConfig = {
    apiKey: "AIzaSyDf8WKtC3igTauCp2y7Af8NdBZn4YQty-w",
    authDomain: "messagingapp-c71e3.firebaseapp.com",
    projectId: "messagingapp-c71e3",
    storageBucket: "messagingapp-c71e3.appspot.com",
    messagingSenderId: "405110883840",
    appId: "1:405110883840:web:1eea502e952429c84a7ae5"
  };
  const app = initializeApp(firebaseConfig);
  // Create a Firestore reference
  const db = firebase.firestore();
  
  // Get the button element
  const sendButton = document.getElementById('send-button');
  
  // Add a click event listener to the button
  sendButton.addEventListener('click', () => {
    // Get the text value from an input field with id 'text-input'
    const text = document.getElementById('text-input').value;
  
    // Save the text to Firestore
    db.collection('messages').add({
      text: text
    })
    .then(() => {
      console.log('Text sent to Firestore');
      // Call a function to display the text
      displayText(text);
    })
    .catch((error) => {
      console.error('Error sending text to Firestore:', error);
    });
  });
  
  // Function to display the text
  function displayText(text) {
    // Get the element where you want to display the text
    const textDisplay = document.getElementById('messages-container');
    
    // Create a new paragraph element
    const paragraph = document.createElement('p');
    
    // Set the text content of the paragraph
    paragraph.textContent = text;
    
    // Append the paragraph to the display element
    textDisplay.appendChild(paragraph);
  }
  