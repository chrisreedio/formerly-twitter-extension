# Formerly Twitter Text Remover

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?logo=google-chrome)](https://chrome.google.com/webstore/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)](https://developer.chrome.com/docs/extensions/mv3/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A lightweight Chrome extension that automatically removes annoying "formerly Twitter" text from web pages in real-time.

## 🚀 Quick Start

### Installation

#### Option 1: Chrome Web Store (Recommended)
*Coming soon - extension will be published to Chrome Web Store*

#### Option 2: Manual Installation
1. **Download**: Clone or download this repository
   ```bash
   git clone https://github.com/chrisreedio/formerly-twitter-extension.git
   cd formerly-twitter-extension
   ```

2. **Install in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked" and select the extension folder
   - The extension icon should appear in your toolbar

3. **You're done!** The extension will automatically start cleaning web pages.

## ✨ Features

- 🧹 **Smart Text Removal**: Automatically detects and removes "formerly Twitter" references
- ⚡ **Real-time Processing**: Works with dynamically loaded content (AJAX, SPA, etc.)
- 🪶 **Lightweight**: Minimal memory footprint and CPU usage
- 🔒 **Privacy-focused**: No data collection, no external requests
- 🎯 **Zero Configuration**: Works immediately after installation
- 🌐 **Universal**: Runs on all websites automatically

## 🎯 What Gets Removed

The extension intelligently removes these text patterns (case-insensitive):

| Pattern | Example |
|---------|---------|
| `formerly Twitter` | "...on formerly Twitter today" |
| `formerly known as Twitter` | "...the platform formerly known as Twitter" |
| `(formerly Twitter)` | "X (formerly Twitter) announced..." |
| `(formerly known as Twitter)` | "X (formerly known as Twitter) users..." |

*Plus various spacing and punctuation variations*

## 📁 Project Structure

```
formerly-twitter-extension/
├── manifest.json          # Extension configuration & metadata
├── content.js            # Main content script with text replacement logic
├── icons/               # Extension icons for different sizes
│   ├── icon16.png      # 16×16 toolbar icon
│   ├── icon48.png      # 48×48 management page icon
│   ├── icon128.png     # 128×128 Chrome Web Store icon
│   └── icon.svg        # Source vector icon
├── .gitignore          # Git ignore patterns
└── README.md           # Project documentation
```

## 🛠️ Development

### Prerequisites
- Google Chrome (latest version)
- Basic knowledge of JavaScript and Chrome Extensions

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chrisreedio/formerly-twitter-extension.git
   cd formerly-twitter-extension
   ```

2. **Load in Chrome**:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" → select project folder

3. **Make changes**:
   - Edit `content.js` for text replacement logic
   - Modify `manifest.json` for extension settings
   - Update icons in `/icons/` directory

4. **Test changes**:
   - Click refresh icon in `chrome://extensions/`
   - Test on websites with target text
   - Check browser console for any errors

### Adding New Text Patterns

Extend the pattern matching by editing the `patterns` array in `content.js`:

```javascript
const patterns = [
  /\(formerly twitter\)/gi,
  /your-new-pattern-here/gi,  // Add your pattern
  // ... existing patterns
];
```

### Testing Strategy

Test the extension on diverse websites:
- 📰 **News sites**: CNN, BBC, Reuters
- 🐦 **Social platforms**: Reddit, LinkedIn  
- 💼 **Corporate sites**: Company blogs, press releases
- 🔧 **Tech sites**: Stack Overflow, GitHub

## 🏗️ Technical Architecture

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Manifest** | JSON | Extension configuration (Manifest V3) |
| **Content Script** | Vanilla JS | DOM manipulation & text replacement |
| **Pattern Matching** | RegExp | Text detection & removal |
| **DOM Observer** | MutationObserver API | Dynamic content monitoring |

### Key Features:
- ✅ **Manifest V3** compliant (future-proof)
- ✅ **No permissions** required (privacy-focused)
- ✅ **Zero dependencies** (lightweight)
- ✅ **Cross-site compatible** (runs on all URLs)

## 🚀 Publishing

### Chrome Web Store Submission

1. **Prepare package**:
   ```bash
   # Create clean build (exclude development files)
   zip -r extension.zip . -x "*.git*" "*.DS_Store*" "node_modules/*"
   ```

2. **Developer Dashboard**:
   - Visit [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - Pay one-time $5 registration fee
   - Upload ZIP file and submit for review

3. **Review process**: Typically 1-3 business days

## 🐛 Troubleshooting

<details>
<summary><strong>Extension not removing text</strong></summary>

- ✅ Verify extension is **enabled** in `chrome://extensions/`
- ✅ **Refresh** both extension and webpage
- ✅ Check browser **console** for JavaScript errors
- ✅ Ensure text matches existing **patterns**
</details>

<details>
<summary><strong>Performance issues</strong></summary>

- ✅ Extension only processes **text nodes** (minimal impact)
- ✅ Uses efficient **MutationObserver** (not polling)
- ✅ **Disable** temporarily to test if extension is the cause
</details>

<details>
<summary><strong>Developer mode problems</strong></summary>

- ✅ **Enable** "Developer mode" toggle in `chrome://extensions/`
- ✅ **Reload** extension after code changes
- ✅ Check for **manifest.json** syntax errors
</details>

## 📋 Changelog

| Version | Date | Changes |
|---------|------|---------|
| **v1.0.0** | 2024 | 🎉 Initial release with core text replacement |

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines:
- Follow existing code style
- Test on multiple websites
- Update documentation as needed
- Keep commits focused and descriptive

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2024 Chris Reed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 💡 Support

- 🐛 **Report bugs**: [GitHub Issues](https://github.com/chrisreedio/formerly-twitter-extension/issues)
- 💬 **Get help**: Create a discussion in the repository
- ⭐ **Star** the repo if you find it useful!

---

<div align="center">
  <strong>Made with ❤️ for a cleaner web browsing experience</strong>
</div>