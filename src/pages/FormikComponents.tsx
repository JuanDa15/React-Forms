import { ErrorMessage, Field, Form, Formik } from 'formik';
import { boolean, object, string } from 'yup';

export default function FormikComponents() {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          first_name: 'Daniel',
          last_name: '',
          email: '',
          terms: false,
          job_type: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={object({
          first_name: string()
            .required('First name is required')
            .max(15, 'Should have 15 characters'),
          last_name: string()
            .required('Last name is required')
            .max(15, 'Should have 15 characters'),
          email: string()
            .email('Invalid email format')
            .required('Email is required'),
          terms: boolean()
            .required('Terms must be accepted')
            .isTrue('Should be true'),
          job_type: string()
            .required('Job type is required')
            .notOneOf(['it-junior'], 'This option is unavailable'),
        })}
      >
        {({}) => (
          <Form className='flex flex-col gap-2'>
            <Field
              name='first_name'
              type='text'
              className='text-black'
              placeholder='first name'
            />
            <ErrorMessage
              name='first_name'
              component='span'
              className='text-red-800'
            />
            <Field
              name='last_name'
              type='text'
              className='text-black'
              placeholder='last name'
            />
            <ErrorMessage
              name='last_name'
              component='span'
              className='text-red-800'
            />
            <Field
              name='email'
              type='text'
              className='text-black'
              placeholder='email'
            />
            <ErrorMessage
              name='email'
              component='span'
              className='text-red-800'
            />
            <Field name='job_type' as='select' className='text-black'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Junior</option>
            </Field>
            <ErrorMessage
              name='job_type'
              component='span'
              className='text-red-800'
            />
            <label htmlFor='terms'>
              <Field
                id='terms'
                name='terms'
                type='checkbox'
                className='text-black'
                placeholder='first name'
              />
              Terms
            </label>
            <ErrorMessage
              name='terms'
              component='span'
              className='text-red-800'
            />
            <button type='submit' className='bg-sky-700'>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
        <input
          className='mt-2 text-black'
          type='text'
          placeholder='first name'
          {...getFieldProps('first_name')}
        />
        {firstNameTouched && firstNameError && (
          <span className='text-red-800'>{firstNameError}</span>
        )}
        <input
          className='mt-2 text-black'
          type='text'
          placeholder='last name'
          {...getFieldProps('last_name')}
        />
        {lastNameTouched && lastNameError && (
          <span className='text-red-800'>{lastNameError}</span>
        )}
        <input
          className='mt-2 text-black'
          type='email'
          placeholder='email'
          {...getFieldProps('email')}
        />
        {emailTouched && emailError && (
          <span className='text-red-800'>{emailError}</span>
        )}
        <button type='submit'>Submit</button>
      </form> */}
    </div>
  );
}
