import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {HackerRoom5} from "../components/HackerRoom5.jsx";


const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440 })
    const isMobile = useMediaQuery({maxWidth: 768 });
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Yernar
                    <span className="waving-hand">👋</span>
                </p>

                <p className="hero_tag text-gray_gradient">Turning Ideas into Reality</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                            {/*<HackerRoom*/}
                            {/*    position={sizes.deskPosition}*/}
                            {/*    rotation={[0, -Math.PI, 0]}*/}
                            {/*    scale={sizes.deskScale}*/}
                            {/*/>*/}

                            <HackerRoom5
                                position={sizes.deskPosition}
                                rotation={[-0.03, -0.07, 0]}
                                // scale={4}
                                scale={sizes.deskScale}
                            />

                        </HeroCamera>

                        <group>

                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        {/*<ambientLight intensity={1}/>*/}
                        {/*<directionalLight*/}
                        {/*    position={[0,75,25]}*/}
                        {/*    intensity={3.5}*/}
                        {/*    castShadow*/}
                        {/*/>*/}

                        <ambientLight intensity={0.2} color="#ffffff"/>
                        {/* Adds soft ambient light to illuminate edges */}

                        <directionalLight
                            position={[0, 100, 50]}
                            intensity={5}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-far={200}
                            shadow-camera-left={-50}
                            shadow-camera-right={50}
                            shadow-camera-top={50}
                            shadow-camera-bottom={-50}
                            color="#ffffff"
                        />

                        <spotLight
                            position={[0, 100, -50]}
                            intensity={3}
                            angle={Math.PI / 4}
                            penumbra={0.5}
                            castShadow
                            color="#ffffff"
                        />


                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10
             c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam
                            containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>

        </section>
    )
}
export default Hero
