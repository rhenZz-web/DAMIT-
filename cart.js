
const express = require('express');
const router = express.Router();

let cart = [];

router.get('/', (req, res) => {
    res.json(cart);
});

router.post('/', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.json(cart);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    cart = cart.filter(item => item._id !== id);
    res.json(cart);
});

module.exports = router;
