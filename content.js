function removeFormerlyTwitterText() {
  const patterns = [
    /\(formerly twitter\)/gi,
    /\(formerly known as twitter\)/gi,
    /formerly twitter/gi,
    /formerly known as twitter/gi,
    /\s*\(formerly\s+twitter\)\s*/gi,
    /\s*formerly\s+twitter\s*/gi,
    /\s*\(formerly\s+known\s+as\s+twitter\)\s*/gi,
    /\s*formerly\s+known\s+as\s+twitter\s*/gi
  ];

  function replaceTextInNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      let modified = false;
      
      patterns.forEach(pattern => {
        if (pattern.test(text)) {
          text = text.replace(pattern, '');
          modified = true;
        }
      });
      
      if (modified) {
        node.textContent = text.trim();
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of node.childNodes) {
        replaceTextInNode(child);
      }
    }
  }

  replaceTextInNode(document.body);
}

function observeChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
            removeFormerlyTwitterText();
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    removeFormerlyTwitterText();
    observeChanges();
  });
} else {
  removeFormerlyTwitterText();
  observeChanges();
}