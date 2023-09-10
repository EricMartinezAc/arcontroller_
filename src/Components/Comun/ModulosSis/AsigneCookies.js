export const AsigneCookies = (user, pswLogin, id_prod, token, cookies) => {
    cookies.set('user', user, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 36000
    })
    cookies.set('pswLogin', pswLogin, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 36000
    })
    cookies.set('id_prod', id_prod, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 36000
    })
    cookies.set('token', token, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 36000
    })
}