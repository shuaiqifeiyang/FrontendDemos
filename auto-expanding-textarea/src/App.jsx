import "./App.css";
import { useState, useRef, useEffect } from "react";

const MIN_HEIGHT = 33;
const MAX_HEIGHT = 100;

function App() {
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef(null);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    console.log(textarea);
    textarea.style.height = `${MIN_HEIGHT}px`;
    textarea.style.height = textareaRef.current.scrollHeight + "px";
    if (textareaRef.current.scrollHeight > 99) {
      textarea.style.height = `${MAX_HEIGHT}px`;
    }
  }, [inputText]);

  return (
    <>
      <textarea
        className="home-container__textarea"
        value={inputText}
        onChange={handleInputChange}
        ref={textareaRef}
      ></textarea>
    </>
  );
}

export default App;
