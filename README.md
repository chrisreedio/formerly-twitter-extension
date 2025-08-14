# Formerly Twitter Text Remover

A simple Chrome extension that automatically removes annoying "formerly Twitter" text from web pages.

## Installation

### For End Users

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The extension will now run automatically on all websites

### For Developers

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd formerly-twitter-extension
   ```

2. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select this folder

## Features

- **Automatic text replacement**: Removes various forms of "formerly Twitter" text
- **Real-time monitoring**: Works with dynamically loaded content
- **Lightweight**: Minimal performance impact
- **No permissions required**: Only uses content script injection

## Supported Text Patterns

The extension removes the following text patterns (case insensitive):
- "formerly Twitter"
- "formerly known as Twitter"
- "(formerly Twitter)"
- "(formerly known as Twitter)"
- Various spacing and punctuation variations

## File Structure

```
formerly-twitter-extension/
├── manifest.json          # Extension configuration
├── content.js            # Main content script
├── icons/               # Extension icons
│   ├── icon16.png      # 16x16 icon
│   ├── icon48.png      # 48x48 icon
│   ├── icon128.png     # 128x128 icon
│   └── icon.svg        # Source SVG icon
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Development

### Making Changes

1. Edit the relevant files (`content.js` for text replacement logic)
2. Go to `chrome://extensions/`
3. Click the refresh icon on your extension card
4. Test on various websites

### Adding New Text Patterns

To add new text patterns to remove, edit the `patterns` array in `content.js`:

```javascript
const patterns = [
  /your-new-pattern/gi,
  // ... existing patterns
];
```

### Testing

Test the extension on various websites that might contain the target text:
- News websites
- Social media platforms
- Tech blogs
- Corporate websites

### Publishing to Chrome Web Store

1. Create a ZIP file of the extension (exclude `.git`, `node_modules`, etc.)
2. Visit [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
3. Upload the ZIP file and follow the publishing guidelines
4. Note: You'll need to pay a one-time $5 developer registration fee

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: None required (uses only content scripts)
- **Content Script Injection**: Runs on all URLs (`<all_urls>`)
- **DOM Monitoring**: Uses MutationObserver for dynamic content

## Troubleshooting

### Extension Not Working
- Check that Developer mode is enabled
- Verify the extension is loaded and active in `chrome://extensions/`
- Try refreshing the extension and the webpage

### Text Still Appearing
- Some text might be loaded after the script runs
- Try refreshing the page
- Check if the text pattern is covered by the existing regex patterns

## Version History

- **v1.0.0**: Initial release with basic text replacement functionality

## License

This project is for educational and personal use. Feel free to modify and distribute.