import { CSSProperties, useEffect, useRef, useState } from 'react';
import selectArrowIcon from '../icons/select-arrow.png';
import { theme } from '../theme';

interface Item {
    id: string;
    title: string;
}

interface SelectProps {
    values: Item[];
    value: string;
    onChange: (id: string) => void;
}

export const Select = (props: SelectProps) => {
    const { values, value, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [openToRight, setOpenToRight] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = (id: string) => {
        onChange(id);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const dropdownWidth = 150;

            if (rect.left - dropdownWidth < 0) {
                setOpenToRight(true);
            } else {
                setOpenToRight(false);
            }
        }
    }, [containerRef]);

    const selectedItem = values.find((item) => item.id === value) as Item;

    return (
        <div ref={containerRef} style={styles.container}>
            <div onClick={() => setIsOpen(!isOpen)} style={styles.selectedValue}>
                <span>{selectedItem.title}</span>
                <img style={styles.arrowIcon} src={selectArrowIcon} alt="Arrow" />
            </div>
            {isOpen && (
                <div
                    style={{
                        ...styles.optionsContainer,
                        left: openToRight ? '0px' : 'auto',
                        right: openToRight ? 'auto' : '0px',
                    }}
                >
                    {values.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleSelect(item.id)}
                            style={styles.option}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#eaeaea')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#f9f9f9')}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        zIndex: 5,
        position: 'relative',
        width: 'fit-content',
    },
    selectedValue: {
        border: `1px solid ${theme.borderColor}`,
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
    },
    optionsContainer: {
        marginTop: '5px',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        background: 'white',
        width: '150px',
        position: 'absolute',
    },
    option: {
        padding: '10px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    arrowIcon: {
        width: '8px',
        marginInlineStart: '12px',
    },
};
