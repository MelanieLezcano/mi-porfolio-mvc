
const path = require('path')
module.exports = {
    main: (req, res) => {
        return res.sendfile(path.join(__dirname, '../views', 'home.html'))
    }
}