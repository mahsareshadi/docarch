import React, { ChangeEvent, FormEvent } from 'react'
import { File } from '../../../common/src/File'
import { useState } from 'react'
import { Filename } from './FileName'
import { uploadFiles } from '../api/index';
import '../css/File.css'

export function Files() {
  const [file, setFile] = useState<string>("");
  const [fileList, setFileList] = useState<File[]>([]);
  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setFile(String(event.target.value));
    console.log(file);
  }

  function addfile(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newFile = { fileid: -1, address: file }
    setFileList([...fileList, newFile]);
    setFile("");
    uploadFiles(newFile).then(response => {
      const insertid = response.data;
      newFile.fileid = insertid;
      console.log(newFile.fileid);
    }).then(
      
    );
  }
  return (
    <>
      {/* INPUT */}
      <form className="Uploadform">

        <input type="file" value={file} className="file-upload" accept=".pdf,.docx,.doc" onChange={handlechange} />
        <button type="submit" id="upload" onClick={addfile}>UPLOAD</button>

      </form>

      {/* LIST */}

      <div className="list-of-files">
        <div className="file-container">
          <ul className='file-list'>
            {fileList.map((file: File, key: number) => {
              return <Filename file={file} key={key} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
