import { MainRoutes } from "./routes/MainRoutes";
import GlobalStyles from "./styles/globalStyles";
import ThemesProvider from "./styles/ThemesProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
    return (
        <>
            <ThemesProvider>
                <GlobalStyles />
                <MainRoutes />
            </ThemesProvider>
            <ToastContainer />
        </>
    );
}

export default App;
