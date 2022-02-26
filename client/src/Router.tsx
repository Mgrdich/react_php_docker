import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BrowsePage from "./Pages/BrowsePage";
import DataViewPage from "./Pages/DataViewPage";
import DataViewParsedPage from "./Pages/DataViewParsedPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BrowsePage/>}/>
                <Route path="/page1" element={<DataViewPage/>}/>
                <Route path="/page2" element={<DataViewParsedPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;