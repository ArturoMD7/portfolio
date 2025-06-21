"use client"

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import TransitionPage from '@/components/transition-page';
import CircleImage from '@/components/circle-image';
import { color } from 'framer-motion';
import { CoverParticles } from '@/components/cover-particles';

const ContactPage = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles />
            <div className="flex flex-col justify-center items-center h-lvh px-4 text-center ">
                <CircleImage />
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Contáctame</h1>
                <p className="text-primary max-w-xl mb-10">Estoy disponible para colaboraciones, consultas o simplemente para charlar. Aquí tienes mis datos:</p>
                
                <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-center justify-center gap-3">
                        <FaEnvelope className="text-secondary" />
                        <span style={{ color: 'white' }}>arturomtzdel17@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaPhoneAlt className="text-secondary" />
                        <span style={{ color: 'white' }}>+52 775 758 0699</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaMapMarkerAlt className="text-secondary" />
                        <span style={{ color: 'white' }}> Tulancingo Hidalgo, México</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-10 text-2xl text-secondary">
                    <a href="https://www.linkedin.com/in/arturo-martinez-768403351" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-secondary/80 transition" />
                    </a>
                    <a href="https://github.com/ArturoMD7" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-secondary/80 transition" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
