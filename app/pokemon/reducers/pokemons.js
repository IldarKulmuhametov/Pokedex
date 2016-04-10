import {concatEventReducers} from 'point-one'
import {POKEMON_GET_LIST, POKEMON_SET_FILTER_TYPE, POKEMON_TYPES_LIST} from '../constants'

export let pokemons = concatEventReducers({
    [POKEMON_GET_LIST]: (state, {objects}) => objects
});

export let loaded = concatEventReducers({
    [POKEMON_GET_LIST]: () => true
})

export let limit = concatEventReducers({
    [POKEMON_GET_LIST]: (state, {meta}) => meta.limit
})

export let types = concatEventReducers({
    [POKEMON_TYPES_LIST]: (state, {objects}) => objects
})

export let selectedType = concatEventReducers({
    [POKEMON_SET_FILTER_TYPE]: (state, {selectedType}) => selectedType,
    [POKEMON_GET_LIST]: () => false
})