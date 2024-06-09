import React ,{useRef} from 'react'
import style from './Style/style.module.css'
import useValue from '../context'
export default function Modal() {
  const {modal,handleModal,updateAlbum} = useValue()
  const inputRef = useRef(null);
  console.log(modal)
  return (
    <div className={style.modalBox}>
      <div className={style.textBox}>
        <h3>Update Title</h3>
      </div>
      <div className={style.inputBox}>
        <lable>Title Name</lable>
        <input type='text' placeholder='Title Name'  ref={inputRef}  />
      </div>
      <div className={style.btnRow}>
        <button className={style.update} onClick={()=>updateAlbum(inputRef.current.value)}>Update</button>
        <button className={style.delete} onClick={handleModal} >Cancel</button>
      </div>
    </div>
  )
}
