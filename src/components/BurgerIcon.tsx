import { CSSProperties } from "react";
import { theme } from "../theme";
import useHover from "../hooks/useHover";
import { SessionStorage } from "../services/SessionStorage";

export const BurgerIcon = () => {
    const { isHovering, hoverProps } = useHover();

    const toggleSidebar = () => {
        const isSidebarOpen = SessionStorage.get('isSidebarOpen');
        SessionStorage.set('isSidebarOpen', !isSidebarOpen)
    }

    return (
        <div
            onClick={toggleSidebar}
            {...hoverProps}
            style={{ ...styles.container, backgroundColor: isHovering ? theme.borderColor : 'white' }}>
            <div style={styles.line} className="line" />
            <div style={styles.line} className="line" />
            <div style={styles.line} className="line" />
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        width: '48px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '48px',
        gap: '3px',
        borderRadius: '50px',
    },
    line: {
        height: '2px',
        backgroundColor: '#333',
        width: '18px',
        transition: 'background-color 0.3s ease',
    },
};