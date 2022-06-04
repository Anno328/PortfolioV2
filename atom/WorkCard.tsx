import React from "react"
import Image from 'next/image';

 function WorkCard(props:any) {
  return <div className='my-8 shadow-2xl border-0 p-4'>
    <Image 
      src={props.imgUrl}
      alt='logo'       
      width={150}
      height={150}/>
    <div className='inline-block text-center'>
      <p className='text-base'>{props.title}</p>
      <p className='text-sm my-8'>{props.description}</p>
      {props.link ? 
      <a className='text-sm my-4 block underline md:text-xs' target="_blank" href={props.link}>See more!</a>:<></>
      }
    </div>
  </div>
}

export default WorkCard
