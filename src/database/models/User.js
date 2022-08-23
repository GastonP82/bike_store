module.exports = (sequelize, dataTypes) => {
    let alias = 'Users'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
          },
          first_name:{
            type: dataTypes.STRING(255),
            allowNull: true
    
          },
          last_name:{
            type: dataTypes.STRING(255),
            allowNull: true
          },
          address:{
            type: dataTypes.STRING(255),
            allowNull: true
          },
          city:{
            type: dataTypes.STRING(255),
            allowNull: false
    
          },
          country:{
            type: dataTypes.STRING(255),
            allowNull: false
    
          },
          email:{
            type: dataTypes.STRING(255),
            allowNull: true
    
          },
          username:{
            type: dataTypes.STRING(255),
            allowNull: true
    
          },
          password:{
            type: dataTypes.STRING(255),
            allowNull: true
          },
          user_type:{
            type: dataTypes.STRING(255),
            allowNull: true
          },
          avatar:{
            type: dataTypes.STRING(255),
            allowNull: false
    
          }    

    }
    let config = {
        tableName:"users",
        timestamps: false
    }
    const User = sequelize.define(alias,cols,config);
      
    return User;
};