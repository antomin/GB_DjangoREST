import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                <Link className="text-decoration-none text-dark" to={`/projects/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={()=>deleteProject(project.id)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
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
            <div className="creation-button">
                <Link to='/projects/create' className='btn btn-success'>Новый проект</Link>
            </div>
        </div>
    );
};

export default ProjectList;
