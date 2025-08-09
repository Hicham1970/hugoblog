"use client"; 
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css"; // Import Prism theme CSS for syntax highlighting
// Import the language syntax highlighting  
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

//import tools for copy/past 
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/components/prism-solidity"; 


function SyntaxHighlighter({ children }) {
  
  useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks on component mount
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default SyntaxHighlighter
