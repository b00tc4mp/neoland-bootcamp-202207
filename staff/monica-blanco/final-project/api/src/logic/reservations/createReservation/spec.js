require('dotenv').config()

const {connect, disconnect, Types: {ObjectId}} = require('mongoose')
const {User, Reservation, Workspace, Building} = require ('../../../models')
const {NotFoundError} = require ('errors')
const createReservation = require('.')
const { workspace } = require('../../../models/schemas')

const { env: { MONGO_URL_TEST}} = process

describe ('createReservation', ()=>{
    debugger
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(()=> Promise.all([User.deleteMany(), Reservation.deleteMany()]))

    it('user manages to make a reservation of a space', ()=>{ //happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const user = new User({ name, email, password })
        const reservationDate = new Date

        const building = new Building({
            name:'diagonal',
            workspace: workspace.id,
            address:'Carrer de Santjoanistes',
            image: 'jpg'
        }) 

        const workspace1 = new Workspace({
            building: building.id,
            reservationDate: '2022-02-04',
            name:'office1',
            price: 50,
            image: 'jpg',
        })
           

        return User.create({ name, email, password })
        .then(user =>
            
            createReservation(user.id, workspace._id, reservationDate)
            .then(res => {
            
                expect(res).toBeUndefined()
                
                return Reservation.find()
            })
            .then(reservations => {
                expect(reservations).toHaveLength(1)

                        const [reservation] = reservations

                        expect (reservation.workspace).toEqual(workspace)
                        expect(reservation.createdAt).toBeInstanceOf(Date)
                        expect(reservation.modifiedAt).toBeUndefined()
                    })
            )

    }) 
    it('fails on non-existing user', () => {  //   unhappy path
        const userId = new ObjectId().toString()
    return createReservation(userId)
    .then(()=>{throw new Error ('should not reach this point')})
    .catch(error => {
            expect(error).toBeInstanceOf(NotFoundError)
            expect(error.message).toEqual(`user with id ${userId} not found`)
        })
     })
    
    afterAll(() => disconnect())
})


