import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { authProtectedRoutes,publicRoutes } from './allRoutes'
import NonAuthLayout from '../Layout/NonAuthLayout'
import { AuthProtected } from './AuthProtected'
import Layout from '../Layout'

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {
            publicRoutes.map((route: any, idx: any) => (
              <Route
                key={idx}
                path={route.path}
                element={<NonAuthLayout> {route.component} </NonAuthLayout>}
              // exact={true}
              />
            ))
          }
        </Route>
        <Route>
          {
            authProtectedRoutes.map((route: any, idx: number) => (
              <Route
                key={idx}
                path={route.path}
                element={<AuthProtected> <Layout>{route.component}</Layout> </AuthProtected>}
              // exact={true}
              />
            ))
          }
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default Index