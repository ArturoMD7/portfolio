import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-10 md:py-0 md:grid-cols-2 md:gap-4">
                {/* Contenedor de imagen con margen superior aumentado SOLO en móvil */}
                <div className="flex justify-center mt-20 md:mt-0 md:justify-end">
                    <Image
                        src="/home-4.png"
                        priority
                        width={400}
                        height={400}
                        alt="Avatar"
                        className="w-full max-w-[200px] md:max-w-[450px] md:mr-36" 
                    />
                </div>
                
                {/* Contenedor de texto con margen superior reducido SOLO en móvil */}
                <div className="flex flex-col justify-center md:pl-4 max-w-xl -mt-20 md:mt-0">
                    <h1 className="mb-4 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8">
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

                    <p className="mx-auto  mb-2 text-base md:text-xl md:mx-0 md:mb-5">
                        Como estudiante de Ingeniería en Sistemas Computacionales, estoy comprometido con el aprendizaje continuo, la innovación tecnológica y la aplicación práctica del conocimiento para resolver problemas del mundo real.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-8">
                        <a href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-sm md:text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
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