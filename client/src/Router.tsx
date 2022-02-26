import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BrowsePage from "./Pages/BrowsePage";
import DataViewPage from "./Pages/DataViewPage";
import DataViewParsedPage from "./Pages/DataViewParsedPage";
import MainPage from "./Pages/MainPage";
import NavigationBar from "./Components/UI/NavigationBar";
import {T_NavigationPages} from "./types/types";
import styled from "styled-components";


const PageContainer = styled.div`
  padding: 10px;
`;

enum App_Routes {
    mainPage = '/',
    browsePage = '/browse-page',
    dataPage1 = '/data-page1',
    dataPage2 = '/data-page2'
}

const NavigationPages: T_NavigationPages = [
    {
        text: 'Main Page',
        url: App_Routes.mainPage
    },
    {
        text: 'Browse Page',
        url: App_Routes.browsePage
    },
    {
        text: 'Data Page1',
        url: App_Routes.dataPage1
    },
    {
        text: 'Data Page 2',
        url: App_Routes.dataPage2
    },
];

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavigationBar routes={NavigationPages}/>
                <PageContainer>
                    <Routes>
                        <Route path={App_Routes.mainPage} element={<MainPage/>}/>
                        <Route path={App_Routes.browsePage} element={<BrowsePage/>}/>
                        <Route path={App_Routes.dataPage1} element={<DataViewPage/>}/>
                        <Route path={App_Routes.dataPage2} element={<DataViewParsedPage/>}/>
                    </Routes>
                </PageContainer>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;