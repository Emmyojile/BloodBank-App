import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedPages from "./components/ProtectedPages";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Profile from "./pages/Profile";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div>
      {loading && <Loading/>}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPages>
                <Home />
              </ProtectedPages>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedPages>
                <Profile/>
              </ProtectedPages>
            }
          />
          
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
