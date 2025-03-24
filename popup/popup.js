
import { summarizeText } from '../service/Summarize.js';

const getElement = id => document.getElementById(id);
const toggleLoader = show => getElement('loading-spinner').style.display = show ? 'block' : 'none';

const displayMessage = (message) => getElement('summary').innerText = message;

const getActiveTab = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab?.id;
};

const summarizeCurrentPage = async () => {
    toggleLoader(true);
    const tabId = await getActiveTab();
    if (!tabId) {
        displayMessage('No active tab found.');
        toggleLoader(false);
        return;
    }

    const { googleApiKey } = await chrome.storage.sync.get('googleApiKey');
    if (!googleApiKey) {
        displayMessage('⚠️ API key not set. Please go to settings and add your API key.');
        toggleLoader(false);
        return;
    }

    try {
        const [{ result: text = '' }] = await chrome.scripting.executeScript({ target: { tabId }, func: () => document.body.innerText });
        if (!text) {
            displayMessage('No text found on this page.');
            return;
        }

        const summary = await summarizeText(text);
        displayMessage(summary);
    } catch (error) {
        displayMessage(`⚠️ Error summarizing text: ${error.message}`);
    } finally {
        toggleLoader(false);
    }
};

const saveSummary = () => {
    const summary = getElement('summary')?.innerText;
    if (summary) {
        const blob = new Blob([summary], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = Object.assign(document.createElement('a'), { href: url, download: 'summary.txt' });
        link.click();
        URL.revokeObjectURL(url);
    }
};

getElement('summarize').addEventListener('click', summarizeCurrentPage);
getElement('save').addEventListener('click', saveSummary);
