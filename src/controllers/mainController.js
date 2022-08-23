const controller = {
    index : (req, res) => {
        res.render ('index')
    },
    userLoginForm : (req, res) => {
        res.render ('userLoginForm')
    },
    register : (req, res) => {
        res.render ('register')
    },
    productCart : (req, res) => {
        res.render ('productCart ')
    },
    productDetail:(req,res)=>{
        res.render('productDetail')
    },
   
}

module.exports = controller;