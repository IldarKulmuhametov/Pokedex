import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'

let contains = document.documentElement.contains
    ? (parent, node) => {
    return parent != node && parent.contains(node)
}
    : (parent, node) => {
    while (node && (node = node.parentNode)) {
        if (node == parent) {
            return true
        }
    }
    return false
}

class Menu extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            showMenu: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    registerListener() {
        document.body.addEventListener('click', this.handleClick)
    }

    removeListener() {
        document.body.removeEventListener('click', this.handleClick)
    }

    toggleMenu(e) {
        e.preventDefault()
        e.stopPropagation()
        if (!this.state.showMenu) {
            this.registerListener()
        }
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    handleClick(e) {
        if (this.props.autoClose) {
            if (!contains(this.refs.toggle, e.target)) {
                this.removeListener()
                this.setState({
                    showMenu: false
                })
            }
        } else {
            if (!contains(findDOMNode(this), e.target)) {
                this.removeListener()
                this.setState({
                    showMenu: false
                })
            }
        }
    }

    render() {
        return (
            React.createElement(
                this.props.wrapper,
                {
                    className: `mt-menu ${this.props.className} ${this.state.showMenu ? 'menu-open' : ''}`
                },
                [
                    <div key={1} ref="toggle" className="menu-toggle" onClick={this.toggleMenu}>
                        {this.props.title}
                    </div>,
                    <div key={2} style={{left: this.props.pullRight ? "0" : "auto", minWidth: this.props.minWidth ? this.props.minWidth: '200px'}} className="menu-container">
                        {this.props.children}
                    </div>
                ]

            )
        )
    }
}

Menu.defaultProps = {
    wrapper: "div"
}

export default Menu