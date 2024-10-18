import { CSSProperties } from "react"

type TaskProps = {
    description: string;
}

export const Task = (props: TaskProps) => {
    const { description } = props;
    return (
        <section style={styles.container}>
            <div>{description}</div>
        </section>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        // width: '90%',
        cursor: 'pointer',
        boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px'
    }
}
