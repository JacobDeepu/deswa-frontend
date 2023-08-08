import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Employee from "./pages/Employee";
import Employer from "./pages/Employer";
import Selection from "./pages/Selection";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/employee" element={<Employee />} />
                <Route exact path="/employer" element={<Employer />} />
                <Route exact path="/select" element={<Selection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
