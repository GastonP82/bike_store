const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Products = db.Product;
const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({include: { association: 'color' }}, )

        .then(products => {
            const productsData = products.map(product => (
                 {
                    ...product.dataValues,
                    detail: '/api/products/' + product.id,
                    total: products.length,
                    categoriaTotal:2

                }
            ))
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products',
                    categoriaTotal:3
                },
                data:  productsData,
                              
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {include: { association: 'color' }})
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/' + product.id
                    },
                    data: product,
                }
                res.json(respuesta);
            });
    },
}
module.exports = productsAPIController;
