import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.currentTarget.value)}
        ></textarea>

        <article className="markdown-body">
          <p className="link">
            Visit Here&nbsp;https://
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.markdownguide.org/cheat-sheet/"
            >
              Markdown Cheat Sheet
            </a>
            &nbsp;
          </p>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
