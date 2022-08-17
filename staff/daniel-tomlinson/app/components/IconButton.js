class IconButton extends Component {
  constructor(text, ...classes) {
    super(
      `<button class="transparent-button"><span class="material-symbols-outlined">${text}</span></button>`
    );

    this.container.onclick = () => this.onClick();

    this.container.classList.add(...classes);
  }

  onClick = null;

  click() {
    this.container.click();
  }
}

/* class IconButton extends Component {
  constructor(text, color) {
    super(
      <button class="transparent-button">
        <span class="material-symbols-outlined">${text}</span>
      </button>
    );

    this.container.onclick = () => this.onClick();

    switch (color) {
      case "red":
        this.container.classList.add("button--red");
        break;
      case "blue":
        this.container.classList.add("button--blue");
        break;
    }
  }

  onClick = null;

  click() {
    this.container.click();
  }
}

const button1 = new Button("Accept", "blue");

class IconButton extends Component {
  constructor(text, ...classes) {
    super(
      <button class="transparent-button">
        <span class="material-symbols-outlined">${text}</span>
      </button>
    );

    this.container.onclick = () => this.onClick();

    this.container.classList.add(...classes);
  }

  onClick = null;

  click() {
    this.container.click();
  }
}

const button2 = new Button("Accept", "button--blue", "button--light");
 */
