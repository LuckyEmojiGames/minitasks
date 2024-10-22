import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/index";
import { ROUTES } from "./routes";
import { Loading } from "../../pages/Loading/index";
import Tasks from "../../pages/TasksPage/UI/Tasks.tsx";


const AppRouter = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOADING} element={<Loading />} />
        <Route path={ROUTES.TASKS} element={<Tasks />} />
    </Routes>
  );
};

export default AppRouter