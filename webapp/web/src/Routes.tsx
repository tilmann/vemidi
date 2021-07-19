// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'
import FlatsLayout from 'src/layouts/FlatsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
import OnboardingLayout from './layouts/OnboardingLayout/OnboardingLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FlatsLayout}>
        <Route path="/flats/new" page={FlatNewFlatPage} name="newFlat" />
        <Route path="/flats/{id}/edit" page={FlatEditFlatPage} name="editFlat" />
        <Route path="/flats/{id}" page={FlatFlatPage} name="flat" />
        <Route path="/flats" page={FlatFlatsPage} name="flats" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={OnboardingLayout}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Set wrap={LandingLayout}>
        <Route path="/meet" page={ContactPage} name="meet" />
        <Route path="/data" page={ContactPage} name="data" />
        <Route path="/impressum" page={ImpressumPage} name="impressum" />
        <Route path="/" page={HomePage} prerender name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
