const UserModal = require('../models/user-model')
const bcrypt = require('bc')
class UserService {
    async registration(email, password) {
        const candidate = await UserModal.findOne({email})
        if(candidate) {
            throw new Error(`Пользователь с почтовым адрессом ${email} уже существует`)
        }
        const user = await UserModal.create({email, password})
    }
}

module.exports = new UserService();
