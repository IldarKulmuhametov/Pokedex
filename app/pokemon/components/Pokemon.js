import React, {Component} from 'react'
import {Col, Button, Panel,  Grid} from 'react-bootstrap'

export default class Pokemon extends Component {
    render() {
        let {pokemon} = this.props
        return(
            <div>
                <Panel className='single-pokemon'>
                    <div className='pokemon-image' style={{backgroundImage: `url(http://pokeapi.co/media/img/${pokemon.pkdx_id}.png )`}}></div>
                    <span className='pokemon-name'>{pokemon.name}</span>
                    <Col md={12}>
                        {pokemon.types.map((type, index) => (
                            <Col key={index} md={6}>
                                <span className={`type-name ${type.name.toLowerCase()}`}>{type.name}</span>
                            </Col>
                        ))}
                    </Col>
                </Panel>
            </div>
        )
    }
}