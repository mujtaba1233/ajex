import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

interface Attachment {
  name: string;
  contentType: String,
  data: string; // Base64 string representing the attachment
}

interface FormFileuploadProps {
  setselectedFiles: React.Dispatch<React.SetStateAction<Attachment[]>>;
  selectedFiles: Attachment[];
}

const FormFileupload: React.FC<FormFileuploadProps> = ({ setselectedFiles, selectedFiles }) => {

  async function handleAcceptedFiles(files: File[]) {
    const updatedFiles: Attachment[] = await Promise.all(files.map(async (file) => {
      const base64 = await readFileAsBase64(file);
      return {
        name: file.name,
        data: base64,
        contentType: file.type
      };
    }));
    setselectedFiles(prevFiles => [...prevFiles, ...updatedFiles]);
  }

  // Function to read file as base64
  function readFileAsBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result as string;
        const base64Data = base64.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = error => reject(error);
    });
  }

  // Function to delete attachment
  const deleteAttachment = (index: number) => {
    setselectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Dropzone
                onDrop={(acceptedFiles: File[]) => {
                  handleAcceptedFiles(acceptedFiles);
                }}
              >
                {({ getRootProps }: any) => (
                  <div className="dropzone dz-clickable text-center" {...getRootProps()}>
                    <div className="dz-message needsclick">
                      <div className="mb-3">
                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                      </div>
                      <h4>Upload Attachments</h4>
                    </div>
                  </div>
                )}
              </Dropzone>
              <div className="list-unstyled mb-0" id="file-previews">
                {selectedFiles.map((attachment, index) => (
                  <Card key={index} className="mt-1 mb-0 shadow-none border">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <a
                            href={`data:${attachment.contentType};base64,${attachment.data}`}
                            download={attachment.name}
                          >
                            <img
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={attachment.name}
                              src={`data:${attachment.contentType};base64,` + attachment.data} // Render attachment preview
                            />
                          </a>
                        </Col>
                        <Col>
                          <Link to="#" className="text-muted font-weight-bold">
                            {attachment.name}
                          </Link>
                        </Col>
                        <Col className="col-auto">
                          <span
                            className="text-danger cursor-pointer"
                            onClick={() => deleteAttachment(index)}
                          >
                            <i className="ri-close-line"></i>
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FormFileupload;
