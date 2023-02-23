const { Router } = require('express');

const router = Router();

router.get('/users', (req, res) => {
    res.send('Esto es un GET a users desde mi servidor')
})

router.post('/users', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.send(`${JSON.stringify(req.body)}`)
})

module.exports = router;