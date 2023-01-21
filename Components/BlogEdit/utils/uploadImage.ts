import { uploadFile } from "@database/firebaseConfig"


const uploadImage = async (node: any) => {
    const input = node.querySelector('input');
    const descriptionALT = node.querySelector('textArea');
    const containerDataImage = node.querySelector('.container-metadatos');
        

    //Si las siguientes condiciones se cumplen se reutilizan los valores de la imagen y no se vuelve a subir
    if(containerDataImage.dataset.imagevalue){
        let imageValue = JSON.parse(containerDataImage.dataset.imagevalue);
        
        if (typeof(imageValue) === 'object')
            return imageValue                
    }


    //Si las condiciones de arriba no se cumple se sube imagen
    const image = await uploadFile(input.files[0]);
    return{
        ...image,
        alt: descriptionALT.value
    }
}

export { uploadImage }