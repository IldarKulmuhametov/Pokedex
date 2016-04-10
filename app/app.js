import React, {Component} from 'react'
import {render} from 'react-dom'
import PokemonListPage from './pokemon/pages/PokemonListPage.js'

export default class App extends Component {
    render() {
        return(
            <div>
                <PokemonListPage/>
            </div>
        )
    }
}

render((<App/>), document.getElementById('wrapper'))