"use client"

import React, { useCallback,useState } from 'react';
import 'devextreme-react/text-area';
import Form, {
  SimpleItem, GroupItem, TabbedItem, TabPanelOptions, Tab, Item,
} from 'devextreme-react/form';
import RadioGroup from 'devextreme-react/radio-group';

import service ,{ priorities}from './data';
import "../../../../node_modules/devextreme/dist/css/dx.carmine.css"

const employee = service.getEmployee();

const countryEditorOptions = {
    dataSource: service.getCountries(),
  };
  
const AdvertisingForm = () => {
    const validateForm = useCallback((e: FormTypes.ContentReadyEvent) => {
        e.component.validate();
      }, []);
      const positionEditorOptions = { items: service.getPositions(), searchEnabled: true, value: '' };
      const notesEditorOptions = { height: 90, maxLength: 200 };
   
            
  return (
    <div className='p-3'>
     <React.Fragment >
    <br />
    <br />
      <div className="form-container">
        <Form
          colCount={2}
          id="form"
          formData={employee}
          >
          <GroupItem >
            
            <GroupItem caption="اطلاعات مهم " >
              <SimpleItem dataField="نام"  />
              <SimpleItem dataField="فامیل" />
              <Item dataField="گروه بندی " editorType="dxSelectBox" editorOptions={positionEditorOptions} >
        </Item>
              <SimpleItem dataField="قیمت" />
            </GroupItem>
          </GroupItem>
          <GroupItem caption="اطلاعات اگهی ">
          <SimpleItem dataField="عنوان اگهی" />
          <SimpleItem dataField="تاریخ" />
            <GroupItem caption='آدرس '>
            <SimpleItem dataField="استان" editorType="dxSelectBox" editorOptions={countryEditorOptions}>
            </SimpleItem>
              <SimpleItem dataField="ادرس" />
              <SimpleItem dataField="شهر " />
              <SimpleItem dataField="کد پستی " />
            </GroupItem>
          </GroupItem>
          <Item dataField="توضیحات" colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions}>
        </Item>
          <GroupItem caption="   اطلاعات تماس  ">
            <TabbedItem>
              <TabPanelOptions deferRendering={false} />
              <Tab title="   تلفن  ">
                <SimpleItem dataField="Phone" />
              </Tab>
              <Tab title="  شبکه اجتماعی   ">
                <SimpleItem dataField="Skype" />
              </Tab>
              <Tab title=" ایمیل ">
                <SimpleItem dataField="Email" />
              </Tab>
            </TabbedItem>
          </GroupItem>
          <GroupItem caption="درخواست دهنده ">
                <div className="dx-field">
          <div className="dx-field-label">    دخواست دهنده </div>
          <div className="dx-field-value">
            <RadioGroup items={priorities} defaultValue={priorities[0]} layout="horizontal" />
          </div>
        </div>
        </GroupItem>
        </Form>
      </div>
    </React.Fragment>
    </div>

  )
}

export default AdvertisingForm;





