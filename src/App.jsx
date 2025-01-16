import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/*We want users to be able to see the website if they are authorizes(see views folder) */}
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            //*<- any other path
            //checks if user is authorized first
            <Authorized>
              {/* ApplicationViews is a CHILD component of Authorized  and returns all the views in the jsx  */}
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </div>
  );
};
