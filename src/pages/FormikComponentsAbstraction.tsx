import { Form, Formik } from 'formik';
import { boolean, object, string } from 'yup';
import CustomTextInput from '../components/CustomTextInput';
import CustomSelect from '../components/CustomSelect';
import CustomCheckbox from '../components/CustomCheckbox';

export default function FormikComponentsAbstraction() {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          first_name: '',
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
            <CustomTextInput
              type='text'
              name='first_name'
              placeholder='Jhon Doe'
            />
            <CustomTextInput
              type='text'
              name='last_name'
              placeholder='Doe ranses'
            />
            <CustomTextInput
              type='email'
              name='email'
              placeholder='jhondoe@mail.com'
            />

            <CustomSelect name='job_type'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Junior</option>
            </CustomSelect>

            <CustomCheckbox label='Terms' name='terms' />

            <button type='submit' className='bg-sky-700'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
