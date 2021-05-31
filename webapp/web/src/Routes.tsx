// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/flats/new" page={NewFlatPage} name="newFlat" />
      <Route path="/flats/{id}/edit" page={EditFlatPage} name="editFlat" />
      <Route path="/flats/{id}" page={FlatPage} name="flat" />
      <Route path="/flats" page={FlatsPage} name="flats" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
