import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(()=>{}, [markdown])

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Markdown here..."
      />
      
      <div className="preview">
        <strong>{markdown}</strong>
        <h1>{markdown}</h1>
      </div>
    </div>
  );
};

export default MarkdownEditor;
