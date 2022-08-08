const title = React.createElement('h1', null, 'hola mundo')

// OLD
// ReactDOM.render(title, document.querySelector('#root'))

// const container = document.querySelector('#root')
// const root = ReactDOM.createRoot(container)
// root.render(title)

ReactDOM.createRoot(document.querySelector('#root')).render(title)
