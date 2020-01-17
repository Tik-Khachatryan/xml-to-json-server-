const multer       = require('multer');
const User         = require('../models/User');
const excelToJson = require('convert-excel-to-json');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/admintik/Desktop/server-xml/uploads')
    },
    filename:    function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.xml')
    }
});


const uploadFile = multer({storage: storage}).single('xml');

const Upload = (req, res, next) => {

    uploadFile(req, res, (err) => {
        if (err) {
            throw err
        }

        next();


        const result = excelToJson({
            sourceFile: `/home/admintik/Desktop/server-xml/uploads/${req.file.filename}`
        });

        const user     = new User();
        user.xml = result;

        user.save()
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));

        res.send(user.xml);
    })

};

module.exports = Upload;