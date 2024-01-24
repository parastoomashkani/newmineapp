import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCloudUpload } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2'
interface ApplyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }
  const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onRequestClose }) => {
  const [file, setFile] = useState(null);
  const [about, setAbout] = useState('');

  const onDrop = (acceptedFiles:any) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: '.pdf' });

  const handleAboutChange = (e:any ) => {
    setAbout(e.target.value);
  };

  const handleSubmit = async () => {
    // Create a FormData object to send the file and text data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('about', about);
  
    try {
      // Make a POST request to the server endpoint for sending emails using Axios
      const response = await axios.post(process.env.BaseUrl +'/', formData, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: localStorage.getItem('token'),
        },
      });
  
      if (response.status === 200) {
        Swal.fire({
            title: "ثبت شد ",
            text: " فرم شما ثبت شد ",
            icon: "success"
          });
      } else {
        Swal.fire({
            icon: "error",
            title: "خطا",
            text: " ، وارد حساب کاربری خود شودید ثبت نشد !",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
      }
    } catch (error) {
           Swal.fire({
            icon: "error",
            title: "خطا",
            text: " ، مشکل لطفا دوباره تلاش کنید ",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  
    onRequestClose();
  };
  
  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Apply</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>رزمه خود را قرار بدید (PDF):</Form.Label>
            <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
              <input {...getInputProps()} />
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>{isDragActive ? 'Drop the file here' : <MdOutlineCloudUpload size={34} />}</button>
    
            </div>
          </Form.Group>
          <Form.Group controlId="formAbout">
            <Form.Label>درباره خودتان:</Form.Label>
            <Form.Control as="textarea" value={about} onChange={handleAboutChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
        <IoMdClose />
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          فرستادن 
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyModal;
