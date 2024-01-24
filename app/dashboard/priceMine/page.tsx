"use client"
import React, { useEffect, useState } from 'react';
import DataGrid, {
  Column,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import axios from 'axios';
import "../../../node_modules/devextreme/dist/css/dx.light.css";
import "./style.css";
import Loading from "../../Louding";

const Page = () => {
  const [dataSource, setDataSource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.metalpriceapi.com/v1/latest', {
      params: {
        api_key: '77227738c32d90d07a9765478c99927b',
        base: 'USD',
        currencies: 'EUR,XAU,XAG',
      },
    })
    .then(response => {
      console.log('Metal Prices API Response:', response.data);

      // Extract relevant data from the API response
      const metalPrices = response.data;

      // Format the data for the DataGrid
      const formattedData = metalPrices.map(price => ({
        lastUpdate: new Date(price.lastUpdate),  // Assuming lastUpdate is a date string
        symbol: price.symbol,
        price: price.price,
        change: price.change,
        dayOpen: price.dayOpen,
        dayMin: price.dayMin,
        dayMax: price.dayMax,
      }));

      // Set the formatted data to the state
      setDataSource(formattedData);

      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching metal prices:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='p-8'>
      <DataGrid
        id="gridContainer"
        dataSource={dataSource}
        showBorders={true}
        repaintChangesOnly={true}
        highlightChanges={true}
      >
        <Column dataField="lastUpdate" dataType="date" width={115} format="longTime" />
        <Column dataField="symbol" />
        <Column dataField="price" dataType="number" format="#0.####" />
        <Column dataField="change" dataType="number" width={140} format="#0.####" />
        <Column dataField="dayOpen" dataType="number" format="#0.####" />
        <Column dataField="dayMin" dataType="number" format="#0.####" />
        <Column dataField="dayMax" dataType="number" format="#0.####" />
      </DataGrid>
    </div>
  );
};

export default Page;
