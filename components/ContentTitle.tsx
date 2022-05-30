const ContentTitle = (props:any) => {
    return (
      <div>
          <p id={props.contentTitle} className='font-black text-4xl my-8 md:text-lg'>{props.contentTitle}</p>
      </div>
    )
  }
  
  export default ContentTitle
  