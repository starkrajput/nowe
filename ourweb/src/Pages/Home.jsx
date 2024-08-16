/* eslint-disable no-unused-vars */

import Navbar from '../Component/navbar';
import React from 'react';// Adjust the path if Navbar.jsx is in a different directory
import '../Pages/style.css'; // Import any CSS specific to the Home component if needed
import Banner from '../Component/Banner';
import Section2 from '../Component/Section2';
import Added from '../Component/Added';
/*import Section3 from '../Component/Section3';*/
import Testimonial from '../Component/Testimonial';
import Section4 from '../Component/Section4';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import SimpleCard from '../Component/Template/SimpleCard';
import AutoSlider from '../Component/AutoSlider';
import Section0 from '../Component/Template/Section0';
import Healthcare from '../assets/Vedio/624111.jpg';
import ERP from '../assets/Vedio/erp.png';
import Fintech from '../assets/Vedio/fintech.jpg';
import LuxuryShop from '../assets/Vedio/luxuryeshop.jpg';
function Home() {
    const articlesData = {
        title: "Our Recent Works",
        articles: [
            {
                image: SP1,
                alt: "PredictiveAI Insights",
                heading: "PredictiveAI Insights",
                description: "PredictiveAI Insights is a cutting-edge software platform that leverages advanced machine learning algorithms to provide actionable insights from complex data sets. By uncovering hidden patterns and trends, businesses can make data-driven decisions with unparalleled accuracy and speed.",
                link: "#",
            },
            {
                image: SP2,
                alt: "CyberShield Enterprise",
                heading: "CyberShield Enterprise",
                description: "CyberShield Enterprise is a comprehensive cybersecurity platform designed to protect businesses from evolving cyber threats. With robust features such as advanced threat detection, incident response, and vulnerability management, our software provides a fortified defense against cyberattacks.",
                link: "#",
            },
            {
                image: SP3,
                alt: "SupplyChainOptimus",
                heading: "SupplyChainOptimus",
                description: "SupplyChainOptimus is a cloud-based supply chain management solution that optimizes operations, reduces costs, and improves efficiency. Our software utilizes advanced analytics and AI to forecast demand, optimize inventory levels, and streamline logistics.",
                link: "#",
            },
        ],
    };
    const Autocards = [
        {
            image: SP1,
            header: 'AI-Powered Personalized Nutrition',
            description: 'Revolutionize the wellness industry with AI-driven nutrition plans tailored to individual needs and preferences.'
        },
        {
            image: SP2,
            header: 'Smart Home Automation',
            description: 'Create intelligent living spaces with our smart home automation solutions. Control devices, optimize energy consumption, and enhance security.'
        },
        {
            image: SP3,
            header: 'Virtual and Augmented Reality Gaming',
            description: 'Immerse players in exciting virtual and augmented reality gaming experiences. Develop captivating games with cutting-edge technology.'
        },
        {
            image: SP1,
            header: 'Blockchain-Based Supply Chain Management',
            description: 'Enhance supply chain transparency and security with our blockchain solutions. Track products, reduce fraud, and improve efficiency.'
        },
        {
            image: SP2,
            header: 'Mental Health and Wellness App',
            description: 'Promote mental well-being with our comprehensive app offering meditation, therapy, and stress management tools.'
        },
        {
            image: SP3,
            header: 'Sustainable Fashion Platform',
            description: 'Drive sustainable fashion choices with our platform connecting consumers with eco-friendly brands.'
        },
        {
            image: SP1,
            header: 'Decentralized Finance (DeFi) Applications',
            description: 'Build innovative financial applications on blockchain technology. Offer decentralized lending, trading, and more.'
        },
        {
            image: SP2,
            header: 'Remote Patient Monitoring',
            description: 'Improve patient care with real-time monitoring and remote healthcare solutions.'
        },
        {
            image: SP3,
            header: 'Augmented Reality (AR) for Education',
            description: 'Enhance learning experiences with interactive AR educational content.'
        },
        {
            image: SP1,
            header: 'Voice-Controlled Assistants',
            description: 'Develop intelligent voice assistants for seamless interactions with devices and services.'
        },
        {
            image: SP1,
            header: 'AI-Powered Personalized Nutrition',
            description: 'Revolutionize the wellness industry with AI-driven nutrition plans tailored to individual needs and preferences.'
        },
        {
            image: SP2,
            header: 'Smart Home Automation',
            description: 'Create intelligent living spaces with our smart home automation solutions. Control devices, optimize energy consumption, and enhance security.'
        },
        {
            image: SP3,
            header: 'Virtual and Augmented Reality Gaming',
            description: 'Immerse players in exciting virtual and augmented reality gaming experiences. Develop captivating games with cutting-edge technology.'
        },
        {
            image: SP1,
            header: 'Blockchain-Based Supply Chain Management',
            description: 'Enhance supply chain transparency and security with our blockchain solutions. Track products, reduce fraud, and improve efficiency.'
        },
        {
            image: SP2,
            header: 'Mental Health and Wellness App',
            description: 'Promote mental well-being with our comprehensive app offering meditation, therapy, and stress management tools.'
        },
        {
            image: SP3,
            header: 'Sustainable Fashion Platform',
            description: 'Drive sustainable fashion choices with our platform connecting consumers with eco-friendly brands.'
        },
        {
            image: SP1,
            header: 'Decentralized Finance (DeFi) Applications',
            description: 'Build innovative financial applications on blockchain technology. Offer decentralized lending, trading, and more.'
        },
        {
            image: SP2,
            header: 'Remote Patient Monitoring',
            description: 'Improve patient care with real-time monitoring and remote healthcare solutions.'
        },
        {
            image: SP3,
            header: 'Augmented Reality (AR) for Education',
            description: 'Enhance learning experiences with interactive AR educational content.'
        },
        {
            image: SP1,
            header: 'Voice-Controlled Assistants',
            description: 'Develop intelligent voice assistants for seamless interactions with devices and services.'
        },
        // Add more cards as needed
    ];
    const section0Data = {
        title: "Transforming Industries : Solutions That Deliver",
        cards: [
            {
                title: " Product Development and Growth",
                date: "March 15, 2023",
                excerpt: "Ignite Innovation, Drive Growth.Our expert team specializes in crafting tailored product solutions that optimize your business performance.From ideation to market launch, we deliver exceptional products that exceed expectations.",
                image: ERP,
                link: "/case-studies/erp-solution"
            },
            {
                title: "Enterprise Applications Development",
                date: "May 5, 2022",
                excerpt: "Transform Your Business with Cutting - Edge Solutions.Our enterprise application development services address complex business challenges.From payroll to observability, we build scalable and robust solutions that drive efficiency and productivity.",
                image: LuxuryShop,
                link: "/case-studies/luxury-fashion-platform"
            },
            {
                title: "Systems Integration and Optimization",
                date: "July 28, 2021",
                excerpt: "Unleash the Power of Your Data.Our integration and optimization services seamlessly connect disparate systems, unlocking valuable insights.We optimize your technology stack for peak performance and ROI.",
                image: Healthcare,
                link: "/case-studies/healthcare-data-analytics"
            },
           



           // Add more card objects as needed
        ]
    };
    return (
        <div className="content-container">
            <Banner />
            <Navbar />
            <Added />
            <Section2 />
            <Section0 title={section0Data.title} cards={section0Data.cards} />
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />
           
            {/* Pending <Section3 />*/}
            <Testimonial />
            <AutoSlider cards={Autocards} />
            <Section4 />
            <Contact />
            <Footer/>
        </div>
    );
}

export default Home;
