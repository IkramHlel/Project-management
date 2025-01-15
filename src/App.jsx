import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelectd from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const handleAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  const handleCancel = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleSaveProject = (project) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, { id: Math.random(), ...project }],
      };
    });
  };
  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };
  const handleDeleteProject = (selectedProjectId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== selectedProjectId
        ),
      };
    });
  };
  const handleAddTask = (task) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      return {
        ...prevState,
        tasks: [
          ...prevState.tasks,
          { id: taskId, text: task, projectId: prevState.selectedProjectId },
        ],
      };
    });
  };
  const handleDeleteTask = (taskId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const projectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectTasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleSaveProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelectd onAddProject={handleAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelect={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
