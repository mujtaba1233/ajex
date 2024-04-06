const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a role name'],
    },
    permissions: {
      type: Array,
      default: [],
    },
  },
);

module.exports = mongoose.model('Roles', roleSchema);
