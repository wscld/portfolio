import React, { useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../Components/Header';
import { useParams } from 'react-router-dom';
import FullItem from '../../Components/FullItem';

const Product = ({ products, loadProducts }: { products: any, loadProducts: any }) => {
    const [product, setProduct] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        if (products.length == 0) {
            var data = require('../../data.json');
            loadProducts(data.items);
        }
    }, [])

    useEffect(() => {
        setProduct(products[id]);
        console.log(products);
    },[products]);

    return (
        <>
            <Header></Header>
            <div className="container">
                {product && product.images ? <FullItem link={product.link} stack={product.stack} images={product.images} title={product.title} description={product.description} /> : null}
            </div>
        </>
    )
}

export default Product;