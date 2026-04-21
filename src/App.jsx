import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sing-in.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar></NavigationBar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="sign-in" element={<SignIn></SignIn>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
