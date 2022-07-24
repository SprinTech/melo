import getTokenFromUrl from './getToken';

const cookieNames = ['access_token', 'refresh_token', 'token_expiration']

const generateCookies = () => {
    const tokens = getTokenFromUrl()

    document.cookie = 'access_token=' + tokens.access_token
    document.cookie = 'refresh_token=' + tokens.refresh_token
    document.cookie = 'token_expiration=' + tokens.token_expiration
}

export const setLoginStatusCookie = bool => {
    docomuent.cookie = 'logged_in_status=' + bool
}

export const resetCookies = setIsLinked => {
    const reset_snippet = ";expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

    document.cookie = 'access_token=' + reset_snippet
    document.cookie = 'refresh_token=' + reset_snippet
    document.cookie = 'token_expiration=' + reset_snippet
    document.cookie = 'was_logged_in=' + reset_snippet
    setIsLinked(false)
}

export const getCookie = name => { 
    if (document.cookie) {
        if (document.cookie.indexOf('; ') !== -1) {
            return document.cookie
            .split('; ')
            .find(row => row.startsWith(name+'='))
            .split('=')[1];
        } else {
            return document.cookie.startsWith(name+'=') && document.cookie.split('=')[1];
        }
    }
}

export default generateCookies;
