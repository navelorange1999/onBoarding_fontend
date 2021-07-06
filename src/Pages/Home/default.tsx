import { useQuery } from "@apollo/client";
import { Page, Card, DataTable, Heading } from "@shopify/polaris";
import React from "react";
import _ from "loadsh";

import { GETALLADMIN } from "@/graphql/schemas/user/queries";
import LoadingPage from "@/pages/Loading";
import NotFoundPage from "@/pages/NotFound";

const DefaultHomePage = () => {
    const {loading, error, data} = useQuery(GETALLADMIN);
    if(loading) return <LoadingPage />
    if(error) return <NotFoundPage />
    const rows = [[]];
    data.getAllAdmin.forEach(val=>{
        rows.push(_.values(val))
    })
    return (
        <Page fullWidth>
            <Card>
                <DataTable 
                    columnContentTypes={['text', 'text']}
                    rows={rows}
                    headings={[
                        <Heading>_id</Heading>,
                        <Heading>username</Heading>
                    ]}/>
            </Card>
        </Page>
    )
}

export default DefaultHomePage;