import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { routes } from './Routes';

export default function Router(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className='bg-slate-600 absolute top-0 left-0 w-screen h-screen'>
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <div className='flex flex-row min-h-screen'>
          <nav className='max-w-[300px] bg-slate-800 p-2'>
            <h1>React Forms</h1>
            <ul className='[&_a]:py-2 [&_a]:px-1 [&_a]:border-b-[1px] [&_a:hover]:bg-slate-600 [&_a]:block'>
              {routes.map((route) => (
                <li key={route.name}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) =>
                      isActive ? 'bg-slate-600 text-white' : ''
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <section className='w-[calc(100vw - 300px)] flex justify-center'>
            <Routes>
              {routes.map(({ to, Component, path }) => (
                <Route key={to} path={path} element={<Component />} />
              ))}
              <Route
                path='*'
                element={<Navigate to={routes[0].to} replace={true} />}
              />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
