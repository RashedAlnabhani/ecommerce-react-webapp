import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar></NavigationBar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route
            path="authentication"
            element={<Authentication></Authentication>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
