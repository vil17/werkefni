import fetch from "fetch-jsonp"

const endpoint = 'localhost:4500'
const bossService = () => {
    return {
        getBosses: () => {
            return fetch(`${endpoint}/api/bosses`).then(resp => { return resp.json() })
        }
    }
}

export default bossService;