import {concatReducers} from 'point-one'
import {pokemons, loaded, limit, types, selectedType} from './reducers/pokemons.js'


export default concatReducers({
    list: pokemons,
    loaded,
    limit,
    types,
    selectedType
})
