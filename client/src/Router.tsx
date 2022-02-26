import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BrowsePage from "./Pages/BrowsePage";
import DataViewPage from "./Pages/DataViewPage";
import DataViewParsedPage from "./Pages/DataViewParsedPage";
import MainPage from "./Pages/MainPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/browse-page" element={<BrowsePage/>}/>
                <Route path="/data-page1" element={<DataViewPage/>}/>
                <Route path="/data-page2" element={<DataViewParsedPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;