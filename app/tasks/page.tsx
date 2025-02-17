import React from "react";

const TaskPage = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks = await response.json();

  console.log("tasks:", tasks);

  return <div>TaskPage</div>;
};

export default TaskPage;
