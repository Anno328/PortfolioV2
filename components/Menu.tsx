import dynamic from 'next/dynamic'
const Profile = dynamic(() => import('../components/Profile'))
const TopicCard = dynamic(() => import('../atom/TopicCard'))
import { useContext } from "react";
import { AppContext } from "../pages/index";

const Menu = () => {
  const {setContent,setShow} = useContext(AppContext)

  function onTopicClick(contentTitle:string){
    setContent(contentTitle);
    setShow(true);
  }

  return (
    <div className='bg-yellow-100 h-screen w-2/5 float-left	text-center	static overflow-auto md:w-1/3'>
      <Profile/>
      <div className='Topics grid grid-rows-2 grid-flow-col md:grid-rows-4'>
        <div onClick={() => {onTopicClick('ABOUT ME')}}>
          <TopicCard topicTitle='ABOUT ME' imagePath='/y0530.png'/>
        </div>
        <div onClick={() => {onTopicClick('MY WORK')}}>
          <TopicCard topicTitle='MY WORK' imagePath='/y0749.png'/>
        </div>
        <div onClick={() => {onTopicClick('SKILL')}}>
          <TopicCard topicTitle='SKILL' imagePath='/y0682.png'/>
        </div>
        <div onClick={() => {onTopicClick('CONTACT')}}>
          <TopicCard topicTitle='CONTACT' imagePath='/y0550.png'/>
        </div>
      </div>
    </div>
  )
}

export default Menu
