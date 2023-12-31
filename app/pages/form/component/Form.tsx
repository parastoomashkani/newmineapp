"use client"


import React, { useCallback, useState } from 'react';
import FileUploader, { FileUploaderTypes } from 'devextreme-react/file-uploader';
import 'devextreme-react/text-area';
import Form, { SimpleItem, GroupItem, TabbedItem, Tab, Item } from 'devextreme-react/form';
import RadioGroup from 'devextreme-react/radio-group';
import { Button } from 'devextreme-react/button';

import service, { priorities } from './data';
import '../../../../node_modules/devextreme/dist/css/dx.carmine.css';

import dynamic from 'next/dynamic';

const employee = service.getEmployee();

const countryEditorOptions = {
  dataSource: service.getCountries(),
};

function getValueInKb(value: number) {
  return `${(value / 1024).toFixed(0)}kb`;
}

const submitButtonOptions = {
  text: 'Submit the Form',
  useSubmitBehavior: true,
};

const DynamicMap = dynamic(() => import('./map/map'), {
  ssr: false,
});
const countryEditorOptions = {
  dataSource: service.getCountries(),
};

function getValueInKb(value: number) {
  return `${(value / 1024).toFixed(0)}kb`;
}
const submitButtonOptions = {
  text: 'Formular abschicken',
  useSubmitBehavior: true,
};
const DynamicMap = dynamic(() => import('./map/map'), {
  ssr: false,
});


const AdvertisingForm = () => {

  const validateForm = useCallback((e: FormTypes.ContentReadyEvent) => {
    e.component.validate();
  }, []);



  const [chunks, setChunks] = useState<Array<{ segmentSize: number; bytesLoaded: number; bytesTotal: number }>>([]);

  const onUploadProgress = useCallback((e: FileUploaderTypes.ProgressEvent) => {
    const chunk = {
      segmentSize: e.segmentSize,
      bytesLoaded: e.bytesLoaded,
      bytesTotal: e.bytesTotal,
    };
    setChunks([...chunks, chunk]);
  }, [chunks, setChunks]);

  const onUploadStarted = useCallback(() => {
    setChunks([]);
  }, [setChunks]);

  const doneClick = useCallback((e: any) => {
    setTimeout(() => {
      alert('Submitted');
    }, 1000);

    e.preventDefault();
  }, []);

  const [formData, setFormData] = useState({});

 

 


  const positionEditorOptions = { items: service.getPositions(), searchEnabled: true, value: '' };
  const notesEditorOptions = { height: 90, maxLength: 200 };

  const handleSubmit = useCallback((e: any) => {
    console.log('Formulardaten:', formData); // Log the form data
    setTimeout(() => {
      alert('Abgeschickt');
    }, 1000);

    e.preventDefault();
  }, [formData]);

  // ... (existing code)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-3">
      <React.Fragment>
        <br />
        <br />
        <div className="form-container">
          <form action="/employee-page" onSubmit={handleSubmit}>
          <Form colCount={2} id="form" formData={formData}>
          {/* ... (existing code) */}
          <GroupItem>
            <GroupItem caption="Wichtige Informationen">
            <SimpleItem
      dataField="Name"
      label={{ text: 'Name' }}
      editorOptions={{onChange: handleInputChange}}
    />
              <SimpleItem dataField="Familie" label={{ text: 'Familie' }} onChange={handleInputChange} />
              <Item
                dataField="Gruppenzuordnung"
                editorType="dxSelectBox"
                editorOptions={{ ...positionEditorOptions, placeholder: 'Gruppenzuordnung' }}
                label={{ text: 'Gruppenzuordnung' }}
                onChange={handleInputChange}
              ></Item>
              <SimpleItem dataField="Preis" label={{ text: 'Preis' }} onChange={handleInputChange} />
            </GroupItem>
          </GroupItem>
          {/* ... (existing code) */}
        </Form>
            <div className='bg-slate-200 mt-8 justify-items-center	 rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-4'>
              <DynamicMap />
            </div>
            <FileUploader
              name="file"
              accept="image/*"
              uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
              chunkSize={200000}
              onUploadStarted={onUploadStarted}
              onProgress={onUploadProgress}
            />
            <span className="note">Allowed file extensions: <span>.jpg, .jpeg, .gif, .png</span>.</span>
            <span className="note">Maximum file size: <span>4 MB.</span></span>
            <div className="chunk-panel">
              {chunks.map((c, i) => (
                <div key={i} className='bg-red-50'>
                  <span>Chunk size:</span>
                  <span className="segment-size dx-theme-accent-as-text-color">{getValueInKb(c.segmentSize)}</span>
                  <span>, Uploaded:</span>
                  <span className="loaded-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesLoaded)}</span>
                  <span>/</span>
                  <span className="total-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesTotal)}</span>
                </div>
              ))}
            </div>

            <Button icon="check" type="success" text="Done" onClick={doneClick} />
          </form>
        </div>
      </React.Fragment>
    </div>
  );
};

export default AdvertisingForm;