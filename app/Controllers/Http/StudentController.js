'use strict'
const Database = use('Database')
const Student = use("App/Models/Student")

class StudentController {
    async index() {
        const students = await Student.query().fetch()
        return { status: 200, error: undefined, data: students }
    }
    async show({request}) {
        const id = request.params
        const student = await Student.query().where('student_id',id).fetch()
        return { status: 200, error: undefined, data: student || {} }
    }
    async store({ request }) {
        const data = request.body

        const students = await Student.create(data)
        return { status: 200, error: undefined, data: students }
    }
    async update({ request }) {
        const { body, params } = request
        const { id } = params
        const { first_name, last_name, student_class, university_id } = body

        const studentId = await Database
            .table('students')
            .where({ student_id: id })
            .update({ first_name, last_name, student_class, university_id })

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
