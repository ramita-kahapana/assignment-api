'use strict'

const { test } = use('Test/Suite')('API Test')

// const Student = use("App/Models/Student")

// test('get list of posts', async ({ client }) => {
//     const student = await Student.create({
//         first_name: 'อุดาทิพย์',
//         last_name: 'ไชยกุล',
//         student_class: 'ป.โท'
//     })
//     const response = await client.posts('students').send(student).end()

//     response.assertStatus(200)
//     response.assertJSONSubset({
//         data: {
//             first_name: 'อุดาทิพย์',
//             last_name: 'ไชยกุล',
//             student_class: 'ป.โท'
//         }
//     })
// })
