const register = async (res, req) => {
    res.send('register user')

}

const login = async (res, req) => {
    res.send('login user')

}

const updateUser = async (res, req) => {
    res.send('updateUser user')

}

export {register, login, updateUser}