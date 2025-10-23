import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// Public Pages
import Home from "./pages/public";

import Books from "./pages/public/books";
import ShowBook from "./pages/public/books/show";

// Auth Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Admin Pages
import Dashboard from "./pages/admin";

import AdminBooks from "./pages/admin/books";
import BooksCreate from "./pages/admin/books/create";
import BooksEdit from "./pages/admin/books/edit";

import AdminGenres from "./pages/admin/genres";
import GenresCreate from "./pages/admin/genres/create";
import GenresEdit from "./pages/admin/genres/edit";

import AdminAuthors from "./pages/admin/authors";
import AuthorsCreate from "./pages/admin/authors/create";
import AuthorsEdit from "./pages/admin/authors/edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />

            <Route path="books">
              <Route index element={<Books />} />
              <Route path="show/:id" element={<ShowBook />} />
            </Route>
          </Route>

          {/* Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BooksCreate />} />
              <Route path="edit/:id" element={<BooksEdit />} />
            </Route>

            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<GenresCreate />} />
              <Route path="edit/:id" element={<GenresEdit />} />
            </Route>

            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<AuthorsCreate />} />
              <Route path="edit/:id" element={<AuthorsEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
