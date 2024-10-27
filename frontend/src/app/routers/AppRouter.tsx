import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/index";
import { ROUTES } from "./routes";
import { Loading } from "../../pages/Loading/index";
import MiniTasks from "../../pages/TasksPage/UI/MiniTasks/MiniTasks.tsx";
import Other from "../../pages/TasksPage/UI/Other/Other.tsx";


const AppRouter = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOADING} element={<Loading />} />
        <Route path={ROUTES.TASKS} element={<MiniTasks />} />
        <Route path={ROUTES.TASKS_OTHER} element={<Other />} />
    </Routes>
  );
};

export default AppRouter