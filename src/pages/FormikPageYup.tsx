import { useFormik } from 'formik';
import { object, string } from 'yup';

interface IForm {
  first_name: string;
  last_name: string;
  email: string;
}

export default function FormikPageYup() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik<IForm>({
    initialValues: {
      first_name: 'Daniel',
      last_name: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: object({
      first_name: string()
        .required('First name is required')
        .max(15, 'Should have 15 characters'),
      last_name: string()
        .required('Last name is required')
        .max(15, 'Should have 15 characters'),
      email: string()
        .email('Invalid email format')
        .required('Email is required'),
    }),
  });

  const {
    email: emailError,
    first_name: firstNameError,
    last_name: lastNameError,
  } = errors;

  const {
    email: emailTouched,
    first_name: firstNameTouched,
    last_name: lastNameTouched,
  } = touched;

  return (
    <div>
      <h1>Formik Yup</h1>

      <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
