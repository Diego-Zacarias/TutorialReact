import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Grid from "components/atoms/Grid";
import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import ProductTypes from "types/ProductTypes";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);
  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Button
                  color="primary"
                  variants="link"
                  as={Link}
                  to={`/servicos/${product.slang}`}
                >
                  Saiba mais
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button variants="outlined" onClick={() => setShowAll(true)}>
            Lista Completa
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.defaultProp = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductTypes),
};

export default ProductGrid;
