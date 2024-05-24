const dummyUsers = [
  {
    name: "John Doe",
    address: "123 Main Street, Anytown, CA 12345",
  },
  {
    name: "Jane Smith",
    address: "456 Elm Street, Anytown, CA 98765",
  },
  {
    name: "Michael Brown",
    address: "789 Oak Street, Anytown, NY 54321",
  },
  {
    name: "Alice Garcia",
    address: "1011 Maple Street, Anytown, TX 09876",
  },
  {
    name: "David Hernandez",
    address: "1213 Pine Street, Anytown, FL 32109",
  },
];

// Function to create a new user (simulates adding to the array)
const createUser = async (req, res) => {
  try {
    const { name, address } = req.body;

    if (!name || !address) {
      return res.status(400).json({ message: "Name and address are required" });
    }

    // Simulate adding new user to the array (replace with actual persistence logic)
    dummyUsers.push({ name, address });

    res.json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to get all users
const getUsers = async (req, res) => {
  try {
    res.json(dummyUsers); // Return the dummy data array
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
