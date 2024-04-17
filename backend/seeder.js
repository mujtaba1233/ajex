require('dotenv').config();
const bcrypt = require('bcryptjs');
const sequelize = require('./database'); // Import your Sequelize connection instance
const Role = require("./models/roleModel"); // Import the Role model
const User = require("./models/userModel"); // Import the User model

async function addRolesAndUsers() {
    try {
        // Test the connection
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Synchronize the model with the database (optional if migrations are already applied)
        await sequelize.sync();

        // Define roles data
        const rolesData = [
            { name: "Admin", permissions: [] },
            { name: "Super Admin", permissions: [] },
            { name: "Staff", permissions: [] }
        ];

        // Create roles
        const createdRoles = await Role.bulkCreate(rolesData);

        // Retrieve super admin role
        const superAdminRole = await Role.findOne({ where: { name: "Super Admin" } });

        // Hash the password
        const hashedPassword = await bcrypt.hash("Admin125!@%", 10); // Hash the password with a salt round of 10

        // Define user data
        const userData = {
            firstName: "Super",
            lastName: "Admin",
            roleId: superAdminRole.id, // Assuming roleId is the foreign key in the User model
            phoneNumber: "12345667",
            isAdmin: true,
            isActivated: true,
            email: "super.admin@ajex.com",
            password: hashedPassword // Use the hashed password
        };

        // Create user
        const superAdmin = await User.create(userData);

        console.log("Roles are added and super admin created:", superAdmin);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        // Close the Sequelize connection
        await sequelize.close();
    }
}

addRolesAndUsers();
