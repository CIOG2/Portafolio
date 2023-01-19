import Styles from './styles.module.scss';
import { FC, useRef } from 'react';
import { json } from 'stream/consumers';

interface Prop {
    title: string;
    content: string;
}

const LoadImage: FC<Prop> = ({ title, content }) => {

    let divColor = useRef<any>(null)
    let inputFile = useRef<HTMLInputElement>(null)
    let imagePreview = useRef<HTMLImageElement>(null)
    
    //Se crean las propiedades para reutilizar el contenido si es que el blog se va a editar
    let objeto: any = "";
    let url = ""
    let valueAlt = ""

    if(content !== ""){
        const obj = JSON.parse(content)
        objeto = obj;
        url = obj.url;
        valueAlt = obj.alt;
    }

    const changeColor = () => {
        const div = divColor.current;
        const input = inputFile.current;
        const image = imagePreview.current;
        
        
        if(image !== null)
            image.remove();


        
        if (div !== null && input !== null ) {
            div.dataset.imagevalue = `""`;
            if (input.files !== null) 
                (input.files.length >= 1)
                ? div.style.backgroundColor = "#0091ff" //Azul cielo
                : div.style.backgroundColor = "#242a35" //Gris oscuro
        }
    }

    return(
        <div 
            className = {`${Styles['container--image']} container--node-images`}
            id = {title.split(" ").join("-")}
        >
            <button 
                className = {Styles['download-button']}
            >
                <input 
                    className = {Styles['FILE']}
                    type="file" 
                    accept="image/*"
                    ref = { inputFile }
                    onChange={ () => changeColor() }
                    />
                <div 
                    className = {`${Styles['image']} container-metadatos`}
                    ref = { divColor }
                    data-imagevalue={JSON.stringify(objeto)}   
                >
                    <svg className = {Styles['svg1']} strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
                    </svg> IMAGEN
                </div>
                <div className = {Styles['download']}>
                    <svg className = {Styles['svg']} strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                </div>
            </button>
            <textarea 
                className = {Styles['container--image-alt']}
                placeholder = {'Descripcion de la imagen'}
                defaultValue = { valueAlt }
            >
            </textarea>
            { objeto !== "" &&(
                <img 
                    className={Styles['previw--image']}
                    src={url} 
                    alt={valueAlt} 
                    ref={imagePreview}
                />
            )}
        </div>
    )
}

export { LoadImage }