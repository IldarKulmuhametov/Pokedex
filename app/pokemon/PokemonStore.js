import {createStore, compose, devTools, useDispatchers} from 'point-one'
import PokemonReducer from './reducers'

const finalCreateStore = compose(
    useDispatchers(devTools('Pokemon'))
)(createStore);

const PokemonStore = finalCreateStore(PokemonReducer, {
    loaded: false,
    list: [],
    current: {},
    limit: 12,
    types: [],
    selectedType: ''
});

export const dispatch = PokemonStore.dispatch;
export default PokemonStore