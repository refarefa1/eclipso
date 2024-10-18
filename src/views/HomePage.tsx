import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // navigate('/calendar')
    }, [])

    return (
        <section style={{ height: '100%' , display:'flex',}}>


            <div style={{ width: '210px', background: 'red', left: '200px', position:'relative',height: '100%'}}></div>
            <div style={{ display: 'flex', position:'relative', background: 'blue', flexGrow: 1 }}>
                
            </div>
        </section>
    );
};