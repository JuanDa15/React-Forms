import { Form, Formik } from 'formik';
import CustomTextInput from '../components/CustomTextInput';
import { object, ref, string } from 'yup';

export default function RegisterPageFormik(): JSX.Element {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  return (
    <div>
      <h1>Register Page Formik</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={object({
          name: string()
            .required('name is required')
            .min(3, 'min 3 characters')
            .max(15, 'max 15 characters'),
          email: string()
            .email('invalid email format')
            .required('email is required'),
          password: string()
            .min(6, 'min 6 characters')
            .required('password is required'),
          confirm_password: string()
            .required()
            .oneOf([ref('password')], 'passwords must match'),
        })}
      >
        {({ resetForm }) => (
          <Form className='mt-6 flex flex-col gap-2'>
            <CustomTextInput name='name' type='text' placeholder='Name' />
            <CustomTextInput name='email' type='email' placeholder='Email' />
            <CustomTextInput
              name='password'
              type='password'
              placeholder='Password'
            />
            <CustomTextInput
              name='confirm_password'
              type='password'
              placeholder='Confirm Password'
            />

            <div className='flex flex-row flex-wrap gap-1 justify-center'>
              <button className='bg-gray-700' type='submit'>
                Register
              </button>
              <button type='button' onClick={() => resetForm({})}>
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
