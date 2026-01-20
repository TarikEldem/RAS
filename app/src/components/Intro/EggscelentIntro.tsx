import { useEffect, useState } from "react";

function WelcomeToThe({words, delay = 1500}: {words: string[], delay?: number}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {  
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay);

        return () => clearTimeout(timer);
    }, [index, delay, words.length]);

    return (
        <span>{words[index]}</span>
    );
}

export default WelcomeToThe;