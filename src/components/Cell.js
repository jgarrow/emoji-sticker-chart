import React from "react";
import Picker from "emoji-picker-react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const Cell = ({ keyName }) => {
  const [chosenEmoji, setChosenEmoji] = useLocalStorage(null, keyName);
  const [isOpen, setIsOpen] = React.useState(false);

  const onEmojiClick = (_, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <li onClick={() => setIsOpen(!isOpen)}>
      {chosenEmoji?.emoji ? (
        <span role="img" aria-label={chosenEmoji.names[0]} class="emoji">
          {chosenEmoji.emoji}
        </span>
      ) : null}
      {isOpen ? <Picker onEmojiClick={onEmojiClick} /> : null}
    </li>
  );
};

export default Cell;
