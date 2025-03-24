
(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'extractText') {
            try {
                const text = document.body.innerText || '';
                sendResponse({ text });
            } catch (error) {
                console.error('Error extracting text:', error);
                sendResponse({ text: '' });
            }
        }
    });
})();
