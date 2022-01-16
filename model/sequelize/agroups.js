import {Model, DataTypes} from 'sequelize'


export default class groups extends Model{
    
    static initModel(sequelize){
        this.init({
            agid: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            status:{
              type: DataTypes.TINYINT({length: 1}),
              allowNull: false
            },
            dflag:{
                type: DataTypes.TINYINT({length: 1}),
                allowNull: false
            },
            comp_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            uid:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            aaccess_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            aattribute_id:{
                type: DataTypes.INTEGER,
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
            tableName: "agroups",
            createdAt: "created_at",
            updatedAt: "updated_at",
            indexes:[]
        })
        return this
    }

}
