import {Task} from "../../../entities/Task";

const Tasks = () => {
    return(
        <Task
            title="Test"
            description="Test task description"
            rewards={10}
            workers={500}
            platform="test"
        />
    )
}
export default Tasks;