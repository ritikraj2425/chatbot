import React from 'react';
import { MessageCircle, Zap, Shield, Users, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const AboutPage = () => {
    const gradientOverlay = "linear-gradient(135deg, #FFDEFE 0%, #F8F4F4 100%)";

    const developers = [
        {
            name: "Ritik Raj",
            role: "Full Stack Developer",
            image: "/myPhoto.png",
            bio: "Freelance Web Developer & Video Editor | Open Source Contributor | Hacktoberfest'24 | Content Creator | Passionate about tech and creativity",
            links: {
                github: "github.com/ritikraj2425",
                linkedin: "https://www.linkedin.com/in/ritik-raj-0a098228a/",
                twitter: "@ritikraj2425"
            }
        },

    ];

    const techStack = {
        frontend: {
            title: "Frontend",
            techs: [
                { name: "Next.js", experience: "90%" },
                { name: "TypeScript", experience: "10%" },
                { name: "TailwindCSS", experience: "95%" },
            ]
        },
        backend: {
            title: "Backend",
            techs: [
                { name: "Node.js", experience: "92%" },
                { name: "Express.js", experience: "94%" },
                { name: "MongoDB", experience: "87%" },
            ]
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section with Animated Gradient */}
            <div className="relative overflow-hidden"
                style={{ background: gradientOverlay, minHeight: "80vh" }}>
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block p-2 bg-white/30 backdrop-blur-md rounded-2xl mb-6">
                            <span className="text-sm font-medium px-4 py-2 text-[#3d3d3d] rounded-xl bg-white">
                                Version 2.0 Released 🎉
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            AI Chat Evolution
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12">
                            Experience the next generation of conversational AI, powered by
                            cutting-edge technology and designed for human-centric interactions.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold 
                            hover:scale-105 transition-all duration-300">
                                Try IT
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section (Moved below hero to prevent overlap) */}
            <div className="bg-transparent">
                <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { number: "99.9%", label: "Accuracy Rate" },
                            { number: "50M+", label: "Messages Processed" },
                            { number: "<50ms", label: "Response Time" }
                        ].map((stat, index) => (
                            <div key={index}
                                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl
                            hover:shadow-2xl transition-all duration-300">
                                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section with Glassmorphism */}
            <div className="pt-32 pb-16 px-6 bg-gradient-to-b from-pink-50/50 to-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#3d3d3d] text-center mb-16">Advanced Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageCircle className="w-8 h-8" />,
                                title: "Natural Language Processing",
                                description: "Understanding context and nuance in conversations with advanced NLP algorithms"
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Real-time Processing",
                                description: "Lightning-fast responses with our optimized processing pipeline"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Enterprise Security",
                                description: "End-to-end encryption and compliance with industry standards"
                            }
                        ].map((feature, index) => (
                            <div key={index}
                                className="group p-8 rounded-2xl bg-white/60 backdrop-blur-lg
                            hover:bg-white/80 transition-all duration-300 
                            border border-gray-100 hover:border-gray-200">
                                <div className="bg-gradient-to-br from-pink-100 to-purple-100 
                            p-4 rounded-xl inline-block mb-6 group-hover:scale-110 
                            transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl text-[#3d3d3d] font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Tech Stack Section */}
            <div className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#3d3d3d] text-center mb-6">Our Tech Stack</h2>
                    <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                        Built with cutting-edge technologies to deliver exceptional performance and reliability
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.values(techStack).map((category, idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8
                                    border border-gray-100 hover:border-gray-200
                                    transition-all duration-300">
                                <h3 className="text-2xl text-[#3d3d3d] font-semibold mb-6">{category.title}</h3>
                                <div className="space-y-6">
                                    {category.techs.map((tech, techIdx) => (
                                        <div key={techIdx} className="space-y-2">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className='text-[#3d3d3d]'>{tech.name}</span>
                                                <span className='text-[#3d3d3d]'>{tech.experience}</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"
                                                    style={{ width: tech.experience }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Developer Team Section */}
            <div className="py-16 px-6 bg-gradient-to-b from-white to-pink-50/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#3d3d3d] mb-16">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {developers.map((dev, index) => (
                            <div key={index}
                                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-lg
                            hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <img src={dev.image}
                                        alt={dev.name}
                                        className="w-20 h-20 rounded-full object-cover" />
                                    <div>
                                        <h3 className="text-2xl text-[#3d3d3d] font-semibold mb-2">{dev.name}</h3>
                                        <p className="text-pink-600 mb-4">{dev.role}</p>
                                        <p className="text-gray-600 mb-6">{dev.bio}</p>
                                        <div className="flex gap-4">
                                            <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                                            <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                                            <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* <div className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl text-[#3d3d3d] font-bold mb-8">Ready to Transform Your Chat Experience?</h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Join thousands of businesses already using our AI chat solution
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-4 bg-black text-white rounded-full font-semibold 
                            hover:scale-105 transition-all duration-300">
                            Get Started Free
                        </button>
                        <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-semibold 
                            hover:bg-gray-200 transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AboutPage;