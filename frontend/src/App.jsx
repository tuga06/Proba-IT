import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import MP1 from "./MP_1";
/*import MP2 from "./MP_2";*/
import ADP from './ADP.jsx';
import ForgotPassPage from './forgotPass';
import LogPage from './LogPage';
import ProfilePage from './profilePage.jsx';
import RegisterPage from './registerPage';
import RetetaPageL from './retetaPageL';
import RetetaPageNL from './retetaPageNL';


function App() {

  return(
    <>
      <Router>
        <Routes>
          <Route
              exact
              path="/"
              element={<MP1/>}
          />
          <Route
              path="/add-recipe"
              element={<ADP />}
          />
          <Route
              path="/login"
              element={<RegisterPage />}
          />
          <Route
              path="/register"
              element={<LogPage />}
          />
          <Route
              path="/forgot-pass"
              element={<ForgotPassPage />}
          />
          <Route
              path="/retete-NL"
              element={<RetetaPageNL />}
          />
          <Route
              path="/profile"
              element={<ProfilePage />}
          />
          <Route
              path="/retete-L"
              element={<RetetaPageL />}
          />
        </Routes>
      </Router>
    </>
  )

}

export default App
