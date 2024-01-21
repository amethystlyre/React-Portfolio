export default function ProjectDetail(props) {
    const { id, name, deployedUrl, githubLink, imgSrc, techType } = props;
    console.log(props)
    return (
        <div className="project">
          <img src= {`${imgSrc}`}/>
          <div className="project-detail">
            <span className="project-name">
            <a
                href={`${deployedUrl}`}
                target="_blank"
                rel="noreferrer"
              >Weather Dashboard</a>
              <a
                className="project-link"
                href={`${githubLink}`}
                target="_blank"
                rel="noreferrer"
              ></a>
            </span>
            <span className="project-type">{`${techType}`}</span>
          </div>
        </div>
    );
  }
  