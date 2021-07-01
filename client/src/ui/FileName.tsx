import React from 'react'
import { File } from '../../../common/src/File'

interface Props{
  file : File
}
export function Filename({file}:Props) {
  let href=`"../../../server/Upload/${(file.address).split("fakepath\\")[1]}`

  return (
    <div className="todo">
      <li className="todo-item">
        {(file.address).split("fakepath\\")[1]}
      </li>
      
      <a href={href} download>
      <button className="download-btn">&#8681;</button></a>
      <button className="send-btn">&#8680;</button>
    </div>
  )
}
