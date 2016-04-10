import {createPromiseAction} from 'point-one'
import {POKEMON_GET_LIST, POKEMON_TYPES_LIST, POKEMON_SET_FILTER_TYPE} from '../constants.js'
import {load, loadTypes} from '../resources/pokemon.js'

export let loadPokemons = createPromiseAction(load, POKEMON_GET_LIST);

export let loadAllTypes = createPromiseAction(loadTypes, POKEMON_TYPES_LIST)

export let setType = (selectedType) => {
    return {
        selectedType,
        type: POKEMON_SET_FILTER_TYPE
    }
}