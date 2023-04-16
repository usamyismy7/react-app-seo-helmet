import React from 'react'
import { Helmet } from 'react-helmet-async';

// use this tag to prevent google from crawling
// <meta name="robots" content="noindex" />

function Shop() {
    return (
        <>
            <Helmet>
                <title>Shop</title>
                <meta name="description" content="Shop our latest products now." />
                <link rel="canonical" href="/shop" />
            </Helmet>

            <p>Shop</p>
        </>
    )
}

export default Shop