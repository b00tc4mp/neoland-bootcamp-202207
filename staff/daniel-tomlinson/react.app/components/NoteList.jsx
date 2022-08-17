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

// ref={titleRefId => this.noteTitle[note.id] = titleRefId}

/* 

function NoteList(props) {
    const logger = new Loggito('List')

    logger.info('render')

    return <ul className="list-panel list">
        {props.notes && props.notes.map(note => <li className="list__item">
            <button className="list__item-delete-button" onClick={() => props.onDeleteNote(note.id)}>x</button>

            <p contentEditable="true" className="list__item-text" onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText
                    
                    props.onUpdateNote(note.id, text)
                }, 500)
            }}>{note.text}</p>
        </li>)}
    </ul>
}




class ListPanel extends Component {
    constructor() {
      super(`<ul class="list list-panel">
      <li class="list__item">
        <textarea class="list__item-text">
      </textarea>
    </li>
    <li class="list__item">
      <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
    </textarea>
  </li>
    </ul>`);
    }
  
    renderList(notes) {
      this.container.innerHTML = "";
  
      notes.forEach((note) => {
        const item = document.createElement("li");
        item.classList.add("list__item");
  
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("list__item-delete-button");
        deleteButton.innerText = "x";
        deleteButton.onclick = () => {
          this.onDeleteNoteClick(note.id);
        };
  
        const text = document.createElement("textarea");
        text.classList.add("list__item-text");
        text.onkeyup = () => {
        //   text.style.height = "1px";
        //   text.style.height = text.scrollHeight + "px";
  
        //   if (item.height > 250)
        //     item.style.padding = text.scrollHeight - text.height + "px";
  
          if (window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId);
  
          window.updateNoteTimeoutId = setTimeout(() => {
            this.onUpdateNote(note.id, text.value);
          }, 500);
        };
        text.value = note.text;
  
        item.append(deleteButton, text);
  
        this.container.append(item);
      });
    }
  
    onDeleteNote = null;
  
    onUpdateNote = null;
  }
   */
