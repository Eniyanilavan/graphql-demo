import {Model, DataTypes} from 'sequelize'


export default class access_permisions extends Model{
    
    static initModel(sequelize){
        this.init({
            aid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            uid:{
              type: DataTypes.INTEGER,
              allowNull: false
            },
            attribute_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            comp_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            access_type:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            conditions:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            created_by:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            updated_by:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
        }, {
            sequelize,
            tableName: "",
            createdAt: "created_at",
            updatedAt: "updated_at",
            indexes:[]
        })
    }

}
