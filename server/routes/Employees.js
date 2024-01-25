const express = require('express')
const { employees: Employees } = require("../models");
const router = express.Router()

router.get("/", async (request, response) => {
    const employeeData = await Employees.findAll({ order: [['createdAt', 'DESC']] })
    return response.json(employeeData)
})

router.post("/new", async (request, response) => {
    try {
        const { employee_id, employee_name, address, gender,
            email, contact_no, team_name, joining_date, birth_date, other_contact_no,
            bank_name, bank_holder_name, account_no, ifsc_code } = request.body

        const newEmployees = await Employees.create({
            employee_id,
            employee_name,
            address,
            gender,
            contact_no,
            other_contact_no,
            email,
            team_name,
            joining_date,
            birth_date,
            bank_name,
            bank_holder_name,
            account_no,
            ifsc_code
        });
        return response.json(newEmployees);
    } catch (error) {
        return response.json(error)
    }

})

router.put("/update/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const { employee_id, employee_name, address, gender,
            email, contact_no, team_name, joining_date, birth_date, other_contact_no,
            bank_name, bank_holder_name, account_no, ifsc_code } = request.body

        const updateEmployee = await Employees.update({
            employee_id,
            employee_name,
            address,
            gender,
            contact_no,
            other_contact_no,
            email,
            team_name,
            joining_date,
            birth_date,
            bank_name,
            bank_holder_name,
            account_no,
            ifsc_code
        },
            { where: { id: id } });
        return response.json(updateEmployee)
    } catch (error) {
        return response.json(error)
    }

})

router.get("/getById/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const Employee = await Employees.findByPk(id)
        response.json(Employee)
    } catch (error) {
        return response.json(error)
    }

})

router.delete("/delete/:id", async (request, response) => {
    try {
        const id = request.params.id
        await Employees.destroy({
            where: {
                id: id
            }
        })
        return response.json("Deleted")
    } catch (error) {
        return response.json(error)
    }
})

module.exports = router