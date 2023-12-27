"use client"
import React, { useCallback, useState } from 'react';
import FilterBuilder, { FilterBuilderTypes } from 'devextreme-react/filter-builder';
import Button from 'devextreme-react/button';
import DataGrid from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

import "../../../../node_modules/devextreme/dist/css/dx.carmine.css"

import { filter, fields } from './data';

const dataSource = new DataSource({
  store: new ODataStore({
    version: 2,
    fieldTypes: {
      Product_Cost: 'Decimal',
      Product_Sale_Price: 'Decimal',
      Product_Retail_Price: 'Decimal',
    },
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
  }),
  select: [
    'Product_ID',
    'Product_Name',
    'Product_Cost',
    'Product_Sale_Price',
    'Product_Retail_Price',
    'Product_Current_Inventory',
  ],
});

const Filter= () => {
  const [value, setValue] = useState(filter);
  const [gridFilterValue, setGridFilterValue] = useState(filter);

  const onValueChanged = useCallback((e: FilterBuilderTypes.ValueChangedEvent) => {
    setValue(e.value);
  }, [setValue]);

  const buttonClick = useCallback(() => {
    setGridFilterValue(value);
  }, [value, setGridFilterValue]);

  return (
    <div className='container py-8 '>
      <div className="filter-container  ">
        <FilterBuilder fields={fields} value={value} onValueChanged={onValueChanged} />
        <br />
        <Button text="Apply Filter" type="default" onClick={buttonClick} />
        <br />
        <div className="dx-clearfix"></div>
      </div>
      <br />
      <DataGrid
        dataSource={dataSource}
        filterValue={gridFilterValue}
        showBorders={true}
        columns={fields}
        height={300}
      />
    </div>
  );
};

export default Filter;
