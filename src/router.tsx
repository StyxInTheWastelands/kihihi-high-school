import { createBrowserRouter } from "react-router";
    import { Layout } from "./components/Layout";
    import { Home } from "./pages/Home";
    import { About } from "./pages/About";
    import { Academics } from "./pages/Academics";
    import { Contact } from "./pages/Contact";
    import { Admissions } from "./pages/Admissions";

    export const router = createBrowserRouter([
      {
        path: "/",
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: "about", Component: About },
          { path: "academics", Component: Academics },
          { path: "contact", Component: Contact },
          { path: "admissions", Component: Admissions },
        ],
      },
    ]);