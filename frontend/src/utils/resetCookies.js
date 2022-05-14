const resetCookies = setIsLogged => {
    console.log("resetcokkies")
    const reset_snippet = ";expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

    document.cookie = 'access_token=' + reset_snippet
    document.cookie = 'refresh_token=' + reset_snippet
    document.cookie = 'token_expiration=' + reset_snippet
    setIsLogged(false)
}

export default resetCookies;