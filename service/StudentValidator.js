const Validator = use('Validator')
module.exports = async function StudentValidator(data) {
    if (typeof data !== 'object') throw new Error()
    const { first_name, last_name, student_class } = data
    const rules = {
        first_name: 'required',
        last_name: 'required',
        student_class: 'required',
    }

    const validation = await Validator.validateAll({
        first_name,
        last_name,
        student_class,
    }, rules)

    return {
        error: validation.messages()
    }
}