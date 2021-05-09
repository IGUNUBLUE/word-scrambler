import { useState, useLayoutEffect } from "react";

const specialKeys = [
  `Shift`,
  `CapsLock`,
  `Meta`,
  `Control`,
  `Alt`,
  `Tab`,
  `Backspace`,
  `Escape`,
];

const useKeys = () => {
  // if (typeof window === `undefined`) return [] // Bail on SSR

  const [keys, setKeys] = useState([]);

  useLayoutEffect(() => {
    const downHandler = ({ key, shiftKey, repeat }) => {
      // Bail if they're holding down a key
      if (repeat) return;
      setKeys((prevKeys) => {
        return [...prevKeys, { key, shiftKey }];
      });
    };
    const upHandler = ({ key, shiftKey }) => {
      setKeys((prevKeys) => {
        return prevKeys.filter((k) => {
          // Special keys being held down/let go of in certain orders would cause keys to get stuck in state
          if (specialKeys.includes(key)) return false;
          // JS Objects are unique even if they have the same contents, 
          //this forces them to actually compare based on their contents
          return JSON.stringify(k) !== JSON.stringify({ key, shiftKey });
        });
      });
    };

    window.addEventListener(`keydown`, downHandler);
    window.addEventListener(`keyup`, upHandler);
    return () => {
      // Cleanup our window listeners if the component goes away
      window.removeEventListener(`keydown`, downHandler);
      window.removeEventListener(`keyup`, upHandler);
    };
  }, []);

  // return a clean array of characters (including special characters 🎉)
  return keys.map((x) => x.key);
};

export default useKeys;
