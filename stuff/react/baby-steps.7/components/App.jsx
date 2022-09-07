function App() {
    const title = <h1>hola mundo</h1>

    const fruits = ['apple', 'orange', 'banana', 'lemon', 'tomate']
    const motos = ['Kawasaki Ninja', 'Ducatti Panigale', 'Derbi Variant', 'Buell']

    const fruitList = <List title="Fruits" items={fruits} />
    const motoList = <List title="Motos" items={motos} />

    return <main>
        {title}
        {fruitList}
        {motoList}
    </main>
}