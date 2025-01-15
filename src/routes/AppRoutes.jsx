import { Navigate } from "react-router";
import { Route, Routes } from "react-router";
import { Main } from "../Main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main/>}/>
      </Route>
    </Routes>
  );
};
