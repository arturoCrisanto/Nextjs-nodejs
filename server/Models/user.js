const userSchema = {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
};

module.exports = userSchema;
