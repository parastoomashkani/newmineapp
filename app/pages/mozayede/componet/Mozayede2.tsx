"use client"
import{useState,useEffect} from 'react';
import {
  TreeList, FilterRow, Selection, Column,
} from 'devextreme-react/tree-list';
import "../../../../node_modules/devextreme/dist/css/dx.carmine.css"
import axios from 'axios';


const Mozayede = () => {
    const [treeData, setTreeData] = useState([]);
  const expandedRowKeys = [1]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('your-api-endpoint'); 
        setTreeData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

    return(
  <TreeList
    id="employees"
    dataSource={treeData}
    columnAutoWidth={true}
    showRowLines={true}
    showBorders={true}
    defaultExpandedRowKeys={expandedRowKeys}
    keyExpr="ID"
    parentIdExpr="Head_ID"
  >
    <FilterRow visible={true} />
    <Selection mode="single"  />
    <Column dataField="Full_Name" />
    <Column dataField="Title" caption="Position" />
    <Column dataField="City" />
    <Column dataField="State" />
    <Column dataField="Mobile_Phone" />
    <Column dataField="Hire_Date" dataType="date" />
  </TreeList>
    )
}


export default Mozayede;