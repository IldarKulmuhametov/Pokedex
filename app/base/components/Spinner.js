import React, {Component} from 'react'
import Loader from 'react-loader'

let options = {
    lines: 9,
    length: 12,
    width: 2,
    radius: 10,
    corners: 0,
    rotate: 30,
    direction: 1,
    color: '#9E9E9E',
    speed: 1,
    trail: 72,
    shadow: false,
    hwaccel: false
};

export default class Spinner extends Component {
    render() {
        return (
            <Loader options={this.props.options || options} loaded={this.props.loaded}>
                {this.props.children}
            </Loader>
        )
    }
}