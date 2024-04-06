require('dotenv').config();


const connectDB = require('./config/db');

const roleModel = require("./models/roleModel")
const { createUser } = require('./services/userService');

connectDB()

async function addRolesAndUsers () {
    try {     
        const roles = [
            {
                name : "Admin",
                permissions: []
            },
            {
                name : "Super Admin",
                permissions: []
            },
            {
                name : "Staff",
                permissions: []
            }
        ];

        await roleModel.insertMany(roles);
        const superAdminRole = await roleModel.findOne({name: "Super Admin"});

        const user =  {
                firstName: "Super",
                lastName: "Admin",
                role: superAdminRole._id,
                phoneNumber: "12345667",
                isAdmin: true,
                isActivated: true,
                email: "super.admin@ajex.com",
                password: "Admin125!@%"
            }
    
        const superAdmin = await createUser(user);

        console.log("Roles are addmd and super admin created", superAdmin);
    } catch (error) {
        console.log(error, "This is the errror")
    }

}


addRolesAndUsers();