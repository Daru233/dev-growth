import React from 'react'
import not_found from './not_found.png'

export const Error = () => {
  return (
    <div className='page_container'>
      <img src={not_found} alt={'Not Found'} style={{marginLeft: '5%' ,height: '70%', width: '70%'}}/>
    </div>
  )
}
