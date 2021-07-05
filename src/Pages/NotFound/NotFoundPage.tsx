import React from "react";
import { Page, Stack, EmptyState } from "@shopify/polaris";

const NotFoundPage = () => {
    return (
        <Page>
			<Stack alignment="center" vertical distribution="center">
				<EmptyState
					heading="Oops..."
					// action={{
					// 	content: 'Search products',
					// 	onAction: () => history.replace('/products'),
					// }}
					image=""
					largeImage=""
				>
					<p>Sorry, that page does not exist</p>
				</EmptyState>
			</Stack>
		</Page>
    )
}

export default NotFoundPage;