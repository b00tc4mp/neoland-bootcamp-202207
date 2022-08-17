class NoteList extends Component {
  constructor(props) {
    super(props);
    this.logger = new Loggito("List");
    this.noteText = {}; // dictionary
  }

  componentDidMount() {
    this.logger.info("render");
  }

  componentDidUpdate() {
    this.props.notes.map((note) => this.textAreaAdjust(note.id));
  }

  textAreaAdjust(noteId) {
    this.noteText[noteId].style.height = "inherit";
    this.noteText[noteId].style.height = `${
      25 + this.noteText[noteId].scrollHeight
    }px`;
  }

  render() {
    return (
      <ul className="list-panel list">
        {this.props.notes &&
          this.props.notes.map((note) => (
            <li className="list__item" key={note.id}>
              <button
                className="list__item-delete-button"
                onClick={() => this.props.onDeleteNote(note.id)}
              >
                x
              </button>
              <textarea
                ref={(ref) => (this.noteText[note.id] = ref)}
                className="list__item-text"
                onKeyUp={(event) => {
                  this.textAreaAdjust(note.id);

                  if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId);

                  window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.value;

                    this.props.onUpdateNote(note.id, text);
                  }, 500);
                }}
              >
                {note.text}
              </textarea>
            </li>
          ))}
      </ul>
    );
  }
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
