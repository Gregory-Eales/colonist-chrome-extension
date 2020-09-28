// Things are happening
console.log("Chrome extension is running!");
console.log("button clicked!");

console.log("removing banners!");
var elem = document.getElementById("in-game-ad-right");
elem.remove();
var elem = document.getElementById("in-game-ad-left");
elem.remove();


// Content scripts can manipulate the DOM
// Here I'm changing the background for all the paragraphs
var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
  elts[i].style['background-color'] = '#CCC';
}

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Handle the message
function receiver(request, sender, sendResponse) {
  // Now if the message matches "browser action"
  if (request.message === "browser action") {
    // Change the background color again
    var elts = document.getElementsByTagName('p');
    for (var i = 0; i < elts.length; i++) {
      elts[i].style['background-color'] = '#F0C';
    }
    // Send a message back!
    chrome.runtime.sendMessage({ "message": "thank you" });
  }
}

// remove banners

function removeBanners()
{

  //document.getElementsByTagName("in-game-ad-right").remove();
  //document.getElementsByTagName("in-game-ad-left").remove();

  console.log("removing banners!");
  
}