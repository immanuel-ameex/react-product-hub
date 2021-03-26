import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProductFilters from './components/ProductFilters';
import ProductList from './components/ProductList';
import './App.css';


class App extends React.Component {
  state = {
    filters: {
      categories: [],
      priceRange: [],
      stockStatus: false,
    }
  }

  onCategoryChange = (category, checked) => {
    if (checked) {
      this.setState(prevState => ({
          filters: {
            ...prevState.filters,
            categories: [
              ...prevState.filters.categories,
              category
            ]
          }
        }
      ));
    } else {
      this.setState(prevState => {
        const categories = [...prevState.filters.categories];
        categories.splice(categories.indexOf(category), 1);
        return {
          filters: {
            ...prevState.filters,
            categories
          }
        }
      });
    }
  }

  onPriceChange = priceRange => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        priceRange
      }
    }));
  }

  onStockStatusChange = stockStatus => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        stockStatus
      }
    }));
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Product Hub</h1>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ProductFilters
                {...{
                  onCategoryChange: this.onCategoryChange, 
                  onPriceChange: this.onPriceChange,
                  onStockStatusChange: this.onStockStatusChange,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <ProductList {...{ filters: this.state.filters}} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
