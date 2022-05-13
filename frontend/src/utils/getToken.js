const getTokenFromUrl = () => {
    let res = window.location.search
    let params = new Object()
    params = {}
    res.substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            params[parts[0]] = decodeURIComponent([parts[1]])
        }, {})
    return params

}

export default getTokenFromUrl;