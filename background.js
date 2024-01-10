chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getContentData") {
      // Handle the request and send the appropriate data
      sendResponse({ action: "getContentData", data: /* your data here */ });
    }
  });
  