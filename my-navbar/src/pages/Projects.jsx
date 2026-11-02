import Navbar from "../components/Navbar";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">
      {/* Navbar already exists in App.jsx; keeping this to avoid layout jumps if you remove it later. */}
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-20">
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-7">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of the projects I have worked on, showcasing my skills in frontend development and modern UI design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Project Card 1 */}
          <div className="group bg-[#020617] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="overflow-hidden">
              <img
                src={project3}
                alt="Cafe Website"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                A responsive Portfolio Website built with React and Tailwind CSS, featuring smooth animations, dynamic content, and sections to showcase skills and projects.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {['React', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-4 py-1.5 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://mellifluous-liger-199647.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>


          {/* Project Card 2 */}
          <div className="group bg-[#020617] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="overflow-hidden">
              <img
                src={project2}
                alt="Food Ordering Website"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-semibold mb-3">Food Ordering Website</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                A responsive Coffee Shop Website built with HTML, CSS, and JavaScript, featuring interactive sections, smooth UI, contact form, and social media integration to enhance user engagement.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-4 py-1.5 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://food-cafe-websi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>


          {/* Project Card 3 */}
          <div className="group bg-[#020617] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="overflow-hidden">
              <img
                src={project1}
                alt="Portfolio Website"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-semibold mb-3">Employee Management System</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Developing a MERN Stack Employee Management System to manage employee data with a responsive and user-friendly interface.

              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-4 py-1.5 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;

