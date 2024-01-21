import ProjectDetail from "../projects/ProjectDetail";

export default function Portfolio() {
  const projectList = [
    {
      id:1,
      name:"Weather Dashboard",
      deployedUrl:"https://amethystlyre.github.io/Weather-dashboard/",
      githubLink: "https://github.com/amethystlyre/Weather-dashboard",
      techType:"Javascript/API",
      imgSrc:"src/assets/main_project.jpg"
    },
    {
      id:2,
      name:"Tech Blog",
      deployedUrl:"https://tech-blog-site-2023-38e4d227d305.herokuapp.com/",
      githubLink: "https://github.com/amethystlyre/Tech-Blog",
      techType:"Express/Sequelize/HandleBars",
      imgSrc:"src/assets/main_project.jpg"
    },
    {
      id:3,
      name:"Text Editor",
      deployedUrl:"https://jate-pwa-13012024-9d9b4c1d61ce.herokuapp.com/",
      githubLink: "https://github.com/amethystlyre/Text-Editor-PWA",
      techType:"Progressive Web app",
      imgSrc:"src/assets/main_project.jpg"
    },
    {
      id:4,
      name:"Travel packing app",
      deployedUrl:"https://travel-packing-app-0c97b9ac0fdb.herokuapp.com/",
      githubLink: "https://github.com/amethystlyre/Travel-packing-app",
      techType:"Express/Sequelize/Node JS",
      imgSrc:"src/assets/main_project.jpg"
    },
    {
      id:5,
      name:"Currency Exchange project",
      deployedUrl:"https://amethystlyre.github.io/Currency-Exchange-project/",
      githubLink: "https://github.com/amethystlyre/Currency-Exchange-project",
      techType:"JS/HTML/Bulma",
      imgSrc:"src/assets/main_project.jpg"
    },
    {
      id:6,
      name:"Social-Network-API",
      deployedUrl:"#",
      githubLink: "https://github.com/amethystlyre/Social-Network-API-NoSQL",
      techType:"Express/Mongoose/MongoDB",
      imgSrc:"src/assets/main_project.jpg"
    }

  ]



  return (
    <div>
      <h1>Amethyst</h1>
      <h2>Portfolio</h2>
      <div className="project-list">
      {projectList.map(project=> (
            <ProjectDetail key={project.id} {...project}/>
          ))} 
      </div>
    </div>
  );
}
