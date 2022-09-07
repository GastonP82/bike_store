const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Color = db.Color;

const categoryAPIController = {
    'list': (req, res) => {
        db.Color.findAll()
        .then(colors => {
            const colorsData = colors.map(color => (
                 {
                    ...color.dataValues,
                   
                }
            ))
            let respuesta = {
                meta: {
                    status : 200,
                    total: colors.length,
                
                },
                data: colorsData
            }
                res.json(respuesta);
            })
    },
}

module.exports = categoryAPIController;