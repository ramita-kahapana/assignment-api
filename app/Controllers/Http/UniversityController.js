'use strict'
const Database = use('Database')
const University = use("App/Models/University")
const UniversityValidator = require("../../../service/UniversityValidator")

class UniversityController {
    async index() {
        const universities = await University.query().fetch()
        return { status: 200, error: undefined, data: universities }
    }
    async show({ request }) {
        const { id } = request.params
        const data = await University.query().with('students').where({ university_id: id }).fetch()

        return { status: 200, error: undefined, data: data }
    }
    async store({ request }) {
        const data = request.body

        const universities = await University.create(data)
        const validatedData = await UniversityValidator(request.body)
        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }
        return { status: 200, error: undefined, data: universities }
    }

    async update({ request }) {
        const { id } = request.params
        const data = request.body
        const universityId = await University.query().where('university_id',id ).update(data)
        const universityData = await University.query().where('university_id',id).fetch()
        return { status: 200, error: undefined, data: universityData }

    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('universities')
            .where({ university_id: id })
            .delete()

        return { status: 200, error: undefined, data: { message: 'success' } }
    }
}

module.exports = UniversityController
