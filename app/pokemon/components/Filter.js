import React , {Component} from 'react'
import Menu from '../../base/components/Menu.js'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import {loadAllTypes, setType} from '../actions/pokemon.js'
import {load} from '../../base/components/decorators/BasicLoader.js'
import {listen, observeChange} from 'point-one'
import PokemonStore, {dispatch} from '../PokemonStore.js'

@load(loadAllTypes())
@listen(PokemonStore, ['types', 'selectedType', 'limit'])
export default class Filter extends Component {
    constructor(...options) {
        super(...options)
        this.state = {}
    }

    setFilter(type) {
       dispatch(setType(type))
    }

    render() {
        let selected = this.state.selectedType || {}
        return (
            <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="filter">Filter by Type</Tooltip>}>
                    <Menu autoClose pullRight title={
                        <span className="type-name-filter-title">
                            {selected.name ||  'All Types'}
                            <i className="mdi-hardware-keyboard-arrow-down"/>
                        </span>
                        }>
                        <div className="item" onClick={this.setFilter.bind(this, null)}>Reset</div>
                        {this.state.types.map(type => (
                            <div key={Math.random()} className="item" onClick={this.setFilter.bind(this, type)}>
                                {type.name}
                            </div>
                        ))}
                    </Menu>
                </OverlayTrigger>
            </div>
        )
    }
}