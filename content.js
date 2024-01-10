// Event listener for receiving the contact data
chrome.runtime.sendMessage(
  { action: "getContentData" },
  function (request, sender, sendResponse) {
    if (request.action === "sendDataToSecondaryPage") {
      let contactData = request.data;

      // Create HTML elements to display each contact's details
      contactData.forEach((contact) => {
        let contactContainer = document.getElementById("contactContainer");

        let contactDiv = document.createElement("div");
        contactDiv.innerHTML = `
            <p>Name: ${contact.name}</p>
            <p>Title: ${contact.title}</p>
            <p>Phone Number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
            <hr>
          `;

        // Append the contact details to the container
        contactContainer.appendChild(contactDiv);
      });
    }
  }
);

document.addEventListener("sendDataToSecondaryPage", function (event) {
  let eventData = event.detail;
  // Handle the received data and update the UI
  console.log("Received data in secondary web page:", eventData);
  // Update the UI as needed
});
