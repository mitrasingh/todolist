import { Task } from "../Types";

type TodoTaskProps = {
	task: Task;
};

export const TodoTask = ({ task }: TodoTaskProps) => {
	return (
		<div>
			{task.taskName} {task.deadline}
		</div>
	);
};
