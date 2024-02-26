import { Task } from "../Types";

type TodoTaskProps = {
	task: Task;
	completeTask(taskNameToDelete: string): void;
};

export const TodoTask = ({ task, completeTask }: TodoTaskProps) => {
	return (
		<div className="task">
			<div className="content">
				<span>{task.taskName}</span>
				<span>{task.deadline}</span>
			</div>
			<button onClick={() => completeTask(task.taskName)}>X</button>
		</div>
	);
};
