import React from 'react';
import {Grid} from "@material-ui/core"
import Product from "../Product/Product";
const products =[
  {id:1, name:"Shoes", description:"Running shoes.", price: '$5', image:"https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?s=2048x2048"},
  {id:2, name:"Macbook", description:"Apple macbook.", price: '$1500', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'}
]
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
          <Grid item key ={product.id} xs={12} sm={6} lg={3}>
          <Product product={product}/>
          </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Products;