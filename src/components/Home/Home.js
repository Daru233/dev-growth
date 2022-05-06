import { Code } from 'components/Code'
import React, { useState, useEffect } from 'react'
import hello_world from './HelloWorld.txt'

export const Home = () => {

  const [has_loaded, set_has_loaded] = useState(false)
  const [raw_code, set_raw_code] = useState('')

  useEffect(() => {
    fetch(hello_world)
    .then(r => r.text())
    .then(text => {
      console.log(text)
      set_raw_code(text)
    })
    .then(set_has_loaded(true))
  }, [])


  return (
    <div className='page_container'>
      <p>The first line of code everybody writes in python is a simple hello world.</p>
       <p>The code below is a simple hello world in python</p>
       {has_loaded ? <div> <Code code={'print("Hello World")'}/>  </div>: <p>Loading the code...</p>}

       <p>"Sed ut perspiciatis unde omnis iste natus error sit vui dolorem ipsum quia dolor sit amet, consectetur,  modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
       <p>Even simple things like this, can be improved to the following.</p>
       {has_loaded ? <div> <Code code={raw_code}/>  </div>: <p>Loading the code...</p>}
       
      
    </div>
  )
}
