// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aron Resty Ramillano Portfolio</title>
        <meta
          name="description"
          content="BS Computer Science Graduate & Aspiring Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="fixed w-full bg-white shadow z-10">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="text-xl font-bold">Aron Resty Ramillano</div>
            <div className="space-x-4">
              <a href="#hero" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#experience" className="hover:text-blue-600">Experience</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
            </div>
          </div>
        </nav>
        
        <main className="pt-20">
          {/* Hero Landing Section */}
          <section id="hero" className="container mx-auto py-20 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I am <span className="text-blue-600">Aron Resty Ramillano</span>
            </h1>
            <p className="text-xl mb-6">
              BS Computer Science Graduate &amp; Aspiring Full Stack Developer
            </p>
            <button className="bg-yellow-300 text-gray-900 py-2 px-4 rounded hover:bg-yellow-400">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">See Resume</a>
            </button>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://www.facebook.com/Flerelen/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aronrestyramillano/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/PERSEUS-1337" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-8">
              {/* Replace with your actual image path */}
              <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="mx-auto rounded-full" />
            </div>
          </section>
          
          {/* About Me */}
          <section id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="mb-6">
                I graduated from <strong>UPLB with a BS in Computer Science</strong> in July 2024, completing a Special Problem titled <em>LearnIT – An AI-Powered Learning Companion Using Text Segmentation and Contextual Condensing (TSCC)</em>. I am an <strong>aspiring full-stack developer</strong> with experience in AI applications, DevOps, database management, full-stack deployments, and I.T. consultation. I’ve contributed to engineering business solutions and actively leverage AI technologies to solve complex problems. Driven by a passion for learning, I constantly explore new technologies and adapt quickly to evolving challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'JavaScript', 'React.js', 'Express.js', 'MongoDB', 'Node.js',
                  'FastAPI', 'SvelteKit', 'TailwindCSS', 'LangChain', 'OpenAI', 'ChromaDB',
                  'Docker', 'GitHub', 'Vercel', 'Heroku', 'DigitalOcean', 'Linux', 'Java', 'Nginx'
                ].map((tech) => (
                  <span key={tech} className="bg-gray-200 py-1 px-2 rounded text-sm">{tech}</span>
                ))}
              </div>
              <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic">
                "Talk is cheap. Show me the code" <br />
                <span className="font-bold">- Linus Torvalds</span>
              </blockquote>
            </div>
          </section>
          
          {/* Work Experience */}
          <section id="experience" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold">Jachin-Boaz Corporation</h3>
                <p className="italic">I.T. Officer / System Administrator, Software Developer - Hybrid (2019 - Present)</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Optimized infrastructure by implementing Windows Server 2022 SMB file sharing, boosting collaboration.</li>
                  <li>Developed &amp; deployed company website domain, email services (cPanel), and an in-progress purchasing system to streamline procurement and inventory.</li>
                  <li>Advanced from I.T. Consultant to full-time hybrid role, ensuring zero-downtime I.T. operations and supporting business growth.</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold">INVENSITY MNL, Inc.</h3>
                <p className="italic">Junior Software Developer - Internship (July 2023 - August 2023)</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>Developed an Employee Tracker Software for HR, enabling real-time office location tracking.</li>
                  <li>Integrated Unifi API to extract and visualize employee data in a Flask, MongoDB, and SvelteKit dashboard.</li>
                  <li>Collaborated with Senior Developers to refine development architecture and enhance Dockerized deployment.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Projects */}
          <section id="projects" className="bg-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project Cards */}
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">LearnIT - AI-Powered Learning Companion</h3>
                  <p className="text-sm italic mb-2">Next.js, FastAPI, ChromaDB, LangChain, OpenAI, MongoDB, Python, TailwindCSS</p>
                  <p>
                    An AI-driven learning tool using TSCC for smart document analysis and retrieval. Features PDF processing, RAG querying, and seamless deployment on DigitalOcean and Vercel.
                  </p>
                </div>
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">Random Terrain Generator - WebGL</h3>
                  <p className="text-sm italic mb-2">JavaScript, WebGL</p>
                  <p>
                    A procedural terrain generator that creates unique landscapes using real-time 3D rendering, designed for interactive web-based visualization.
                  </p>
                </div>
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">PHILMACH - Online Registration System</h3>
                  <p className="text-sm italic mb-2">Google Sheets API, Google Forms, Python</p>
                  <p>
                    An automated event registration system integrating Google Forms &amp; Sheets API for participant management. Features QR code generation, email notifications, and on-site check-in.
                  </p>
                </div>
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">Elemental Odyssey - Java Platformer Game</h3>
                  <p className="text-sm italic mb-2">Java</p>
                  <p>
                    A custom Java-based platformer with an in-house physics engine, map editor, and multiplayer support using socket programming over LAN.
                  </p>
                </div>
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">URSHRT - Custom T-Shirt Generator</h3>
                  <p className="text-sm italic mb-2">Next.js, React.js, TailwindCSS, Shopify API, JavaScript, TypeScript, Vercel</p>
                  <p>
                    An online store allowing users to design and order custom t-shirts via an intuitive interface with Shopify API integration.
                  </p>
                </div>
                <div className="border rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold mb-2">Reaction-Time Based Web Research Application</h3>
                  <p className="text-sm italic mb-2">Express.js, Node.js, Google Sheets API, JavaScript, Heroku, Papertrail</p>
                  <p>
                    Developed for an Industrial Engineering student thesis, this tool collects and analyzes reaction time data in real time. It leverages Google Sheets API for automated data storage and cost-efficient deployment via Heroku.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills */}
          <section id="skills" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <p>Python, JavaScript, TypeScript, HTML, C, Rust, SQL, Dart, Java</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <p>MERN, NextJS, Tailwind, Google API, SvelteKit, WordPress, cPanel, Flutter, ChromaDB, LangChain, OpenAI, StreamLit</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Soft Skills</h3>
                  <p>Attention to Detail, Project &amp; Time Management, Effective Communication, Proactive, Adaptive</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="bg-white py-6">
            <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} Aron Resty Ramillano. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
