import { useContext } from "react";
import { AppContext } from "../pages/index";
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const Profile = () => {
  const {setContent,setShow} = useContext(AppContext)

  function onTopicClick(contentTitle:string){
    setContent(contentTitle);
    setShow(true);
  }

  return (
    <div>
        <div className='bg-gray-50 w-40 h-40 rounded-full mx-auto mt-12 drop-shadow-lg  md:w-16 md:h-16' onClick={() => {onTopicClick('initial')}}>
          <Image 
              src='/y0679.png'
              alt='logo'       
              width={200}
              height={200}/>
        </div>
        <p className='font-black text-2xl mt-4 md:text-sm'>AnnoRyoya</p> <br /> 
        <span className='mx-1'><SocialIcon style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/Anno-Ryoya/" /></span>
        <span className='mx-1'><SocialIcon style={{ height: 25, width: 25 }} url="https://github.com/Anno328" /></span>
        <span className='mx-1'><SocialIcon style={{ height: 25, width: 25 }} url="https://www.instagram.com/annoske03/"/></span>

    </div>
  )
}

export default Profile
