document.getElementById("copyBtn").addEventListener("click", () => {
  const text = contentBox.textContent;

  // This will work because it's triggered by a user action in the popup
  navigator.clipboard.writeText(text)
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  contentBox.textContent = ""
});

document.getElementById("pasteBtn").addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((clipText) => (contentBox.textContent = clipText));
});


