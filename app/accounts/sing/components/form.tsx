
import React from 'react';
import 'devextreme-react/text-area';
import Form, {
  SimpleItem, GroupItem, TabbedItem, TabPanelOptions, Tab,
} from 'devextreme-react/form';
import service from './data';
import "../../../../node_modules/devextreme/dist/css/dx.greenmist.css"
const employee = service.getEmployee();

export default function CreateAcount() {
  return (
    <div className='container py-8   '>
       <div className='p-5 sm:p-8'>
    <React.Fragment>
      <div className="long-title"><h3>Personal details</h3></div>
      <div className="form-container">
        <Form
          colCount={2}
          id="form"
          formData={employee}>
          <GroupItem caption="System Information">
            <SimpleItem dataField="ID" />
            <GroupItem caption="Main Information">
              <SimpleItem dataField="FirstName" />
              <SimpleItem dataField="LastName" />
              <SimpleItem dataField="HireDate" />
              <SimpleItem dataField="Position" />
              <SimpleItem dataField="OfficeNo" />
            </GroupItem>
          </GroupItem>
          <GroupItem caption="Personal Data">
            <SimpleItem dataField="BirthDate" />
            <GroupItem caption='Home Address'>
              <SimpleItem dataField="Address" />
              <SimpleItem dataField="City" />
              <SimpleItem dataField="State" />
              <SimpleItem dataField="Zipcode" />
            </GroupItem>
          </GroupItem>
          <GroupItem caption="Contact Information">
            <TabbedItem>
              <TabPanelOptions deferRendering={false} />
              <Tab title="Phone">
                <SimpleItem dataField="Phone" />
              </Tab>
              <Tab title="Skype">
                <SimpleItem dataField="Skype" />
              </Tab>
              <Tab title="Email">
                <SimpleItem dataField="Email" />
              </Tab>
            </TabbedItem>
          </GroupItem>
        </Form>
      </div>
    </React.Fragment>
    </div>
    </div>
  );
}
