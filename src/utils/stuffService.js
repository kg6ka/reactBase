
const API_ROOT = 'https://api.github.com/';

export function getStuff() {
    const fullUrl = API_ROOT + 'repos/Yomguithereal/beobab/issues';
    return fetch(fullUrl)
        .then(res => {
            if(!res.ok) {
                console.log(`Have a problem. Status code is ${res.status}`);
                return;
            }
            res.json().then(data => data);
        })
        .catch(err => err);
}