import React, {Component} from 'react'
import {Col, Panel, Table} from 'react-bootstrap'

export default class PokemonDetailedView extends Component {

    renderColumn(title, value) {
        return (
                <tr>
                    <td className='det-title-container'>{title}</td>
                    <td className="det-value-container">{value}</td>
                </tr>
            )
    }

    render() {
        let pokemon= this.props.pokemon,
            types = pokemon.types.map(el => el.name)
        return (
            <Panel className='detailed-view text-center'>
                <div className='detailed-view-image' style={{backgroundImage: `url(http://pokeapi.co/media/img/${pokemon.pkdx_id}.png )`}}></div>
                    <h3>{`${pokemon.name} #${pokemon.pkdx_id}`}</h3>
                <Table bordered responsive>
                    <tbody>
                        {this.renderColumn('Type', types.join(','))}
                        {this.renderColumn('Attack', pokemon.attack)}
                        {this.renderColumn('Defense', pokemon.defense)}
                        {this.renderColumn('HP', pokemon.hp)}
                        {this.renderColumn('SP Attack', pokemon.sp_atk)}
                        {this.renderColumn('SP Defence', pokemon.sp_def)}
                        {this.renderColumn('Speed', pokemon.speed)}
                        {this.renderColumn('Weight', pokemon.weight)}
                        {this.renderColumn('Total Moves', pokemon.moves.length)}
                    </tbody>
                </Table>

            </Panel>
        )
    }
}