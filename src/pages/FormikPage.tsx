import { FormikErrors, useFormik } from 'formik';

interface IForm {
  first_name: string;
  last_name: string;
  email: string;
}

export default function FormikPage() {
  const validate = (values: IForm) => {
    const errors: FormikErrors<IForm> = {};

    if (values.first_name.trim().length === 0) {
      errors.first_name = 'Required';
    } else if (values.first_name.length > 15) {
      errors.first_name = 'Must be 15 characters or less';
    }

    if (values.last_name.trim().length === 0) {
      errors.last_name = 'Required';
    } else if (values.last_name.length > 15) {
      errors.last_name = 'Must be 20 characters or less';
    }

    if (values.email.trim().length === 0) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik<IForm>({
      initialValues: {
        first_name: 'Daniel',
        last_name: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: validate,
    });

  const { email, first_name, last_name } = values;
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
      <h1>Formik Basic</h1>

      <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
        <input
          className='mt-2 text-black'
          type='text'
          name='first_name'
          placeholder='first name'
          value={first_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {firstNameTouched && firstNameError && (
          <span className='text-red-800'>{firstNameError}</span>
        )}
        <input
          className='mt-2 text-black'
          type='text'
          name='last_name'
          placeholder='last name'
          value={last_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {lastNameTouched && lastNameError && (
          <span className='text-red-800'>{lastNameError}</span>
        )}
        <input
          className='mt-2 text-black'
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {emailTouched && emailError && (
          <span className='text-red-800'>{emailError}</span>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
