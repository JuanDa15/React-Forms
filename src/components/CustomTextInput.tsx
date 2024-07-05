import { useField } from 'formik';

interface Props {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  [x: string]: any;
}

export default function CustomTextInput({
  placeholder,
  type,
  ...others
}: Props): JSX.Element {
  const [field, meta] = useField(others);
  return (
    <>
      <input
        type={type}
        className='text-black'
        placeholder={placeholder}
        {...field}
        {...others}
      />
      {meta.touched && meta.error && (
        <span className='text-red-800'>{meta.error}</span>
      )}
    </>
  );
}
