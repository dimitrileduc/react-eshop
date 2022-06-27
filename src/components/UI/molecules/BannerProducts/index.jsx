import React from "react";
import ProductShopItem from "../ProductShopItem";
import {Link} from "react-router-dom";

import {Container, RightBox, ProductsContainer, Text} from "./styles.js";

function BannerProducts({productsItems}) {
    return (
        <Container>
            <ProductsContainer>
                {Object.entries(productsItems).map(
                    ([
                        slug,
                        {
                            id,
                            title,
                            category,
                            label,
                            description,
                            stock,
                            imageName,
                            price,
                        },
                    ]) => (
                        <Link
                            key={slug}
                            to={`/products/${slug}`}
                            style={{textDecoration: "none"}}>
                            <ProductShopItem
                                props={{
                                    slug,
                                    title,
                                    category,
                                    label,
                                    description,
                                    stock,
                                    imageName,
                                    price,
                                    id,
                                }}
                            />
                        </Link>
                    ),
                )}
            </ProductsContainer>
            <RightBox>
                <Text>New arrival</Text>
            </RightBox>
        </Container>
    );
}

export default BannerProducts;
