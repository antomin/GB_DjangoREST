import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repoUrl}</td>
        </tr>
    );
};

const ProjectList = ({projects}) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Проект</th>
                    <th>Репозиторий</th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project) => <ProjectItem project={project}/>)}
                </tbody>
            </table>
        </div>

    );
};

export default ProjectList;
