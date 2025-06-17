import { useEffect, useState } from "react";
import "../index.css";

const Typewriter = () => {
  const words = ["React.js", "Node.js", "Express.js", "MongoDB","Tailwind","Version Control"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      // When word is complete
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); 
      }

      // When word is deleted
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="text-3xl font-bold text-center">
      Skills: <span className="text-orange-500">{text}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default Typewriter;
