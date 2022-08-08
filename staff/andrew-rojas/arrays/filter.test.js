function filter(array) {

    const people = [
        { name: 'petter', surname: 'pan'},
        { name: 'wendy', surname: 'hook'},
        { name: 'james', surname: 'pan'},
        { name: 'pepito', surname: 'grillo'},
        { name: 'pinocho', surname: 'grillo'},
    ]

    const pans = filter(function(person) {
        return person.surname === 'pan'
    })

    check(pans.length, 2)
    check(pans[0], people[0] )
    check(pans[1], people[3] )
}