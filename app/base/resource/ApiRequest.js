let json = response => response.json()

let defaultOptions = {
    method: 'GET',
    headers: {}
}

class Request {
    constructor(url, options) {
        this.options = defaultOptions
        this.url = url
        this.buildUrl = url
        this.status = this.status.bind(this)
        this.parseOptions(options)
    }

    parseOptions(options) {
        Object.keys(options).forEach(key => {
            let option = options[key]
            switch (key) {
                case 'body':
                    if (option instanceof FormData) {
                        this.options.body = option
                    } else {
                        this.options.body = Request.serialize(option)
                        this.options.headers["Content-Type"] = "application/x-www-form-urlencoded"
                    }
                    break;
                case 'headers':
                    Object.keys(option).forEach(header => {
                        this.options.headers[header] = option[header]
                    })
                    break;
                case 'query':
                    if (option && option != "") {
                        if (typeof option === 'object') {
                            this.buildUrl = `${this.url}?${Request.serialize(option)}`
                        } else {
                            this.buildUrl = `${this.url}?${option}`
                        }
                    }
                    break;
                default:
                    this.options[key] = option
            }
        })
    }

    execute() {
        return fetch(this.buildUrl, this.options)
            .then(this.status)
            .then(json)
    }

    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response))
        }
    }

    static serialize (data, prefix = false) {
        let body = []
        data ? Object.keys(data).forEach(key => {
            let value = data[key]
            let name = prefix ? `${prefix}[${key}]`:key
            if (typeof value == "object") {
                body.push(Request.serialize(value, name))
            } else {
                body.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
            }
        }): null

        return body.join("&")
    }

    static get(url, query) {
        return (new Request(url, {query})).execute()
    }

    static post(url, body) {
        return (new Request(url, {method: 'POST', body})).execute()
    }

    static put(url, body) {
        return (new Request(url, {method: 'PUT', body})).execute()
    }

    static patch(url, body, headers) {
        return (new Request(url, {method: 'PATCH', body})).execute()
    }

    static delete(url, query) {
        return (new Request(url, {method: 'DELETE', query})).execute()
    }
}


Request.FORBIDDEN = 403
Request.NOT_FOUND = 404
Request.INTERNAL_SERVER_ERROR = 500

export default Request