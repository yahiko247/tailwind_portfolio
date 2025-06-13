

export const Projects = () => {

    const projectMaterialsBims = ["React", "Node js", "Firebase", "Mui"]
    const smmicMaterials = ["Flutter", "python", "C++"]
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gaps-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/39 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Barangay Information Management System</h3>
                         <p className="text-gray-400 mb-4">
                             BIMS aims to digitize and streamline the management of various barangay records such as; demographic data, civil registries, land records, business permits, and other relevant information
                        </p>
                        <div>
                            {projectMaterialsBims.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                   
                    </div>

                    
                </div>
            </div>
            
        </section>
    );
}