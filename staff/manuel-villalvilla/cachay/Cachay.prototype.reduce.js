Cachay.prototype.reduce = function (callback, initialValue) {
    
    if (initialValue === undefined) {
        // declaro variables
        let previous = this[0];
        let current;
        let returns;
        // itero en bucle desde indice 1 porque no se ha pasado un initialValue, por tanto: previous = array[0]
        for (let i = 1; i < this.length; i++) {
            current = this[i];
            returns = callback(previous, current);
            previous = returns;
        }

        return returns;
    } else {

        // declaro variables atendiendo a las premisas del metodo reduce
        let previous = initialValue;
        let current = this[0];
        let returns;
        // itero en bucle desde indice 0 porque se ha pasado un initialValue
        for (let i = 0; i < this.length; i++) {
            returns = callback(previous, current);
            previous = returns;
            current = this[i+1];
        }

        return returns;
    }
}