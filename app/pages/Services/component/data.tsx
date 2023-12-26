import { DataType } from 'devextreme/common';

export const filter = [
  ['Product_Current_Inventory', '<>', 0],
  'or',
  [
    ['Product_Name', 'contains', 'HD'],
    'and',
    ['Product_Cost', '<', 200],
  ],
];

export const fields: {
  caption?: string,
  width?: number,
  dataField: string,
  dataType: DataType,
  format?: string,
}[] = [
  {
    caption: 'جنسیت',
    width: 50,
    dataField: "جعفر",
    dataType: 'number',
  }, {
    dataField: 'Product_Name',
    caption: 'نقشه برداری ',
    dataType: 'string',
  }, {
    caption: 'نمونه بردار',
    dataField: 'Product_Cost',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Sale_Price',
    caption: 'حقوق ',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Retail_Price',
    caption: 'پی جویی و اکتشاف',
    dataType: 'number',
    format: 'currency',
  }, {
    dataField: 'Product_Current_Inventory',
    dataType: 'number',
    caption: 'استخراج',
  },
];
