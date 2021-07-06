import React from "react";
import {Frame} from "@shopify/polaris";
import { withRouter } from "react-router-dom";

import DefaultPage from "./default";
import { useUserContext } from "@/components/UserAccountProvider/utils";

const HomePage = (props) => {
    const {_id} = useUserContext();
    if(!_id) {
        props.history.push("/login")
    }
    return (
        <Frame>
            <DefaultPage />
        </Frame>
    )
}

export default withRouter(HomePage);