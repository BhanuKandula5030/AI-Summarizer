
export async function summarizeText(text) {
    const { googleApiKey } = await chrome.storage.sync.get('googleApiKey');

    if (!googleApiKey) throw new Error('API key not configured. Please set the API key in settings.');

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${googleApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `Summarize this: ${text}` }] }] })
    });

    if (!response.ok) throw new Error(`Failed to summarize: ${response.statusText}`);

    const data = await response.json();
    const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!summary) throw new Error('Invalid response from API');

    return summary;
}
