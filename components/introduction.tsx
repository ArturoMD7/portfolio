import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import ProfileCard from './ProfileCard'

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            
            <div className="z-20 grid items-center p-4 pt-20 pb-28 md:p-6 md:py-0 md:grid-cols-2 md:gap-10 md:h-screen">
                <div className="flex justify-center md:justify-end">
                
                    <div className="scale-75 sm:scale-90 md:scale-100"> 
                        <ProfileCard
                            name="Arturo MD"
                            title="Software Engineer"
                            handle="arthur_0utlaw"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="/avataraa.png"
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={() => console.log('Contact clicked')}
                        />
                    </div>
                </div>
                
                <div className="flex flex-col justify-center md:pl-4 max-w-xl text-center md:text-left">
                    <h1 className="mb-3 text-xl leading-tight md:text-4xl md:mb-6">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-sm md:text-xl md:mx-0 md:mb-5">
                        Como estudiante de Ingeniería en Sistemas Computacionales, estoy comprometido con el aprendizaje contínuo, la innovación tecnológica y la aplicación práctica del conocimiento para resolver problemas del mundo real.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:justify-start md:gap-6">
                        <a href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-sm md:text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-sm md:text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;