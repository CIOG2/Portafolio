import Styles from './styles.module.scss';
import { FC } from "react";
import Image from 'next/image';


interface Prop {
    value: string;
    url: string;
    icon: string;
    target: boolean;
}

const List: FC<Prop> = ({value, url, icon, target}) => {
    return(
        <li className = {Styles['LI']}>
            <Image
                src={icon}
                alt={value}
                width={20}
                height={20}
                
            />

            {
                (target)
                ?(
                    <a 
                        href = {url}
                        rel = 'noopener noreferrer'
                        target = '_blank'
                    >
                        {value}
                    </a>
                )
                :(
                    <a href = {url}
                    >
                        {value}
                    </a>
                )            
            }
        </li>
    )
}

export default List;