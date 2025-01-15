import ProjectLogo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelectd({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="h-16 w-16 object-contain mx-auto"
        src={ProjectLogo}
        alt="note logo"
      />
      <h2 className="text-stone-500 font-bold text-xl my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 ">
        Select a project or get started with a new one
      </p>
      <Button onClick={onAddProject}>Create new project</Button>
    </div>
  );
}
