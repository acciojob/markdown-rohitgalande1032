import React, { useState, useEffect } from "react";

const parseMarkdown = (text) => {
  // Convert headers (##, #)
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");

  // Convert bold (**bold** or __bold__)
  text = text.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");
  text = text.replace(/__(.*?)__/gim, "<b>$1</b>");

  // Convert italic (*italic* or _italic_)
  text = text.replace(/\*(.*?)\*/gim, "<i>$1</i>");
  text = text.replace(/_(.*?)_/gim, "<i>$1</i>");

  // Convert links [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>');

  // Convert line breaks
  text = text.replace(/\n/g, "<br>");

  return text;
};

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
