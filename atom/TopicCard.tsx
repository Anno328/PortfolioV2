import Image from 'next/image';

const TopicCard = (props:any) => {
  return (
    <button className='bg-gray-50 w-52 h-52 rounded-lg my-2 mx-2 hover:bg-green-300 focus:bg-green-300 drop-shadow-lg md:h-20 md:w-20 md:my-4'>
        <div className=''>
          <Image 
                src={props.imagePath}
                alt='logo'       
                width={150}
                height={150}/>
        </div>
        <p id={props.topicTitle} className='font-black text-xl md:text-xs'>{props.topicTitle}</p>
    </button>
  )
}

export default TopicCard
