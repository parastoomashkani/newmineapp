"use client"
import React, { useCallback, useState } from 'react';
import FileUploader, { FileUploaderTypes } from 'devextreme-react/file-uploader';
import "../../../../node_modules/devextreme/dist/css/dx.carmine.css"

function getValueInKb(value: number) {
  return `${(value / 1024).toFixed(0)}kb`;
}

const Imgloading = () => {
  
    // const [chunks, setChunks] = useState([]);
    const [chunks, setChunks] = useState<Array<{ segmentSize: number; bytesLoaded: number; bytesTotal: number; }>>([]);

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

  return (
    <div className='p-3'>
    <React.Fragment>
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
        {
          chunks.map((c, i) => (
            <div key={i}  className='bg-red-50'>
              <span>Chunk size:</span>
              <span className="segment-size dx-theme-accent-as-text-color">{getValueInKb(c.segmentSize)}</span>
              <span>, Uploaded:</span>
              <span className="loaded-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesLoaded)}</span>
              <span>/</span>
              <span className="total-size dx-theme-accent-as-text-color">{getValueInKb(c.bytesTotal)}</span>
            </div>
          ))
        }
      </div>
    </React.Fragment></div>
  )
}

export default Imgloading