import Cookie from 'js-cookie'

const baseUrl = '/api'

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export function getStuff() {
    return fetch(baseUrl + '/stuff')
        .then(checkStatus)
        .then(parseJSON)
}
