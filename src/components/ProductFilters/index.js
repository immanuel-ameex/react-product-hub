import React, { useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Slider } from "@material-ui/core";

const CategoryFilter = ({ onCategoryChange }) => {
  const availableCategories = [
    'Bags',
    'Footwear',
    'Apparel',
    'Accessories',
  ];

  return (
    <FormControl component="fieldset" margin="dense" className="form-control" fullWidth>
      <FormLabel component="legend">Choose Category</FormLabel>
      {
        availableCategories.map(category => 
          <FormControlLabel
            key={category}
            control={<Checkbox value={category} name={category} onChange={e => onCategoryChange(e.target.value, e.target.checked)} />}
            label={category}
          />
        )
      }
    </FormControl>
  )
}

const PriceFilter = ({ onPriceChange }) => {
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPriceChange(newValue);
  };

  const valuetext = (value) => {
    return `£${value}`;
  }

  return (
    <FormControl component="fieldset" margin="dense" className="form-control" fullWidth>
      <FormLabel component="legend">Price Range</FormLabel>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={150}
      />
    </FormControl>
  )
}

const StockFilter = ({ onStockStatusChange }) => {
  return (
    <FormControl component="fieldset" margin="dense" className="form-control" fullWidth>
      <FormLabel component="legend">Availability</FormLabel>
        <FormControlLabel
          control={<Checkbox name="Exclude Out of Stock" onChange={e => onStockStatusChange(e.target.checked)} />}
          label="Exclude Out of Stock"
        />
    </FormControl>
  )
}

const ProductFilters = ({ onCategoryChange, onPriceChange, onStockStatusChange }) => {
  return (
    <>
      <CategoryFilter {...{onCategoryChange}} />
      <PriceFilter {...{onPriceChange}} />
      <StockFilter {...{onStockStatusChange}} />
    </>
  )
}

export default ProductFilters;