import { useEffect } from "react";
import Loggito from "../utils/loggito";

function NoteList({ notes, onDeleteNote, onUpdateNote }) {
  const logger = new Loggito("List");

  const noteText = {}; // dictionary

  useEffect(() => {
    logger.info("useEffect notelist");

    if (notes) {
      notes.map((note) => textAreaAdjust(note.id));
      logger.info("note text area adjusted");
    }
  });

  //changed to arrow function
  const textAreaAdjust = (noteId) => {
    noteText[noteId].style.height = "inherit";
    noteText[noteId].style.height = `${25 + noteText[noteId].scrollHeight}px`;
  };

  return (
    <ul className="list-panel list">
      {notes &&
        notes.map((note) => (
          <li className="list__item" key={note.id}>
            <button
              className="list__item-delete-button"
              onClick={() => onDeleteNote(note.id)}
            >
              x
            </button>
            <textarea
              ref={(ref) => (noteText[note.id] = ref)}
              className="list__item-text"
              onKeyUp={(event) => {
                textAreaAdjust(note.id);

                if (window.updateNoteTimeoutId)
                  clearTimeout(window.updateNoteTimeoutId);

                window.updateNoteTimeoutId = setTimeout(() => {
                  const text = event.target.value;

                  onUpdateNote(note.id, text);
                }, 500);
              }}
              defaultValue={note.text}
            ></textarea>
          </li>
        ))}
    </ul>
  );
}

export default NoteList;
