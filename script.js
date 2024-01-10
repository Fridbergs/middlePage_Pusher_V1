window.addEventListener("message", function (event) {
  // Check the source to ensure the message is from the extension
  if (event.source !== window) {
    return;
  }

  // Check the action to identify the message
  if (event.data && event.data.action === "sendData") {
    let receivedData = event.data.data;
    console.log("Received data in secondary website:", receivedData);

    // Perform actions with the received data (e.g., update UI)
  }
});
