
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "callApi") {
    const variableValue = message.videoURL;

    function callApi(url) {
      navigator.clipboard.writeText(text).then(
        () => {
          console.log("Text successfully copied and calling api.");
          let apiCall = new XMLHttpRequest();
          apiCall.open("GET", "<API Call>");
          apiCall.send();
          apiCall.onload = () => {
            console.log(JSON.parse(apiCall.response))
          }
          // window.alert('rd done')
        },
        (err) => {
          console.error("Failed to copy text to clipboard", err);
        }
      );

    }

    // Copy the received value to clipboard and call api
    callApi(variableValue)
  }
});