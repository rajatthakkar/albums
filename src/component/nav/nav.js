import React from 'react'
import style from '../nav/style/style.module.css'
import useValue from '../../context'
export default function Nav() {
  const {handleCreateModal} = useValue()
  return (
    <div className={style.navBody}>
       <div className={style.text} ><h2>Album</h2></div>
       <div className={style.text} onClick={handleCreateModal}><h4>Create Album</h4></div>
    </div>
  )
}
