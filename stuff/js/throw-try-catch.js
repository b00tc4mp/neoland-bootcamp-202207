function fun() {
    throw new Error('hola mundo')
}

try {
    fun()
} catch(error) {
    console.error('error detected ->', error.message)
}
// VM8448:8 error detected -> hola mundo