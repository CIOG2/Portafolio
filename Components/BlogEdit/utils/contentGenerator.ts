import { templatePermanent, templateButton } from "constants/constans";
import { uploadImage } from "./uploadImage";

const contentGenerator = async () => {
    const articleNodeList: any = document.querySelectorAll('.articles-container');

    if(articleNodeList !== null){
        const elements = [...articleNodeList]

        const JSON = await Promise.all(
            elements.map( async (article) => {
            
                const title = article.querySelector('h3').textContent;
                const index = article.querySelector('h3').dataset.index;
                const content = article.querySelector('textarea').value;
                
                const permanentTempleteNames = templatePermanent.map( e => e.title.toUpperCase())
                let data: any;
                
                
                data = (permanentTempleteNames.includes(title))
                ? { ...templatePermanent[index] }
                : { ...templateButton[index] }
                    
                if (title === 'IMAGEN PRINCIPAL' || title === 'IMAGEN')
                    data.content = await uploadImage(article);
                else if(title === 'CATEGORIA' || title === 'LISTA')
                    data.content = content.split(`\n`);
                else
                    data.content = content;
                
    
                return data;
            })    
        )
        return JSON;
    }
}

export { contentGenerator }