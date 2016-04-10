import Resource from '../../base/resource/AbstractResource.js'
let pokemonResource =  new Resource('/api/v1/pokemon/:id')

let typesResource = new Resource('api/v1/type/')

export function load(query = {}) {
    return pokemonResource.get(query)
}

export function loadTypes(query ={limit: 999}) {
    return typesResource.get(query)
}