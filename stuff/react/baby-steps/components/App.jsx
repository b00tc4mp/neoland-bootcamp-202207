function App() {
    const title = <h1>hola mundo</h1>
    
    const friendsSearch = <Search title="Friends" items={friends} /> // new Search
    const fruitSearch = <Search title="Fruits" items={fruits} />
    const motoSearch = <Search title="Motos" items={motos} />

    return <main>
        {title}
        {friendsSearch}
        {fruitSearch}
        {motoSearch}
    </main>
}