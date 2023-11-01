import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Subjects from "./components/Subjects/Subjects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Tabs />,
        errorElement: <ErrorPage />,
    },
    {
        path: "subjects",
        element: <Subjects />,
    },
]);

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
};

export default App;
