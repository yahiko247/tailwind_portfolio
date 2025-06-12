export const About = () => {

    const frontendSkill = ["React", "TailwindCss", "Flutter", "MUI"]
    const backendSkill = ["Nextjs", "Python", "firebase"]
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-transition-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Fourth-year student at USTP with skills in IoT, web, and mobile app development. 
                        Experienced in using Flutter, ESP32, and MQTT to create smart solutions like sensor-based 
                        systems and smart irrigation. Passionate about integrating machine learning into IoT 
                        projects to build innovative and sustainable technologies.

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkill.map((tech, key) => (
                                <span 
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                             hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}

                                             </span>))}
                            </div>
                        </div>
                        
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkill.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]" transition
                                    >{tech}</span>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫Educationn</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S. in Information Technology</strong> - University of Science and Technology of Southern Philippines(USTP 2024-2025)
                            </li>
                            <li>
                                <strong>Relevant Courswork</strong>: Data Management, Web Dev, Networking, System Administration, Mobile Dev
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">✨Achievments</h3>
                    </div>
                </div>

            </div>

        </section>
    )
}