import { CSSProperties } from "react";
import { useIntl } from "../hooks/useIntl";
import PlusIcon from '../icons/plus3.png';
import { theme } from "../theme";

export const AddTask = () => {
    const intl = useIntl();

    return (
        <section style={styles.container}>
            <img style={{ width: '25px', marginInlineEnd: '12px' }} src={PlusIcon} alt="Add task"></img>
            <button style={styles.button}>{intl.format('calendar.addTask')}</button>
        </section>
    )
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        width: '162px',
        height: '48px',
        marginTop: '12px',
        marginBottom: '8px',
        boxShadow: '0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: theme.blueTodayColor,
        color: 'white',
        paddingInline: '14px'
    },

    button: {
        fontSize: '14px'
    }

}
