import { useRef, FC } from "react";
import Styles from './Styles.module.scss';

interface Props {
    letter: string;
    index: number;
}

const EfectText: FC<Props> = ({ letter, index }) => {

    const letterRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

    setTimeout(() => {
        const elemento = letterRef.current;
        if (elemento) {
            setTimeout(() =>{
                elemento.classList.add(Styles.animation);                
            },150 * index )
        }        
    } , 0);

    return (
        <span
            ref={letterRef}
            className={Styles.title}
        >
            {letter}
        </span>
    )
}

export { EfectText }