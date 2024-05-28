const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.json({
        name: 'Backend Aplikasi Rapor Pendidikan',
        version: 1.0
    });
});


module.exports = router