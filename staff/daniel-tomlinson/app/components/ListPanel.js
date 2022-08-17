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
        /* text.style.height = "1px";
        text.style.height = text.scrollHeight + "px";

        if (item.height > 250)
          item.style.padding = text.scrollHeight - text.height + "px"; */

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
