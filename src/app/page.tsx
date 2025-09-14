import Head from "next/head";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

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
        <main className="pt-20">
          {/* Hero Landing Section */}
          <section
            id="hero"
            className="container mx-auto py-10 px-6 text-center scroll-mt-24"
          >
             <div className="mb-8">
              <Image
                src="/images/profile2.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
            </div>
            <h1 className="text-4xl text-neutral font-bold mb-4">
              Hi, I am{" "}
              <span className="text-primary">Aron Resty Ramillano</span>
            </h1>
            <p className="text-xl mb-6">
              BS Computer Science Graduate, Full Stack Developer
            </p>
            <a
              className="btn  btn-accent btn-outline rounded-md "
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Resume
            </a>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/Flerelen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aronrestyramillano/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/PERSEUS-1337"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
           
          </section>

          {/* About Me */}
          <section id="about" className="bg-white py-10 scroll-mt-14">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="mb-6">
                I graduated from{" "}
                <strong>UPLB with a BS in Computer Science</strong> in July
                2024, completing a Special Problem titled{" "}
                <em>
                  LearnIT – An AI-Powered Learning Companion Using Text
                  Segmentation and Contextual Condensing (TSCC)
                </em>
                . I am an <strong>aspiring full-stack developer</strong> with
                experience in AI applications, DevOps, database management,
                full-stack deployments, and I.T. consultation. I’ve contributed
                to engineering business solutions and actively leverage AI
                technologies to solve complex problems. Driven by a passion for
                learning, I constantly explore new technologies and adapt
                quickly to evolving challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "React.js",
                  "Express.js",
                  "MongoDB",
                  "Node.js",
                  "FastAPI",
                  "SvelteKit",
                  "TailwindCSS",
                  "Flutter",
                  "Dart",
                  "LangChain",
                  "OpenAI",
                  "ChromaDB",
                  "Docker",
                  "GitHub",
                  "Vercel",
                  "Heroku",
                  "DigitalOcean",
                  "Linux",
                  "Java",
                  "Nginx",
                  "AWS",
                  "PostgreSQL",
                  "React Native",
                  "Django",
                  "Expo",
                  
                ].map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-md badge-outline badge-neutral rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic">
                &quot;Talk is cheap. Show me the code&quot; <br />
                <span className="font-bold">- Linus Torvalds</span>
              </blockquote>
            </div>
          </section>

          {/* Work Experience */}
          <section id="experience" className="bg-gray-50 py-10 scroll-mt-14">
            <div className="container mx-auto px-6 flex flex-col gap-8">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <div className="">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="text-2xl font-semibold">The App Factory</h3>
                  <a
                    href="https://www.linkedin.com/company/theappfactoryio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
                <p className="italic">
                  Software Engineer I - Remote (June 2025 - Present)
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>
                    Spearheading full-stack development of customer-facing
                    mobile applications using React Native and Django REST.
                  </li>
                  <li>
                    Managing and optimizing backend infrastructure, and service
                    uptime for production mobile apps, with AWS deployments for
                    reliable backend services.
                  </li>
                  <li>
                    Collaborating cross-functionally to deliver scalable
                    solutions, with a focus on performance, maintainability, and
                    user experience across platforms.
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="text-2xl font-semibold">
                    Jachin-Boaz Corporation
                  </h3>
                  <a
                    href="https://www.linkedin.com/company/jachin-boaz-corporation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
                <p className="italic">
                  I.T. Officer / System Administrator, Software Developer -
                  Hybrid (2019 - Present)
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>
                    Optimized infrastructure by implementing Windows Server 2022
                    SMB file sharing, boosting collaboration.
                  </li>
                  <li>
                    Developed &amp; deployed company website domain, email
                    services (cPanel), and an in-progress purchasing system to
                    streamline procurement and inventory.
                  </li>
                  <li>
                    Advanced from I.T. Consultant to full-time hybrid role,
                    ensuring zero-downtime I.T. operations and supporting
                    business growth.
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="text-2xl font-semibold">
                    INVENSITY MNL, Inc.
                  </h3>
                  <a
                    href="https://www.linkedin.com/company/invensity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
                <p className="italic">
                  Junior Software Developer - Internship (July 2023 - August
                  2023)
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li>
                    Developed an Employee Tracker Software for HR, enabling
                    real-time office location tracking.
                  </li>
                  <li>
                    Integrated Unifi API to extract and visualize employee data
                    in a Flask, MongoDB, and SvelteKit dashboard.
                  </li>
                  <li>
                    Collaborated with Senior Developers to refine development
                    architecture and enhance Dockerized deployment.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="bg-white py-10 scroll-mt-14">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project Cards */}
                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/bashbook-todo.png"
                      alt="BashBook Todo List App"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      BashBook Todo - Shared Task Management Mobile App
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://github.com/PERSEUS-1337/bashbook-todo-list-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                    </div>
                    <p>
                      A Flutter & Firebase-powered shared task management
                      application with a sleek, terminal-inspired UI. It
                      features secure user authentication, detailed user
                      profiles, efficient friend management, and collaborative
                      todo lists that update in real time.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        Flutter
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Firebase
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Dart
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Mobile
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/learnit.png"
                      alt="LearnIT"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      LearnIT - AI-Powered Learning Companion
                    </div>
                    <div>
                      <a
                        href="https://github.com/PERSEUS-1337/LearnIT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                    </div>
                    <p>
                      An AI-driven learning tool using Text Segmentation and
                      Contextual Condensing (TSCC) for smart document analysis
                      and retrieval. Features PDF processing, RAG querying, and
                      seamless deployment on DigitalOcean and Vercel.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        JavaScript
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Python
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Next.js
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        FastAPI
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        ChromaDB
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        LangChain
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        OpenAI
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/elemental-odyssey.png"
                      alt="Elemental Odyssey"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      Elemental Odyssey - Java Platformer Game
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://github.com/PERSEUS-1337/Elemental-Odyssey-CMSC137"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                    </div>
                    <p>
                      A custom Java-based platformer with an in-house physics
                      engine, map editor, and multiplayer support using socket
                      programming over LAN.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        Java
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/webgl.png"
                      alt="Random Terrain Generator"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      Random Terrain Generator - WebGL
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://github.com/PERSEUS-1337/WebGL-random-terrain-generator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                      <a
                        href="/webgl-project/index.html"
                        className="btn btn-sm btn-info btn-outline rounded-md"
                      >
                        Demo
                      </a>
                    </div>
                    <p>
                      A procedural terrain generator that creates unique
                      landscapes using real-time 3D rendering, designed for
                      interactive web-based visualization.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        JavaScript
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        WebGL
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/philmach.png"
                      alt="PHILMACH"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      PHILMACH - Online Registration System
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://github.com/PERSEUS-1337/philmach-online-registration"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                    </div>
                    <p>
                      An automated event registration system integrating Google
                      Forms & Sheets API for participant management. Features QR
                      code generation, email notifications, and on-site
                      check-in.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        Google Sheets API
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Google Forms
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Python
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/urshrt.png"
                      alt="URSHRT"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      URSHRT - Custom T-Shirt Generator
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://www.urshrt.com/"
                        className="btn btn-sm btn-info btn-outline rounded-md"
                      >
                        Demo
                      </a>
                    </div>
                    <p>
                      An online store allowing users to design and order custom
                      t-shirts via an intuitive interface with Shopify API
                      integration.
                    </p>

                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        Next.js
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        React.js
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        TailwindCSS
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Shopify API
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        JavaScript
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        TypeScript
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Vercel
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="card shadow-xl rounded-md">
                  <figure>
                    <Image
                      src="/images/projects/reaction-time.png"
                      alt="Reaction-Time Based Web Research Application"
                      // layout="responsive"
                      width={1920}
                      height={1080}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title">
                      Reaction-Time Based Web Research Application
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href="https://github.com/PERSEUS-1337/reaction-time"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary btn-outline rounded-md"
                      >
                        Repo <FaGithub size={24} />
                      </a>
                    </div>
                    <p>
                      Developed for an Industrial Engineering student thesis,
                      this tool collects and analyzes reaction time data in real
                      time. It leverages Google Sheets API for automated data
                      storage and cost-efficient deployment via Heroku.
                    </p>
                    <div className="card-actions justify-end italic">
                      <div className="badge badge-sm badge-outline badge-info">
                        Express.js
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Node.js
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Google Sheets API
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        JavaScript
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Heroku
                      </div>
                      <div className="badge badge-sm badge-outline badge-info">
                        Papertrail
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="bg-gray-50 py-20 scroll-mt-14">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <p>
                    Python, JavaScript, TypeScript, HTML, C, SQL, Dart, Java
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <p>
                    MERN, NextJS, Google API, Wordpress, cPanel, VectorDBs,
                    LangChain, OpenAI, StreamLit, React Native Expo, Django Rest
                    Framework
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Soft Skills</h3>
                  <p>
                    Attention to Detail, Project &amp; Time Management,
                    Effective Communication, Proactive, Adaptive
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
