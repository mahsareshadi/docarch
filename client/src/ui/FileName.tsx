import React from 'react'
import { File } from '../../../common/src/File'

interface Props{
  file : File
}
export function Filename({file}:Props) {
  let href=String(`../../server/Upload/${file.address}`)

  return (
    <div className="todo">
      <li className="todo-item">
        {file.address}
      </li>
      
      <a href={href} download>
      <button className="download-btn">&#8681;</button></a>
      <button className="send-btn">&#8680;</button>
    </div>
  )
}
