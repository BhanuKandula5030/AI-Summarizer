
const getElement = id => document.getElementById(id);

const saveApiKey = () => {
    const apiKey = getElement('api-key').value;
    if (apiKey) {
        chrome.storage.sync.set({ googleApiKey: apiKey }, () => alert('API Key saved successfully!'));
    } else {
        alert('Please enter a valid API Key.');
    }
};

const loadApiKey = () => {
    chrome.storage.sync.get('googleApiKey', ({ googleApiKey }) => {
        if (googleApiKey) getElement('api-key').value = googleApiKey;
    });
};

getElement('save-key').addEventListener('click', saveApiKey);
document.addEventListener('DOMContentLoaded', loadApiKey);
