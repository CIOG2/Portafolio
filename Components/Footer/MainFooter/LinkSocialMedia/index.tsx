import Link from 'next/link';
import { FC } from 'react';
import Styles from './styles.module.scss';


interface Props{
    link: string;
    linkImg: string;
    alt: string;
}

const LinkSocialMedia:FC<Props> = ({link, linkImg, alt}) => {
    return (
        <a 
            href= {link}
            className = {Styles['link']}
            rel = 'noopener noreferrer'
            target = '_blank'   
        >
            <img 
                className = {Styles['image']}
                src={linkImg} 
                alt={`foto de ${alt}`}
            />
        </a>
    );
}
 
export default LinkSocialMedia;