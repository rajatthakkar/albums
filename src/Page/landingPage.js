// Import importent class
import React from 'react'
import AlbumsCard from '../component/albumcart/albums.js'
import Modal from '../modal/modal.js'
import style from './style/style.module.css'
 import useValue from '../context.js'
 import CreateModal from '../modal/createModal.js'
export default function LandingPage() {
  // import function and variable 
      const {modal,data,createModal} = useValue()
      console.log(data)
      
  return (
      <div className={style.landingBox}>
        {/* getting api value and implement by the loop */}
        {data.map((e,index)=>(
              <AlbumsCard value={e}
                          key={index} />
        ))}
        {/* handle modal here */}
        {createModal?<CreateModal/>:null}
        {modal ? <Modal /> : null}
      </div>
  )
}
