
# AI Summarizer – Chrome Extension  

## Overview
**AI Summarizer** is a powerful Chrome extension that leverages AI to quickly generate accurate summaries of any web page. With a single click, it processes and condenses lengthy content into easy-to-read summaries — saving you time and enhancing your productivity.

---

## 🚀 **Features**
✅ One-click summarization of any web page  
✅ AI-based natural language processing for high accuracy  
✅ Multi-language support (English, Spanish, French)  
✅ Lightweight and secure (no data collection)  
✅ Fast and reliable performance  
✅ Clean and intuitive user interface  

---

## 📥 **Installation**
### **Method 1: From Chrome Web Store**  
1. Open **Google Chrome**.  
2. Go to the **Chrome Web Store**.  
3. Search for **AI Summarizer**.  
4. Click **"Add to Chrome."**  
5. Confirm installation by clicking **"Add Extension."**  

---

### **Method 2: Manual Installation for Testing**  
1. Clone the repository:
```bash
git clone https://github.com/BhanuKandula5030/AI-Summarizer/
```
2. Navigate to the project folder:
```bash
cd ai-summarizer
```
3. Install dependencies:
```bash
npm install
```
4. Insert your API key:
   - Open **popup/settings.js**.
   - Add your API key to the `API_KEY` constant:
```javascript
const API_KEY = 'your-api-key-here';
```
5. Load the extension into Chrome:
   - Open **chrome://extensions**.  
   - Turn on **Developer Mode** (toggle at the top right).  
   - Click **"Load unpacked."**  
   - Select the project folder (`ai-summarizer`).  

---

## 💡 **How to Use**
1. Open any webpage in Chrome.  
2. Click the **AI Summarizer** icon in the Chrome toolbar.  
3. A popup will appear with the summarized content.  
4. Adjust settings as needed:
   - **Summary Length** – Choose short, medium, or long summaries.  
   - **Language** – Switch between English, Spanish, and French.  
   - **Theme** – Light and dark themes available.  
5. Done! Save time and stay informed.  

---

## 🌐 **Permissions**
This extension requires the following permissions:
- **activeTab** – To access the currently open tab  
- **storage** – To store user preferences  
- **scripting** – To inject scripts into the web page for summarization  

✅ All permissions are used strictly for functionality.  
✅ No tracking or data collection involved.  

---

## 🔒 **Privacy**
AI Summarizer does **NOT** collect, store, or share any personal data.  
- No tracking, no third-party data access.  
- All processing is done locally on your device.  
- Summary data is never sent to external servers.  

For more details, see our [Privacy Policy](./PRIVACY_POLICY.md).  

---

## 🛠️ **Development**
### **Setup for Development**
1. Clone the repository:
```bash
git clone https://github.com/BhanuKandula5030/AI-Summarizer/
```
2. Navigate to the folder:
```bash
cd ai-summarizer
```
3. Install dependencies:
```bash
npm install
```
4. Load it into Chrome:
   - Open **chrome://extensions**.  
   - Turn on **Developer Mode**.  
   - Click **"Load unpacked."**  
   - Select the project folder.  

---

## ✅ **Best Practices Followed**
✔️ Clean Code – Follows modular structure and consistent naming  
✔️ Google Chrome Guidelines – Fully compliant with extension requirements  
✔️ Performance – Optimized for low memory usage and fast execution  
✔️ Security – No sensitive data handling  

---

## 🤝 **Contributing**
Contributions are welcome!  
- Fork the repository.  
- Create a feature branch (`git checkout -b feature-name`).  
- Commit your changes.  
- Submit a pull request.  

---

## 📄 **License**
This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

👨‍💻 **Developed by Bhanu Prasad Kandula**  
📧 **Contact:** [k.bhannuprasad@gmail.com]  

---
