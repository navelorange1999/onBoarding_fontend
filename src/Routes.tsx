import React, {Suspense, lazy} from "react";
import { Switch, Route } from "react-router-dom";

import LoadingPage from "./pages/Loading";
import NotFoundPage from "./pages/NotFound";

const LoginPage  = lazy(() => import("@/pages/Login"));

const Routes = () => {
    return (
        <Suspense fallback={<LoadingPage/>}>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </Suspense>
    )
}

export default Routes;
