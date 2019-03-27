import fetch from "fetch-jsonp"

const endpoint = 'localhost:4500'
console.log('importing serc')
const bossService = () => {
    console.log('here')
    return {
        getBosses: () => {
            console.log('sercie')
            return fetch(`${endpoint}/api/bosses`).then(resp => { return resp.json() })
        }
    }
}

export default bossService;