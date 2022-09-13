require('dotenv').config()
const { areas: { MX, ES, AR } } = require('data')
MX.splice(0, 1)
ES.splice(0, 1)
AR.splice(0, 1)
const { env: { MONGO_URL } } = process
const { User, Ad } = require('./models')
const { connect, disconnect } = require('mongoose');

(async () => {
    await connect(MONGO_URL)

    await Promise.all([User.deleteMany(), Ad.deleteMany()])

    const name = 'manu'
    const password = '123123123'

    const urls1 = [
        'https://serranillos.net/~papa/1.jpg',
        'https://serranillos.net/~papa/2.jpg',
        'https://serranillos.net/~papa/3.jpg',
        'https://serranillos.net/~papa/4.jpeg'
    ]

    const bodies = [
        'Fusce dignissim neque eu elementum commodo. Donec rhoncus tortor neque, non placerat purus imperdiet a. Quisque quis laoreet ipsum. Ut et justo a felis congue auctor. Donec id augue gravida, maximus diam ut, pellentesque lorem. Suspendisse eu purus quam. Mauris varius magna molestie, posuere lectus quis, pulvinar turpis. Cras quis ullamcorper velit. Vestibulum varius sit amet arcu et hendrerit. Donec ultricies efficitur enim in condimentum. Maecenas ac porttitor tortor. Nulla rutrum massa vel pretium pellentesque.',
        'Donec faucibus mauris viverra finibus congue. Suspendisse condimentum imperdiet nunc, sed bibendum urna lobortis quis. Maecenas porttitor neque id justo vulputate, non accumsan risus molestie. Nunc vehicula urna non malesuada dictum. Nunc dui orci, tincidunt quis est eget, luctus volutpat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla scelerisque, arcu non suscipit ullamcorper, lorem risus placerat leo, ultrices ultrices lorem libero in eros. Maecenas auctor laoreet pellentesque. Nulla sagittis scelerisque tellus, eu iaculis leo iaculis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lacus ipsum, hendrerit sit amet dictum sed, porttitor et augue. Phasellus id elementum diam. Ut id dui a urna suscipit egestas eu imperdiet magna. Sed ut odio vitae arcu ultrices sagittis. Proin efficitur mattis dui, eu commodo erat gravida quis. Sed mollis, quam at semper varius, erat sem faucibus lorem, in posuere nunc est eget felis.',
        'Nam tempus fringilla arcu vitae semper. Suspendisse id risus aliquam, placerat libero id, tristique mi. Nulla ac tristique erat. Pellentesque eu risus quis tortor volutpat tempus nec eget sem. Aliquam fermentum hendrerit libero ac maximus. Integer tincidunt elit sed ultrices auctor. Vestibulum bibendum ac nulla vitae dictum. Morbi non aliquet dolor, sit amet scelerisque nisl. Pellentesque tempor tristique mi ac convallis.',
        'Donec ullamcorper eros at arcu aliquet, sollicitudin aliquet nisl sollicitudin. Etiam ultrices dui risus, vitae pulvinar enim pretium non. Cras fermentum lectus et nibh placerat, sit amet placerat neque venenatis. Ut eleifend diam nec pulvinar pretium. Aenean maximus volutpat sapien ut sagittis. Donec finibus lobortis risus, non finibus augue varius nec. Pellentesque non imperdiet enim. Sed et egestas dolor. Ut elementum massa non purus pellentesque, sit amet mollis dolor gravida. Nam velit dolor, consequat vulputate felis vitae, ultricies fermentum dolor. Integer faucibus, diam eu vehicula tempor, sem quam tincidunt mi, sit amet pulvinar justo leo eu diam. Mauris fermentum porta elit, at pulvinar erat. Mauris pulvinar tincidunt laoreet.',
        'In elementum non tellus sed gravida. Cras vel sollicitudin eros. Cras eros lacus, accumsan at diam ac, rutrum tristique ex. Nam tincidunt gravida dui at viverra. Nunc a hendrerit risus, a porttitor orci. Nam tempor magna nec lectus sodales venenatis. Etiam et nunc a tellus efficitur interdum eu nec nisl.'
    ]

    const titles = [
        'Donec nec urna sed odio.',
        'Ut urna nulla, faucibus in.',
        'Fusce quis quam blandit massa.',
        'Fusce sodales orci ac mi.',
        'Maecenas ut convallis metus, sed.'
    ]

    const testCategories = ['modelos', 'complementos']

    for (let i = 0; i < 45; i++) {
        const email = 'manu' + i + '@manu.com'
        const user = await User.create({ name, email, password })
        for (let z = 0; z < 5; z++) {
            const title = titles[Math.floor(Math.random() * 5)]

            const body = bodies[Math.floor(Math.random() * 5)]

            let country = ''
            let province = ''

            if (i < 15) {
                country += 'ES'
                province += ES[Math.floor(Math.random() * ES.length)]
            }

            else if (i >= 15 && i < 30) {
                country += 'AR'
                province += AR[Math.floor(Math.random() * AR.length)]
            }

            else if (i >= 30) {
                country += 'MX'
                province += MX[Math.floor(Math.random() * MX.length)]
            }

            const area = 'area ' + z

            const price = Math.floor(Math.random() * 100)

            const categories = testCategories[Math.floor(Math.random() * 2)]

            const urls2 = [urls1[Math.floor(Math.random() * urls1.length)], urls1[Math.floor(Math.random() * urls1.length)], urls1[Math.floor(Math.random() * urls1.length)], urls1[Math.floor(Math.random() * urls1.length)]]

            await Ad.create({ user: user.id, title, body, location: { country, province, area }, image: urls2, verified: true, categories, price })
        }
    }

    console.log('45 users created with 5 ads each')

    await disconnect()
})()



