const UserModel = require("../models/userModel");
const bcrypt = require('bcryptjs')

module.exports = {
    createUser: async (user) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(user.password, salt)
            console.log(user, "This is the user")
            // Create user
            const createdUser = await UserModel.create({
                ...user,
                password: hashedPassword,
            })

            return createdUser;

        } catch (error) {
            console.log(error, "THis is the error")
        }
        // Hash password
    },
};
