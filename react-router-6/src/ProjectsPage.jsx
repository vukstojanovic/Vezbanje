import Projects from "./Projects";
import MyProjects from "./MyProjects";

function ProjectsPage({ currentRole }) {
  if (localStorage.getItem("role") === "admin") {
    return <Projects />;
  }

  if (localStorage.getItem("role") === "manager") {
    return <MyProjects />;
  }
}

export default ProjectsPage;
