let users = {
    "1234": { id: "1234", username: "John Doe", password: "password123", email: "email@nyu.edu" }
  };
  
  const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if the email is already registered
      const existingUser = Object.values(users).find(user => user.email === email);
  
      if (existingUser) {
        res.status(400).json({ message: "Email is already registered." });
      } else {
        // Generate a unique user ID (you can use a library like uuid for this)
        const userId = generateUniqueId();
  
        // Create a new user object
        const newUser = {
          id: userId,
          username,
          email,
          password
        };
  
        // Add the new user to the users object
        users[userId] = newUser;
  
        res.status(201).json({ message: "User successfully registered", user: newUser });
        console.log('New user registered:', newUser);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: "Server error occurred", error: error.message });
    }
  };
  
  // Function to generate a unique ID (you can replace this with a more robust solution)
  const generateUniqueId = () => {
    try {
      const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      console.log(uniqueId);
      return uniqueId;
    } catch (error) {
      console.error('Error generating unique ID:', error);
      throw new Error('Error generating unique ID');
    }
  };
  
  export default register;
  