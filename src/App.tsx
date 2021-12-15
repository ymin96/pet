import React from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/common/Footer";
import CustomHeader from "./components/common/Header/CustomHeader";
import MainPage from "./components/page/MainPage";
import NavListPage from "./components/page/NavListPage";
import PharmacyListPage from "./components/page/PharmacyListPage";
import ShelterListPage from "./components/page/ShelterListPage";
import StoreListPage from "./components/page/StoreListPage";
import VeterinaryListPage from "./components/page/VeterinaryListPage";

function App() {
    return (
        <>
            <CustomHeader />
            <Switch>
                <Route path="/store/:page" component={StoreListPage} />
                <Route path="/pharmacy/:page" component={PharmacyListPage} />
                <Route path="/veterinary/:page" component={VeterinaryListPage} />
                <Route path="/shelter/:page" component={ShelterListPage} />
                <Route path="/nav" component={NavListPage} />
                <Route path="/" component={MainPage} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
