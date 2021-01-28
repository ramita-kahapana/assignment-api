'use strict'

const { test } = use('Test/Suite')('University & Student')
const UniversityValidator = require('../../service/UniversityValidator')
const StudentValidator = require('../../service/StudentValidator')

//University
test('should return error unidefined when data is not entered from university validator', async ({ assert }) => {
  const universityData = await UniversityValidator({
    university_name: '',
  })
  assert.isArray(universityData.error, undefined);
})

//Student
test('should return error unidefined when data is not entered from student validator', async ({ assert }) => {
  const studentData = await StudentValidator({
    first_name: '',
    last_name: 'kahapana',
    student_class: 'sss',
  })
  assert.isArray(studentData.error, undefined)
})

test('should return only  one error if  two incorrect data is passed from student validator', async({ assert }) => {
  const studentData = await StudentValidator({
    first_name: '',
    last_name: '',
    student_class: 'sss',
  })
  assert.equal(studentData.error.length, 2)
})