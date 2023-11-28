import { useRef, useState } from "react";

export const Counter = () => {
    const [charLength, setCharLength] = useState(0);
    const [wordLength, setWordLength] = useState(0);

    const textRef = useRef();

    const handleCount = () => {
        const value = textRef.current.value;
        setCharLength(value.length);
        value.length ? setWordLength(value.trim().length ? value.trim().split(" ").length : 0) : setWordLength(0);
    }

    const handleClearBtn = () => {
        textRef.current.value = "";
        handleCount();
    }

  return (
    <section className="counter flex flex-col items-center w-full px-10 max-w-2xl">
        <textarea onChange={handleCount} ref={textRef} id="text-box" className="text-blue-950 rounded-2xl w-full border-blue-950 border-4 p-4 h-96" placeholder="Type or paste your text here..."></textarea>

        <div id = "result" className="w-full flex items-center justify-center mt-4 flex-wrap">
            <span className="character-length text-white font-semibold bg-blue-950 p-2 rounded-md mr-4 whitespace-nowrap mb-4">Characters: {charLength}</span>
            <span className="word-length  text-white font-semibold bg-blue-950 p-2 rounded-md mr-4 whitespace-nowrap mb-4">Words: {wordLength}</span>
            <button onClick={handleClearBtn} id = "clearBtn" className={`text-white font-semibold ${charLength ? "bg-red-800" : "bg-zinc-500"} py-2 px-8 rounded-md mb-4`}  disabled={charLength ? "" : "disabled"}> Clear</button>
        </div>
    </section>
  )
}
