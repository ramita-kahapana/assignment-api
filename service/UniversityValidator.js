const Validator = use('Validator')
module.exports = async function universityValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { first_name, last_name, age, admin_name, password, status } = data
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