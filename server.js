require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});