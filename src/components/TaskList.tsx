import { CSSProperties } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { Task } from "./Task";

type TaskListProps = {
    day: number;
}

export const TaskList = (props: TaskListProps) => {
    const { day } = props;

    const { tasks } = useCalendar({ timestamp: day })

    return (
        <section style={styles.container}>
            {tasks.map(task => {
                return <Task key={task.id} description={task.description} />
            })}
        </section>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        marginTop: '12px',
         width: '90%',
          gap: '12px',
           display: 'flex',
            flexDirection: 'column'
         }
  
}
