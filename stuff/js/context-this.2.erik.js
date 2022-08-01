function toString() {
    return `${this.name} ${this.surname} (${this.age})`
}

toString()
// ' undefined (undefined)'

window.name
// ''
window.surname
// undefined
window.age
// undefined

window.toString()
// ' undefined (undefined)'

window.name = 'Erik'
// 'Erik'
window.surname = 'Ascendió'
// 'Ascendió'
window.age = 15
// 15

toString()
// 'Erik Ascendió (15)'
window.toString()
// 'Erik Ascendió (15)'