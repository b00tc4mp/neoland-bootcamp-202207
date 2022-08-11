class ColorButtons extends Component {
    constructor(){
        super(`<div class="changeNoteColorContainer">
        <div class="changeNoteBlue"></div>
        <div class="changeNoteRed"></div>
        <div class="changeNoteGreen"></div>
        <div class="changeNoteOrange"></div>
        <div class="changeNotePurple"></div>
        <div class="changeNoteGrey"></div>
        </div>`)

        this.blue = this.container.querySelector('.changeNoteBlue').onclick = () => {
            this.onChangeNoteColor('blue')
        }

        this.red = this.container.querySelector('.changeNoteRed').onclick = () => {
            this.onChangeNoteColor('red')
        }

        this.green = this.container.querySelector('.changeNoteGreen').onclick = () => {
            this.onChangeNoteColor('green')
        }

        this.orange = this.container.querySelector('.changeNoteOrange').onclick = () => {
            this.onChangeNoteColor('orange')
        }

        this.purple = this.container.querySelector('.changeNotePurple').onclick = () => {
            this.onChangeNoteColor('#7d19c4')
        }

        this.grey = this.container.querySelector('.changeNoteGrey').onclick = () => {
            this.onChangeNoteColor('grey')
        }
    }

    onChangeNoteColor = null
}