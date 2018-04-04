import {AUTH_SERVICE} from './login.service';

class AuthHttpService {
    _getHeaders(moreHeaders) {
        const headers = new Headers()
            .append("Authorization", `Bearer ${AUTH_SERVICE.token}`)
            .append("Content-Type", "application/json")
        if (moreHeaders) {
            moreHeaders.forEach(h => {
                headers.append(h.key, h.value)
            });
        }
        return headers;
    }

    get(url, moreHeaders) {
        if (!AUTH_SERVICE.isAuthorized()) {
            throw new Error("Non-authorized request")
        }
        return fetch(url, {headers: this._getHeaders(moreHeaders)})
            .then(response => {
                debugger
                return response.json().then(answer => {answer, response.status})
            })
    }

    post(url, data, moreHeaders) {
        if (!AUTH_SERVICE.isAuthorized()) {
            throw new Error("Non-authorized request")
        }
        
        if (moreHeaders) {
            moreHeaders.forEach(h => {
                headers.append(h.key, h.value)
            });
        }
        return fetch(url, 
            {
                method: "POST",
                data: JSON.stringify(data),
                headers: this._getHeaders(moreHeaders)
            })
            .then(response => {
                return response.json().then(answer => {answer, response.status})
            })
    }

    patch() {
        if (!AUTH_SERVICE.isAuthorized()) {
            throw new Error("Non-authorized request")
        }
        
        if (moreHeaders) {
            moreHeaders.forEach(h => {
                headers.append(h.key, h.value)
            });
        }
        return fetch(url, 
            {
                method: "PATCH",
                data: JSON.stringify(data),
                headers: this._getHeaders(moreHeaders)
            })
            .then(response => {
                return response.json().then(answer => {answer, response.status})
            })
    }
}

export const AUTH_HTTP = new AuthHttpService()