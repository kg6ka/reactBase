
const API_ROOT = 'https://api.github.com/';

export function getStuff() {
    const fullUrl = API_ROOT + 'repos/Yomguithereal/beobab/issues';
    return fetch(fullUrl)
        .then(res =>
            res.json().then(json => ({json, res})))
}