const { areas } = require('../../data')
const { FiltersError } = require('errors')

module.exports = function (country, page, limit, province, search, categories) {
    const { ES, MX, AR } = areas
    const countries = ['AR', 'MX', 'ES']

    if (!countries.includes(country)) throw new FiltersError('Country filter not valid')
    if (page)
        if (isNaN(page) || page < 1) throw new FiltersError('Page filter not valid')

    if (limit)
        if (isNaN(limit) || limit < 1 || limit > 10) throw new FiltersError('Limit filter not valid')

    if (province) {
        if (country === 'ES') {
            if (!ES.includes(province)) throw new FiltersError('Province filter not valid')

        }
        else if (country === 'MX') {
            if (!MX.includes(province)) throw new FiltersError('Province filter not valid')

        }
        else if (country === 'AR') {
            if (!AR.includes(province)) throw new FiltersError('Province filter not valid')

        }
    }

    if (search)
        if (typeof search !== 'string' || search.trim().length > 30) throw new FiltersError('Search filter not valid')

    if (categories)
        if (typeof categories !== 'string' || categories !== 'complementos' && categories !== 'modelos')
            throw new FiltersError('Categories filter not valid')
}