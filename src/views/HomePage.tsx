import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/calendar')
    }, [])

    return (
        <section>
        </section>
    );
};