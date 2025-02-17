import { useEffect, useState } from "react";


const Easter = () => {
  const [inputSequence, setInputSequence] = useState([]);
  const secretCode = "1337";
  const beat = new Audio("./mustard-kendrick-lamar-made-with-Voicemod.mp3");

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInputSequence((prevSequence) => {
        const newSequence = [...prevSequence, event.key].slice(-secretCode.length);
        if (newSequence.join("") === secretCode) {
          activateEasterEgg();
        }
        return newSequence;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activateEasterEgg = () => {
    document.body.classList.toggle("easterEgg");
    beat.play();
  };

  return(
    <div style={{display: "none"}}></div>
  );
};

export default Easter;
