const fs = require('fs');
const path = require('path');
const db = require('../database/models')




const usersController = {
	login: function(req, res){
		db.User.findAll()
			.then(function(users){
				res.render(path.resolve(__dirname, "../views/login"),{users:users})
			})
	},

	createUser: (req, res)=> {
		db.Role.findAll()
			.then(function (roles) {
				return res.render(path.resolve(__dirname, "../views/createUser"), {roles})
			})
	},
	//guardar usuario
	storeUser: async (req, res) => {
		try {
		const newUser= {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		roles_id: req.body.roles,
		}
		await db.User.create(newUser);
		res.redirect('/');
		} catch (error) {
		console.log(error)
	}
			}, 

	// listado de usuarios 
	list: (req, res)=> {
		db.User.findAll()
			.then(function (users) {
				res.render(path.resolve(__dirname, "../views/listadoDeUsuarios"), {users: users})
			})
	},


	
	// Editar usuarios
	edit: (req, res)=> {
		let pedidoUsers = db.User.findByPk(req.params.id)
		let pedidoRoles = db.Role.findAll();

		Promise.all([pedidoUsers, pedidoRoles])
			.then(function ([users, roles]) {
				res.render(path.resolve(__dirname, "../views/editUser"), {
					users: users,
					roles: roles
				});
			})
	},

	// Actualizar
	update: async(req, res) => {
		try{
		user = await db.Product.update({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			roles_id: req.body.roles
				  }, {
			where: {
			  id: req.params.id
			}
		  });
		res.redirect('/users/list');
	
	} catch (error){
		console.log(error)
	}
	  },
	// Borrar usuario
	delete: (req, res)=> {
		db.User.destroy({
				where: {
					id: req.params.id
				}
			}),
			res.redirect("/users/list")
	}
};

module.exports = usersController;