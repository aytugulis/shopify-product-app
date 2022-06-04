import { ResourceList, TextStyle, Stack, Thumbnail } from "@shopify/polaris";

export function ProductsList({ data }) {
  return (
    <ResourceList
      showHeader
      resourceName={{ singular: "Product", plural: "Products" }}
      items={data.nodes}
      renderItem={(item) => {
        console.log(item);
        const media = (
          <Thumbnail
            source={
              item.images.edges[0] ? item.images.edges[0].node.originalSrc : ""
            }
            alt={item.images.edges[0] ? item.images.edges[0].node.altText : ""}
          />
        );
        const price = item.variants.edges[0].node.price;
        return (
          <ResourceList.Item
            id={item.id}
            media={media}
            accessibilityLabel={`View details for ${item.title}`}
            onClick={() => {
              store.set("item", item);
            }}
          >
            <Stack>
              <Stack.Item fill>
                <h3>
                  <TextStyle variation="strong">{item.title}</TextStyle>
                </h3>
              </Stack.Item>
              <Stack.Item>
                <p>${price}</p>
              </Stack.Item>
            </Stack>
          </ResourceList.Item>
        );
      }}
    />
  );
}
