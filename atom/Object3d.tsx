// import React,  { useRef, useState } from 'react'
// import { Canvas, useFrame, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = (props:any) => {
//   const modelPath = './' + props.model + '.gltf';
//   const gltf = useLoader(GLTFLoader, modelPath);

//   return (
//     <>
//       <primitive object={gltf.scene} scale={1} position={[-2, 0, 0]}/>
//     </>
//   );
// };

// const FloatingModel = (props:any) => {
//   const [flg, toggle] = useState(true)

//   const ref = useRef()

//   const modelPath = './' + props.model + '.gltf';
//   const gltf = useLoader(GLTFLoader, modelPath);

//   useFrame(() => (callback()))

//   function callback(){

//     if(flg){
//       ref.current.position.y += 0.005;
//       if(ref.current.position.y >= 0.05){
//         toggle(!flg)
//       }
//     }else{
//       ref.current.position.y -= 0.005;
//       if(ref.current.position.y <= -0.05){
//         toggle(!flg)
//       }
//     }
//   }

//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.5} position={[0, 0, 0]} ref={ref}/>
//     </>
//   );
// };

// const Object3d = (props:any) => {
//     return (
//       <div className='w-auto h-auto text-center z-50'>
//         <Canvas>
//           <ambientLight />
//           <Model model={props.model}/>
//         </Canvas>
//       </div>
//     )
//   }
  
//   export default Object3d
  
