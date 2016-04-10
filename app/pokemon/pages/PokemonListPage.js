import React, {Component} from 'react'
import Pokemon from '../components/Pokemon.js'
import DetailedView from '../components/PokemonDetailedView.js'
import {listen, observeChange} from 'point-one'
import PokemonStore, {dispatch} from '../PokemonStore.js'
import {loadPokemons} from '../actions/pokemon.js'
import {load} from '../../base/components/decorators/BasicLoader.js'
import {Col, Button, Grid} from 'react-bootstrap'
import Spinner from '../../base/components/Spinner.js'
import Filter from '../components/Filter.js'
const MORE = 12

@load(loadPokemons({limit: PokemonStore.getState().limit}))
@listen(PokemonStore, ['list', 'loaded', 'limit', 'selectedType'])
@observeChange(['list'])
export default class PokemonListPage extends Component {
    constructor(...options) {
        super(...options)
        this.state = {}
    }

    get list() {
        return this.state.selectedType ? this.state.list.filter(el => ~el.types.findIndex(type => type.name == this.state.selectedType.name.toLowerCase())) : this.state.list
    }

    onListChange() {
        this.setState({loading: false})
    }

    render() {
        return(
            <div className='main-page'>
                <Spinner loaded={this.state.loaded}>
                    <div className='text-center'>
                        <h1>Pokedex</h1>
                    </div>
                    <Col xs={12} sm={12} md={12}>
                        <Filter/>
                    </Col>
                    <Col className='list-wrapper' xs={6} sm={6} md={6}>
                        <Grid fluid>
                            {this.list.map((pokemon, index) => (
                                <Col key={index} xs={12} sm={6} md={4}>
                                    <div onClick={()=> this.setState({current: pokemon})}>
                                        <Pokemon pokemon={pokemon}/>
                                    </div>
                                </Col>
                            ))}
                            <Col md={12}>
                                <Button className='load-button' bsStyle='info' onClick={e => {dispatch(loadPokemons({ limit: this.state.limit + MORE })), this.setState({loading: true})}}>{this.state.loading ? 'Loading...': 'Load More'}</Button>
                            </Col>
                        </Grid>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                        {this.state.current ? <DetailedView pokemon={this.state.current} />: null}
                    </Col>
                </Spinner>
            </div>

        )
    }
}