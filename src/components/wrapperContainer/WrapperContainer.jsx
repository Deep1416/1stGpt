import React from 'react'


const WrapperContainer = ({children}) => {
  return (
    <div className='2xl:max-w-screen-xl container lg:px-8 sm:px-4 px-2 mx-auto ' 
    >{children}</div>
  )
}

export default WrapperContainer