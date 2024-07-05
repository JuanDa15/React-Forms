import { useField } from 'formik';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  name: string;
  [x: string]: any;
}

export default function CustomSelect({
  children,
  placeholder,
  ...others
}: Props): JSX.Element {
  const [field, meta] = useField(others);

  return (
    <>
      <select className='text-black' {...field}>
        {children}
      </select>
      {meta.touched && meta.error && (
        <span className='text-red-800'>{meta.error}</span>
      )}
    </>
  );
}
