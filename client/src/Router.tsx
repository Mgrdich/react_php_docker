import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BrowsePage from "./Pages/BrowsePage";
import DataViewPage from "./Pages/DataViewPage";
import DataViewParsedPage from "./Pages/DataViewParsedPage";
import NavigationBar from "./Components/UI/NavigationBar";
import {T_NavigationPages} from "./types/types";
import styled from "styled-components";


const PageContainer = styled.div`
  padding: 10px;
`;

export enum App_Routes {
    mainPage = '/',
    dataPage1 = '/data-page1',
    dataPage2 = '/data-page2'
}

const NavigationPages: T_NavigationPages = [
    {
        text: 'Browse Page',
        url: App_Routes.mainPage
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
                        <Route path={App_Routes.mainPage} element={<BrowsePage/>}/>
                        <Route path={App_Routes.dataPage1} element={<DataViewPage/>}/>
                        <Route path={App_Routes.dataPage2} element={<DataViewParsedPage/>}/>
                    </Routes>
                </PageContainer>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;