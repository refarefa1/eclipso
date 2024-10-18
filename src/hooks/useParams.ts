import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CONSTANTS } from "../utils/Constants";

const DEFAULT_VIEW = CONSTANTS.MONTH;

export const useParams = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const view = useMemo(() => {
        return params.get('view') || DEFAULT_VIEW
    }, [params.get('view')])

    return { view , params};
}