import { useState } from "react";
import "./styles.css";
const DragAndDrop = () => {
  const [fileInfo, setFileInfo] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const handleFileUpload = (e) => {
    let files = e.target.files;
    let temp = [];
    for (let i = 0; i < files.length; i++) {
      const info = {
        name: files[i].name,
        size: files[i].size,
        type: files[i].type,
        url: URL.createObjectURL(files[i]),
        id: Math.random(),
      };
      temp.push(info);
    }
    console.log(temp);
    setFileInfo([...fileInfo, ...temp]);
  };
  const handleDeleteFile = (id) => {
    setFileInfo(
      fileInfo.filter((file) => {
        return file.id != id;
      })
    );
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e);
    const files = e.dataTransfer.files;
    let temp = [];
    for (let i = 0; i < files.length; i++) {
      const info = {
        name: files[i].name,
        size: files[i].size,
        type: files[i].type,
        url: URL.createObjectURL(files[i]),
        id: Math.random(),
      };
      temp.push(info);
    }
    setFileInfo([...fileInfo, ...temp]);
    console.log(fileInfo);
    setIsDragging(false);
  };
  return (
    <div className="container">
      <div className="drag-component">
        <h2>React File Uploader</h2>
        <div
          className={isDragging ? "drag dragging" : "drag"}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragOver={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDrop={handleDrop}
        >
          <p>Drag and drop your files here</p>
          <input
            type="file"
            name=""
            id="file-input"
            onChange={(e) => handleFileUpload(e)}
            multiple
            className="hidden-input"
          />
          <label htmlFor="file-input">Browse file</label>
        </div>
        <div>
          {fileInfo &&
            fileInfo.map((file) => {
              return (
                <div className="info-box">
                  <div className="info">
                    <img src={file.url} alt="" className="image" />
                    <div className="file-info">
                      <p className="file-n">{file.name}</p>
                      <p className="file-s">
                        {(file.size / 1024).toFixed(2)}KB
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn"
                      onClick={() => handleDeleteFile(file.id)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default DragAndDrop;
