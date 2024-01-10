// Listen for the message event
window.addEventListener("message", function (event) {
  // Check the origin of the sender
  if (event.origin === "chrome-extension://cijnbgldlimolepjbkkadmjdpgcldcjn") {
    // Handle the received data
    if (event.data.action === "sendData") {
      const receivedData = event.data.data;
      console.log("Received data:", receivedData);

      // Process the received data as needed
    }
  }
});
