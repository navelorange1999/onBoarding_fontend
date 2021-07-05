import React from "react";
import {
    Layout,
    SkeletonPage,
    Card,
    TextContainer,
    SkeletonThumbnail,
    SkeletonDisplayText,
    SkeletonBodyText,
    Navigation,
} from "@shopify/polaris";


const LoadingPage = () => {
    return (
        <SkeletonPage fullWidth  primaryAction secondaryActions={2}>
            <Layout>
                <Layout.Section>
                    <Layout>
                        <Navigation location="/">
                            <Card sectioned>
                                <TextContainer>
                                    <SkeletonDisplayText />
                                    <SkeletonBodyText lines={15} />
                                </TextContainer>
                            </Card>
                        </Navigation>
                        <Layout.Section>
                            <Card sectioned>
                                <TextContainer>
                                    <SkeletonDisplayText size="extraLarge"/>
                                    <SkeletonBodyText lines={5}/>
                                    <SkeletonThumbnail size="large"/>
                                    <SkeletonBodyText lines={5}/>
                                </TextContainer>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </Layout.Section>
            </Layout>

        </SkeletonPage>
    )
}

export default LoadingPage;