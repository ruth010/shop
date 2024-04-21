const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

//Define product route
const router = express.Router();

// GET all products
router.get('/products', productController.getProducts);

// POST a new product
router.post('/products', productController.createProduct);

// PUT (update) a product
router.put('/products/:productId', productController.updateProduct);

// DELETE a product
router.delete('/products/:productId', productController.deleteProduct);

// GET all users
router.get('/users', userController.getUsers);

// GET a single user by ID
router.get('/users/:userId', userController.getUserById);

// POST a new user
router.post('/users', userController.createUser);

// PUT (update) a user
router.put('/users/:userId', userController.updateUser);

// DELETE a user
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;


