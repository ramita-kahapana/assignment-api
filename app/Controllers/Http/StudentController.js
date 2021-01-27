'use strict'

const UniversityStudent = use("App/Models/UniversityStudent")
const Database = use('Database')
const Student = use("App/Models/Student")
const University = use("App/Models/University")
const StudentValidator = require("../../../service/StudentValidator")

class StudentController {
    async index() {
        const students = await Student.query().fetch()
        return { status: 200, error: undefined, data: students }
    }
    async show({ request }) {
        const { id } = request.params
        const data = await Student.query().with('university').where({ student_id: id }).fetch()
        return { status: 200, error: undefined, data: data }
    }
    async store({ request }) {
        const { body } = request
        const { first_name, last_name, student_class, university_name } = body
        const student = await Student.create({ first_name, last_name, student_class })
        const university = await University.query().where({ university_name }).fetch().then(response => JSON.parse(JSON.stringify(response)))
        const testData = university.map(item => item.university_id)
        let testId = await Student.query().count('student_id as id').then(response => JSON.parse(JSON.stringify(response[0])))
        const universitystudent = await UniversityStudent.create({ student_id: testId.id, university_id: testData[0] })
        const validatedData = await StudentValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }

        return { status: 200, error: undefined, data: student }
    }
    async update({ request }) {
        const { body, params } = request
        const { id } = params
        const { first_name, last_name, student_class } = body

        const studentId = await Database
            .table('students')
            .where({ student_id: id })
            .update({ first_name, last_name, student_class })

        const student = await Database
            .table('students')
            .where({ student_id: studentId })
            .first()

        return { status: 200, error: undefined, data: student }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('students')
            .where({ student_id: id })
            .delete()

        return { status: 200, error: undefined, data: { message: 'success' } }
    }
}

module.exports = StudentController
