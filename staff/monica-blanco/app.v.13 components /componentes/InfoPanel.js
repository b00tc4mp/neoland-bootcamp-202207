class InfoPanel extends Component{
    constructor() {
        super(`<div class= "info-panel form container">
        <div class= "update-infoApp">
        <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU">
        <p>Writing notes has never been so easy and fun</p>
    </div>`)

    this.container.querySelector('.update-infoApp')
   
        const closeButton = new IconButton('house')
        this.closeButton = closeButton
        closeButton.onClick = () => {
            this.onClose()
        }
        this.container.append(closeButton.container)
    }

       
    onClose = null
    
    close(){
        this.closeButton.click()
    }
}
