'use strict'
const Database = use('Database')
const University = use("App/Models/University")

class UniversityController {
    async index() {
        const universities = await University.query().fetch()
        return { status: 200, error: undefined, data: universities }
    }
    async show({ request }) {
        const { id } = request.params
        const university = await University.query().where('universicy_id',id).fetch()

        return { status: 200, error: undefined, data: university || {} }
    }
    async store({ request }) {
        const data = request.body

        const universities = await University.create(data)
        return { status: 200, error: undefined, data: universities }
    }

    async update({ request }) {
        const { body, params } = request
        const { id } = params
        const { university_name } = body

        const universityId = await Database
            .table('universities')
            .where({ university_id: id })
            .update({ university_name })

        const universitys = await Database
            .table('universities')
            .where({ university_id: universityId })
            .first()

        return { status: 200, error: undefined, data: universitys }
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
