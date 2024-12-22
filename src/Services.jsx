import { useEffect, useState } from "react";
import "./Services.css";

const projectLinks = [
  {
    repoName: "Remedic",
    liveLink: "https://remedic.vercel.app",
  },
  {
    repoName: "Alt-Exam",
    liveLink: "https://alt-exam-livid.vercel.app/",
  },
  {
    repoName: "vue-project",
    liveLink: "https://vue-project-sigma-steel.vercel.app/",
  },
  {
    repoName: "Assignment-2",
    liveLink: "https://assignment-2-pi-five.vercel.app/",
  },
  {
    repoName: "Assignment-2",
    liveLink: "https://alt-exam-livid.vercel.app/",
  },
  {
    repoName: "Assignment-3",
    liveLink: "https://assignment-3-smoky-five.vercel.app/",
  },
  {
    repoName: "Pagination",
    liveLink: "https://pagination-indol-rho.vercel.app/",
  }
];

function Services() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Aderemi90/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        const mappedProjects = data
          .filter((repo) =>
            projectLinks.some((link) => link.repoName === repo.name)
          )
          .map((repo) => {
            const match = projectLinks.find(
              (link) => link.repoName === repo.name
            );
            return {
              title: repo.name,
              description: repo.description || "No description provided.",
              githubLink: repo.html_url,
              liveLink: match?.liveLink || "",
            };
          });

        setProjects(mappedProjects);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="services-container">
      <h1>My Services</h1>
      <p>
        Explore some of the projects I have built to deliver impactful solutions. Check out live 
        demos and source code for a deeper dive into my work.
      </p>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Services;