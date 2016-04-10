import React from 'react'
import {dispatch} from 'point-one'

export function load(action:Function):Function {
    return Component => {
        class BasicLoader extends Component {
            componentDidMount() {
                super.componentDidMount && super.componentDidMount()
                action(dispatch)
            }
        }

        return BasicLoader
    }
}