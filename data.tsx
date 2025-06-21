import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Phone, Github, Mail } from "lucide-react";
import { GoMail } from "react-icons/go";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/arturo-martinez-768403351/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/ArturoMD7",
    },
    {
    id: 4,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:arturomtzdel17@gmail.com",
    }
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },/*
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },*/
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Phone size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Python Essentials",
        subtitle: "Cisco Networking Academy",
        date: "Nov 2024 ",
    },
    {
        id: 2,
        title: "CCNAv7: Enterprise Networking, Security, and Automation",
        subtitle: "Cisco Networking Academy",
        date: "Ago 2024",
    },
    {
        id: 3,
        title: "CCNAv7: Switching, Routing, and Wireless Essentials",
        subtitle: "Cisco Networking Academy",
        date: "Abr 2024",
    },
    {
        id: 4,
        title: "CCNAv7: Introduction to Networks",
        subtitle: "Cisco Networking Academy",
        date: "Ago 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "NEUROSOFT",
        about: "Aplicación de escritorio desarrollada con Django que emplea una Red Neuronal Convolucional para analizar imágenes médicas y detectar posibles derrames cerebrales.",
        image: "/neurosoft.png",
        urlGithub: "https://github.com/ArturoMD7/Neurosoft_Backend.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Maeka",
        about: "Tieda en Express.js y React para la venta de perfumes, con administración de productos, usuarios y pedidos.",
        image: "/maeka.png",
        urlGithub: "https://github.com/AxlEnr/CRUD-React.git",
        urlDemo: "http://20.175.206.106:5173/home",
    },
    {
        id: 3,
        title: "GAMA",
        about: "GAMA es un asistente virtual para la CrowPi que facilita el aprendizaje de inteligencia artificial y electrónica, pensado para estudiantes y entusiastas.",
        image: "/plantas.png",
        urlGithub: "https://github.com/ArturoMD7/AI_Assistant_Crowpi.git",
        urlDemo: "https://critikando-cxdngvgya2bggcds.canadacentral-01.azurewebsites.net",
    },
    {
        id: 4,
        title: "M.I.A.U",
        about: "App web y movil en flutter y Django, para ayudar a las personas a encontrar a sus mascotas perdidas o ideales.",
        image: "/miau.png",
        urlGithub: "https://github.com/AxlEnr/M.I.A.U-server.git",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Flora en Hidalgo",
        about: "Foro en Next.js para divulgar una tesis sobre plantas y sus usos regionales (UAEH).",
        image: "/plantas.png",
        urlGithub: "https://github.com/AxlEnr/FloresDeHidalgo.git",
        urlDemo: "https://plantshidalgo.netlify.app",
    },
    {
        id: 6,
        title: "CritiKando",
        about: "Aplicación web en .NET desplegada en Azure, con panel de control para publicar reseñas y comentarios sobre contenido multimedia.",
        image: "/critikando.png",
        urlGithub: "https://github.com/ArturoMD7/ReviewsAppWeb.git",
        urlDemo: "https://critikando-cxdngvgya2bggcds.canadacentral-01.azurewebsites.net",
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];