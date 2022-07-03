const express = require('express')

const router = express.Router()

const controller = require('../controllers/employee.controller')


router.post('/employee/addEmployee', controller.create)
router.get('/employee/getAllEmployees',controller.getAll)
router.get('/employee/getById/:id',controller.getById)
router.put('/employee/updateById:id',controller.updateById)
router.delete('/employee/deleteEmployeebyId/:id',controller.deleteById)
router.delete('/employee/deleteAll',controller.deleteAll)
router.post('/employee/getByEmail',controller.getByEmail)

module.exports = router