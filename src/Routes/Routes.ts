import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element

export interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

const RegisterPageLazy = lazy(() => import('../pages/RegisterPage'))
const RegisterPageFormikLazy = lazy(() => import('../pages/RegisterPageFormik'))
const FormikPageLazy = lazy(() => import('../pages/FormikPage'))
const FormikPageYupLazy = lazy(() => import('../pages/FormikPageYup'))
const FormikComponentsLazy = lazy(() => import('../pages/FormikComponents'))
const FormikComponentAbstraction = lazy(() => import('../pages/FormikComponentsAbstraction'))
const DynamicFormikLazy = lazy(() => import('../pages/DynamicForm'))

export const routes: Route[] = [
  {
    to: '/register-page',
    path: 'register-page',
    Component: RegisterPageLazy,
    name: 'Register Page'
  },
  {
    to: '/register-page-formik',
    path: 'register-page-formik',
    Component: RegisterPageFormikLazy,
    name: 'Register Page Formik'
  },
  {
    to: '/formik-page',
    path: 'formik-page',
    Component: FormikPageLazy,
    name: 'Formik Page'
  },
  {
    to: '/formik-page-yup',
    path: 'formik-page-yup',
    Component: FormikPageYupLazy,
    name: 'Formik Page Yup'
  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponentsLazy,
    name: 'Formik Components'
  },
  {
    to: '/formik-component-abstraction',
    path: 'formik-component-abstraction',
    Component: FormikComponentAbstraction,
    name: 'Formik Component Abstraction'
  },
  {
    to: '/dynamic-form',
    path: 'dynamic-form',
    Component: DynamicFormikLazy,
    name: 'Dynamic Form'
  },
]