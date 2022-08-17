console.log('%c Loggito %c v0', 'font-size: 16px; color: yellow; background-color: dodgerblue; display: block; border: 1px solid black;', 'font-size: 10px;') 

class Loggito {
    constructor(target) {
        this.target = target
    }

    debug(message) {
        console.log(`%c@@@@@@@@@@DEBUG  ${new Date().toISOString()} ${this.target} ${message}  DEBUG@@@@@@@@@@`, 'color: green')
    }

    info(message) {
        console.log(`%c**********INFO ${new Date().toISOString()} ${this.target} ${message} INFO**********`, 'color: blue')
    }

    warn(message) {
        console.log(`%c^^^^^^^^^^WARN ${new Date().toISOString()} ${this.target} ${message} WARN^^^^^^^^^^`, 'color: gold')
    }

    error(message) {
        console.log(`%c##########ERROR ${new Date().toISOString()} ${this.target} ${message} ERROR##########`, 'color: red')
    }

    fatal(message) {
        console.log(`%c$$$$$$$$$$FATAL ${new Date().toISOString()} ${this.target} ${message} FATAL$$$$$$$$$$`, 'background-color: red; color: white;')
    }
}