"use client"
import{useState,useEffect} from 'react';
import {
  TreeList, FilterRow, Selection, Column,
} from 'devextreme-react/tree-list';
import "../../../../../node_modules/devextreme/dist/css/dx.carmine.css"
import axios from 'axios';
import Loading from '@/app/Louding';

const Mozayede = () => {
    const [treeData, setTreeData] = useState([]);
  const expandedRowKeys = [1]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.BaseUrl + '/moz?'); 
        setTreeData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return  <Loading />
      }
    return(
      <div className='p-8'>
  <TreeList
    id="employees"
    dataSource={treeData}
    columnAutoWidth={true}
    showRowLines={true}
    showBorders={true}
    defaultExpandedRowKeys={expandedRowKeys}
    keyExpr="id"
    parentIdExpr="Head_ID"
  >
    <FilterRow visible={true} />
    <Selection mode="single"  />
    <Column dataField="title"  caption="عنوان"/>
    <Column dataField="ore" caption="ماده معدنی " />
    <Column dataField="city"  caption="شهر "/>
    <Column dataField="State" caption="استان "/>
    <Column dataField="body" caption="توضیحات "/>
    {/* <Column dataField="Hire_Date" dataType="date" /> */}
  </TreeList>
  </div>
    )
}


export default Mozayede;