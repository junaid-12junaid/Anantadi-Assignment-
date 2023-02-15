const {uploadFile} = require("../AWS/aws-S3")
const path=require("path")


const fileUpload = async function (req, res) {
    res.header('Access-Control-Allow-Origin','*')
    try {
    
        const files = req.files

        let url = await uploadFile(files[0])

        return res.status(201).send({ status: true, message: "file uploaded successfully", data: url })

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


module.exports={fileUpload} 