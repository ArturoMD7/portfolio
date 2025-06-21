import { Avatar } from "@/components/avatar";
import Certificaciones from "@/components/certificaciones";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import { CoverParticles } from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            
            <TransitionPage />
            <CoverParticles />
            <ContainerPage>
                
                <div className="my-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                        Sobre mí
                    </h2>
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto md:mx-0 leading-relaxed">
                        Soy un desarrollador con enfoque en soluciones web y móviles. Me apasiona construir 
                        experiencias funcionales y visualmente atractivas, combinando tecnologías 
                        como <strong>Python, Next.js, MySQL, SQL Server, Azure, Oracle y React Native</strong>. 
                    </p>
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto md:mx-0 mt-4 leading-relaxed">
                        He trabajado en proyectos que integran inteligencia artificial para el área médica, plataformas interactivas conectadas a Spotify, y sistemas de gestión con interfaces personalizadas. 
                        Siempre busco crear código limpio, bien documentado y útil para los usuarios.
                    </p>
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto md:mx-0 mt-4 leading-relaxed">
                        Me interesa el impacto social de la tecnología, por eso mis proyectos buscan mejorar procesos reales, como la <em>detección temprana de enfermedades</em> o el <em>cuidado de mascotas</em> con apps intuitivas.
                    </p>
                </div>

                {/* Título + Timeline */}
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Algunas{' '}
                    <span className="font-bold text-secondary">
                        Certificaciones y cursos realizados
                    </span>
                </h1>

                <Certificaciones />
            </ContainerPage>
        </>
    );
};

export default AboutMePage;
