import { CSSProperties } from "react";
import { theme } from "../theme";

type AvatarProps = {
    initials: string;
};

export const Avatar = (props: AvatarProps) => {
    const { initials, } = props;

    return <section style={styles.avatarContainer}>
        <div style={styles.avatar}>{initials}</div>
    </section>;
};


const styles: { [key: string]: CSSProperties } = {
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48px',
        height: '48px',
        cursor: 'pointer'
    },
    avatar: {
        width: '32px',
        height: '32px',
        fontSize: '18px',
        textTransform: 'uppercase',
        borderRadius: '50%',
        backgroundColor: theme.avatarDefaultColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',

    },


}
