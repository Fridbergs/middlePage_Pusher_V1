// script.js in your secondary website

// Listen for messages from the extension
window.addEventListener("message", function (event) {
  // Check the origin of the message to ensure it's from your extension
  if (event.origin === "chrome-extension://cijnbgldlimolepjbkkadmjdpgcldcjn") {
    // Handle the message
    console.log(event.data);

    // You can access the data received from the extension using event.data
    let receivedData = event.data;

    // Implement your logic to process the received data
    // For example, update the UI, perform actions, etc.
  }
});
