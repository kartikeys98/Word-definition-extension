
window.word = '';
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
    console.log(request);
    window.word = request.text;
}
