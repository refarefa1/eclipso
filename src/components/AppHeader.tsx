import { CSSProperties, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { useParams } from "../hooks/useParams";
import { useIntl } from "../hooks/useIntl";
import { CONSTANTS } from "../utils/Constants";
import { Select } from "./Select";
import { BurgerIcon } from "./BurgerIcon";
import { Avatar } from "./Avatar";

export const AppHeader = () => {

    const navigate = useNavigate();
    const { view, params } = useParams()
    const intl = useIntl();

    useEffect(() => {
        params.set('view', view)
        navigate({ search: params.toString() });
    }, [])


    const handleViewTypeChange = (week: string) => {
        params.set('view', week)
        navigate({ search: params.toString() });
    };

    const values = useMemo(() => {
        return [CONSTANTS.DAY, CONSTANTS.WEEK, CONSTANTS.MONTH].map(dateType => {
            return {
                id: dateType,
                title: intl.format(`dates.${dateType}`)
            }
        })
    }, [])


    return (
        <header style={styles.header}>
            <section>
                <BurgerIcon />
            </section>
            <section style={styles.leftSection}>
                <Select values={values} value={view} onChange={handleViewTypeChange} />
                <Avatar initials="ר" />
            </section>
        </header>
    )
}

const styles: { [key: string]: CSSProperties } = {
    header: {
        display: 'flex',
        alignItems: 'center',
        height: theme.headerHeight,
        borderBottom: `1px solid ${theme.borderColor}`,
        paddingInline: '8px',
        justifyContent: 'space-between'
    },
    leftSection: {
        display: 'flex',
        alignItems:'center',
        gap:'8px'
    }

}

