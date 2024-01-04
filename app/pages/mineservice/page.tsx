"use client"

import React from 'react';
import {
  TreeList, HeaderFilter, Search, Selection, Column,
} from 'devextreme-react/tree-list';
import { employees } from './data';
import "../../../node_modules/devextreme/dist/css/dx.carmine.css"

const expandedRowKeys = [1];

const searchFields = ['City', 'State'];
const searchEditorOptions = { placeholder: 'Search city or state' };

const page = () => {
  return (
    <TreeList
    id="employees"
    dataSource={employees}
    columnAutoWidth={true}
    showRowLines={true}
    showBorders={true}
    defaultExpandedRowKeys={expandedRowKeys}
    keyExpr="ID"
    parentIdExpr="Head_ID"
  >
    <HeaderFilter visible={true} />
    <Selection mode="single" />
    <Column dataField="Full_Name" caption="نام و نام خانوادگی"  />
    <Column dataField="Title" caption="موقعیت">
      <HeaderFilter allowSelectAll={false}>
        <Search
          enabled={true}
        />
      </HeaderFilter>
    </Column>
    <Column dataField="City" caption="شهر ">
      <HeaderFilter>
        <Search
          enabled={true}
          searchExpr={searchFields}
          editorOptions={searchEditorOptions} />
      </HeaderFilter>
    </Column>
    <Column dataField="State" caption="استان" />
    <Column dataField="Mobile_Phone" />
    <Column dataField="Hire_Date" dataType="date"  caption="تاریخ"/>
  </TreeList>
  )
}

export default page