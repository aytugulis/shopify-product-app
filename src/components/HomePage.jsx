import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import { ProductsCard } from "./ProductsCard";

export function HomePage() {
  return (
    <Page title="Page title">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Card Title" sectioned>
            <p>hello world</p>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Card Title" sectioned>
            <p>hello world</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
