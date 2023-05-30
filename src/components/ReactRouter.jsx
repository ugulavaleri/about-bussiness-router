import { Routes, Route, Link } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ComPanyInfoPage from "../pages/CompanyInfoPage";
import FormContactPage from "../pages/FormContactPage";
import "./style.css";

const ReactRouter = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/CompanyInfo"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/FormContactPage"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/CompanyInfo" element={<ComPanyInfoPage />} />
                <Route path="/FormContactPage" element={<FormContactPage />} />
            </Routes>
        </>
    );
};

export default ReactRouter;
