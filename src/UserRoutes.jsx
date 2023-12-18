import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import TableBells from "./components/TableBells/TableBells";

const Home = lazy(() => import("./pages/Home/Home"));
const Bells = lazy(() => import("./pages/Bells/Bells"));
const Courses = lazy(() => import("./pages/Сourses/Courses"));
const Schedule = lazy(() => import("./pages/Schedule/Schedule"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Books = lazy(() => import("./pages/Books/Books"));
const About = lazy(() => import("./pages/About/About"));
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bells" element={<Bells />}>
        <Route path="tablebells/:id" element={<TableBells />} />
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default UserRoutes;
