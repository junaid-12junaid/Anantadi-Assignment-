const express = require('express')
const router = express.Router()


const { fileUpload} = require('../controller/fileUpload.js')


router.post("/uploading", fileUpload)




router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})


module.exports = router