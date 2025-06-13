import { FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'
export const Contact = () => {
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center relative ">
              <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Contact</h2>
                <div className="flex items-center ">
                    <FaFacebook/>
                    <a href="https://www.facebook.com/vin.cent.501138/" className="ml-2">Facebook </a>
                    <FaInstagram className="ml-3"/>
                    <a href="" className="ml-2">Instagram </a>
                    <FaGithub className="ml-3"/>
                    <a href="https://github.com/yahiko247" className="ml-2">Github </a>
                   
                </div>
              </div>
        </section>
    )
}