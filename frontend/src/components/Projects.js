import React from "react";
import {Link} from "react-router-dom";

const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                <Link className="text-decoration-none text-dark" to={`/projects/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={()=>deleteProject(project.id)}>X</button>
            </td>
        </tr>
    );
};

const ProjectList = ({projects, deleteProject}) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Проект</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
