import './App.css';
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Router';
// import { privateRoutes } from './Router';
import { DefaultLayout } from './Components/Layouts';
import AuthGuard from './Router/auth-guard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.allowAnonymous ? (
                      <Page />
                    ) : (
                      <AuthGuard requireRoles={route.role}>
                        <Page />
                      </AuthGuard>
                    )}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
