import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Card(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Card)}</dl>
    </div>
  );
}

export default App;
