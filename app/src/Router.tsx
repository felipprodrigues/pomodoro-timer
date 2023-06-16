//! Páginas e rotas - React Router DOM
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      {/* wraps the defaultLayout component all the routes that start with / (home) */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        {/* http://localhost:3000 */}
        {/* http://localhost:3000/history */}
      </Route>

      {/* If we had another page that would share a component within all the routes starting with
      that same route prefix, it could be done like this
      <Route path="/admin" element={<DefaultLayout />}>
        the routes are all chained up
        <Route path="/products" element={<Home />} />
        <Route path="/panel" element={<History />} />
        http://localhost:3000/admin/products
        http://localhost:3000/admin/panel
      </Route> */}
    </Routes>
  );
}
