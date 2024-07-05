import { Form, Formik } from 'formik';
import form from '../assets/custom-form.json';
import CustomTextInput from '../components/CustomTextInput';
import CustomSelect from '../components/CustomSelect';
import { object, string } from 'yup';

const initialValues: { [key: string]: any } = {};
const validationFields: { [key: string]: any } = {};

for (const field of form) {
  initialValues[field.name] = field.value;

  if (field.validations?.length > 0) {
    if (
      ['input', 'select'].includes(field.type) &&
      ['text', 'email', 'password', ''].includes(field.inputType)
    ) {
      let schema = string();

      for (const validation of field.validations) {
        if (validation.type === 'required') {
          schema = schema.required(validation.message);
        }
        if (validation.type === 'max') {
          schema = schema.max(
            (validation.value as number) || 1,
            validation.message
          );
        }
        if (validation.type === 'min') {
          schema = schema.min(
            (validation.value as number) || 1,
            validation.message
          );
        }
        if (validation.type === 'not-one-of') {
          schema = schema.notOneOf(
            validation.value as string[],
            validation.message
          );
        }
      }

      validationFields[field.name] = schema;
    }
  }
}

const validationSchema = object(validationFields);

export default function DynamicForm(): JSX.Element {
  console.log(form);
  console.log(validationFields);
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ resetForm }) => (
          <Form className='flex flex-col gap-2'>
            {form.map(({ name, placeholder, inputType, type, options }) => {
              if (type === 'input') {
                return (
                  <CustomTextInput
                    name={name}
                    placeholder={placeholder}
                    type={inputType as any}
                    key={name}
                  />
                );
              }

              if (type === 'select') {
                return (
                  <CustomSelect name={name} key={name}>
                    {options?.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </CustomSelect>
                );
              }
            })}
            <div>
              <button type='submit'>Submit</button>
              <button type='reset' onClick={() => resetForm(initialValues)}>
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
