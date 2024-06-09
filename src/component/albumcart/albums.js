import React from 'react'
import style from './style/style.module.css'
import useValue from '../../context'
function AlbumsCard(props) {
  // import faunction and variable
  const {handleModal,deleteAlbum} = useValue()
  const {value} = props
  const {title,id} = value
  return (
    <div className={style.cardBox}>
      <div className={style.title}>{title}</div>
      <div className={style.btnRow}>
        <button className={style.update}onClick={()=>handleModal(id)}>Update</button>
        <button className={style.delete} onClick={()=>deleteAlbum(id)}>Delete</button>
      </div>

    </div>
  )
}

export default AlbumsCard
