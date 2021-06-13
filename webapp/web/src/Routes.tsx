// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
import OnboardingLayout from './layouts/OnboardingLayout/OnboardingLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={OnboardingLayout}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/flats/new" page={NewFlatPage} name="newFlat" />
        <Route path="/flats/{id}/edit" page={EditFlatPage} name="editFlat" />
        <Route path="/flats/{id}" page={FlatPage} name="flat" />
        <Route path="/flats" page={FlatsPage} name="flats" />
      </Set>
      <Set wrap={LandingLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
