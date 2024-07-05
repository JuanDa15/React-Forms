import { FormEventHandler } from "react"
import { useForm } from "../hooks/useForm";

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export default function RegisterPage (): JSX.Element {
  const { 
    name, email, password, confirm_password, data, onInputChange, onResetForm
  } = useForm<RegisterForm>({
   initialData: {
    name: 'Juan david',
    email: 'jdoo1115@gmail.com',
    password: 'aA12345678',
    confirm_password: 'aA12345678'
   } 
  })

  const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(data)
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form 
        className="mt-6 flex flex-col gap-2"
        onSubmit={onSubmitForm}
      >
        <input 
          className="text-black" 
          type="text" 
          placeholder="name" 
          value={name} 
          name="name" 
          onChange={onInputChange}
        />
        <input 
          className="text-black" 
          type="email" 
          placeholder="Email" 
          value={email} 
          name="email" 
          onChange={onInputChange} 
        />
        <input
          className="text-black" 
          type="password" 
          placeholder="Password" 
          value={password} 
          name="password" 
          onChange={onInputChange} 
        />
        <input 
          className="text-black" 
          type="password" 
          placeholder="Confirm Password" 
          value={confirm_password} 
          name="confirm_password"  
          onChange={onInputChange}
        />
        <div className="flex flex-row flex-wrap gap-1 justify-center">
          <button 
            className="bg-gray-700" 
            type="submit"
          >
            Register
          </button>
          <button
            type="button"
            onClick={onResetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
