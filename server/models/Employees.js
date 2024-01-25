module.exports = (sequelize,DataTypes) => {
    const Employees = sequelize.define('employees',{
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull : false
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address : {
            type: DataTypes.TEXT,
            allowNull : false
        },
        gender :{
            type : DataTypes.STRING,
            allowNull : false
        },
        contact_no : {
            type : DataTypes.BIGINT,
            allowNull : false
        },
        other_contact_no : {
            type : DataTypes.BIGINT,
            allowNull : false
        },
        email : {
            type :DataTypes.STRING,
            allowNull : false
        },
        team_name : {
            type :DataTypes.STRING,
            allowNull : false
        },
        joining_date : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue: DataTypes.NOW
        },
        birth_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        bank_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bank_holder_name : {
            type: DataTypes.STRING,
            allowNull:false
        },
        account_no : {
            type : DataTypes.BIGINT,
            allowNull : false
        },
        ifsc_code : {
            type : DataTypes.TEXT,
            allowNull : false
        }
    })
    return Employees
}