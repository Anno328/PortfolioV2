import dynamic from 'next/dynamic'
import { useContext, useEffect } from "react";
import { AppContext } from "../pages/index";
import {CSSTransition} from 'react-transition-group';
import React, { useState } from "react"
const ContentTitle = dynamic(() => import('../components/ContentTitle'))
const ContentSubject = dynamic(() => import('../components/ContentSubject'))
import Top from './content/Top';
import AboutMe from './content/AboutMe';
import MyWork from './content/MyWork';
import Skill from './content/Skill';
import Contact from './content/Contact';


const Content = (props:any) => {
  const {content,show,setShow} = useContext(AppContext)
  
  useEffect(() => {
    const contentElement = document.querySelector("#content");
    setShow(false);
    contentElement?.scrollTo(0,0)
  });

  return (
      <div id='content' className='bg-green-100 h-screen w-3/5 float-right text-center text-2xl px-32 overflow-auto md:w-2/3 md:text-base md:px-6'>
        <CSSTransition
        in={show}
        timeout={300}
        classNames='alert'
        >
          <div>
            {content == 'initial' && 
              <div>
                <ContentTitle contentTitle='Welcome To My Portfolio!'/>
                <ContentSubject subject={Top} />
              </div>}

            {content == 'ABOUT ME' && 
              <div>
                <ContentTitle contentTitle={content}/>
                <ContentSubject subject={AboutMe} />
              </div>}
            
            {content == 'MY WORK' && 
            <div>
                <ContentTitle contentTitle={content}/>
                <ContentSubject subject={MyWork} />
            </div>}

            {content == 'SKILL' && 
            <div>
                <ContentTitle contentTitle={content}/>
                <ContentSubject subject={Skill} />
            </div>}

            {content == 'CONTACT' && 
            <div>
                <ContentTitle contentTitle={content}/>
                <ContentSubject subject={Contact} />
            </div>}
          </div>
        </CSSTransition>
      </div>
  )
}

export default Content
