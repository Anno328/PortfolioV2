//TODO: OSS + mabl + Teach reqruit

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { Dispatch, useState } from "react"
const Menu = dynamic(() => import('../components/Menu'))
const Content = dynamic(() => import('../components/Content'))

export const AppContext = React.createContext(
  {} as {
    content: number;
    setContent: Dispatch<React.SetStateAction<number>>;
    show: boolean;
    setShow: Dispatch<React.SetStateAction<boolean>>;
  }
)

const Home: NextPage = () => {
  const [content, setContent] = useState('initial');
  const [show, setShow] = useState(false);

  return (
    <div className='font-mono	font-bold text-gray-700'>
      <AppContext.Provider value={{content, setContent, show, setShow}}>
        <Menu/>
        <Content/>
      </AppContext.Provider>
    </div>
  )
}

export default Home
