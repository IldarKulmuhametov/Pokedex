import Request from './ApiRequest.js'
import {resolve} from 'url'
import config from '../config'

let variable =  /(\/)*\:([a-zA-Z]+)/g

class AbstractApiResource {

    constructor(url) {
        this.request = Request
        this.url = resolve(config.api.endpoint, url)
        this.variables = this.url.match(variable)
        if (!Array.isArray(this.variables)) {
            this.variables = []
        }
    }

    buildURL(variables) {
        let url = this.url
        this.variables.forEach((value, index) => {
            url = url.replace(value, variables[index]?'/'+variables[index]:'')
        })
        return url
    }

    get(query, ...variables) {
        return Request.get(this.buildURL(variables), query)
    }

    create(data, ...variables) {
        return Request.post(this.buildURL(variables), data)
    }

    update(data, ...variables) {
        return Request.post(this.buildURL(variables), data)
    }

    patch(data, ...variables) {
        return Request.patch(this.buildURL(variables), data)
    }

    delete(...variables) {
        return Request.delete(this.buildURL(variables), null);
    }
}

export default AbstractApiResource