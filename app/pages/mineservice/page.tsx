"use client"

import React, { useState, useEffect } from 'react';
import {
  TreeList, HeaderFilter, Search, Selection, Column,
} from 'devextreme-react/tree-list';
import "../../../node_modules/devextreme/dist/css/dx.carmine.css"
import axios from 'axios';
;

const page = () => {

  const [employees, setEmployees] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([1]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( process.env.BaseUrl +'/showJobs?page=');
        console.log ("ddd",response.data.data);
        setEmployees(response.data.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const searchFields = ['City', 'State'];
  const searchEditorOptions = { placeholder: 'Search city or state' };
  return (
    <div className='p-4'>
      <TreeList
        id="employees"
        dataSource={employees}
        columnAutoWidth={true}
        showRowLines={true}
        showBorders={true}
        defaultExpandedRowKeys={expandedRowKeys}
        // keyExpr="ID"
        // parentIdExpr="Head_ID"
      >
        <HeaderFilter visible={true} />
        <Selection mode="single" />
        <Column dataField="user" caption="نام و نام خانوادگی" />
        <Column dataField="name" caption="  نوع خدمت  ">
          <HeaderFilter allowSelectAll={false}>
            <Search
              enabled={true}
            />
          </HeaderFilter>
        </Column>
        <Column dataField="address" caption="  آدرس  ">
          <HeaderFilter>
            <Search
              enabled={true}
              searchExpr={searchFields}
              editorOptions={searchEditorOptions}
            />
          </HeaderFilter>
        </Column>
        <Column dataField="State" caption="استان" />
        <Column dataField="tel" />
        <Column dataField="updated_at" dataType="date" caption="تاریخ" />
      </TreeList>
  </div>
  )
}

export default page;