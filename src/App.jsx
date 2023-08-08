import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
