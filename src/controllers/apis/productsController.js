const { send } = require("express/lib/response");
const db = require("../../database/models");


module.exports={


    listAll:(req,res)=>{
                   db.Product.findAll ({atribute: ["id","name","description"],
                   include: [{association: 'color'}]} )
                .then(products => {
                     res.status(200).json({
                      total: products.length ,
                      data: products
                     })
    })
},
    detail: (req,res)=>{

    }
}
