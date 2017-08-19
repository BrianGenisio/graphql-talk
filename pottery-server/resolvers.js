
const {
    getProjects,
    createProject,
} = require("./data.js");

function projectsResolver() {
    return getProjects();
}

function createProjectMutation(params) {
    return createProject(params.name);
}

const root = {
    projects: projectsResolver,

    createProject: createProjectMutation,
};

module.exports = {
    root
};
