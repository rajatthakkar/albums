import React from 'react'
import style from './Style/creteModal.module.css'
import useValue from '../context'
export default function CreateModal() {
  
  const {modal,handleCreateModal,handleChange,formData,handleSubmit} = useValue()
 
  

  console.log(modal)
  return (
    <div className={style.modalBox}>
      <div className={style.textBox}>
        <h3>Update Title</h3>
      </div>
      <div className={style.inputBox}>
      <lable>User Id</lable>

        <input
       
        type='text'
        name='userid'
        value={formData.userid}
         placeholder='Title Name' onChange={handleChange} />

        <lable>Id</lable>

        <input type='text' name='id'
          value={formData.id}
        placeholder='Title Name' onChange={handleChange}  />

        <lable>Title </lable>

        <input type='text' name='title' 
          value={formData.title}
        placeholder='Title Name' onChange={handleChange}  />

      </div>
      <div className={style.btnRow}>
        <button className={style.update} onClick={handleSubmit}>Post</button>
        <button className={style.delete} onClick={handleCreateModal} >Cancel</button>
      </div>
    </div>
  )
}
