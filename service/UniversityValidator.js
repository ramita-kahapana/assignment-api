const Validator = use('Validator')
module.exports = async function UniversityValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const {university_name } = data
    const rules = {
        university_name: 'required',
    }

    const validation = await Validator.validateAll({
        university_name,
    }, rules)

    return {
        error: validation.messages()
    }
}