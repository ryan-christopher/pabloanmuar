import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei"
import { Suspense } from 'react'

const Model = () => {
    const guitar = useLoader(FBXLoader, "./guitar/guitar.fbx");
    guitar.position.y = -2.5
    guitar.position.x = 0.3
    guitar.rotation.x = 0.25;
    guitar.rotation.z = 0.14
    return <primitive object={guitar} scale={0.006} />;
};

function Guitar() {
    return (
        <div>
            <Canvas frameloop="demand" className='block ml-auto mr-auto !h-[400px] !w-[300px] hover:cursor-pointer xl:mt-[30px]'>
                <ambientLight intensity={1.5} />
                <Suspense fallback={null}>
                    <OrbitControls autoRotate={true} autoRotateSpeed={3.0} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Guitar