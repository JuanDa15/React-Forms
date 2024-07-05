import { ErrorMessage, useField } from 'formik';

interface Props {
  name: string;
  label: string;
  [x: string]: any;
}

export default function CustomCheckbox({
  label,
  ...others
}: Props): JSX.Element {
  const [field] = useField({ ...others });
  return (
    <>
      <label htmlFor={others.id || others.name}>
        <input
          id={others.id || others.name}
          className='text-black'
          type='checkbox'
          {...others}
          {...field}
        />
        {label}
      </label>
      <ErrorMessage
        name={others.name}
        component='span'
        className='text-red-800'
      />
    </>
  );
}
