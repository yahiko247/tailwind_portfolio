export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div>
                    <p>
                        Fourth-year student at USTP with skills in IoT, web, and mobile app development. 
                        Experienced in using Flutter, ESP32, and MQTT to create smart solutions like sensor-based 
                        systems and smart irrigation. Passionate about integrating machine learning into IoT 
                        projects to build innovative and sustainable technologies.

                    </p>
                </div>
            </div>

        </section>
    )
}