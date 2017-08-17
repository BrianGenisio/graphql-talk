
let nextId = 0;
const projects = [];

function getProjects() {
    return Promise.resolve(projects);
}

function getProject(id) {
    return Promise.resolve(projects.find(p => p.id === id))
}

function createProject(name) {
    const project = {
        id: (nextId++).toString(),
        name: name,
    };

    projects.push(project);

    return Promise.resolve(project);
}

module.exports = {
    getProjects,
    getProject,
    createProject,
};
