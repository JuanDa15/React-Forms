import { ChangeEventHandler, useState } from "react";

export interface UseFormProps<T> {
  initialData: T
}

export interface UseFormReturn<T> {
  data: T;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  onResetForm: () => void;
  [key: string]: any;
}

export function useForm<T = any>({ initialData }: UseFormProps<T>) {
  const [data, setData] = useState(initialData)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target

    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const onResetForm = () => {
    setData(initialData)
  }

  return {
    data,
    ...data,
    onInputChange,
    onResetForm
  }
}