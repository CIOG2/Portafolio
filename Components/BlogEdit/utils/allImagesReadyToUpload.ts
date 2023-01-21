const allImagesReadyToUpload = () => {

    const containerImagesNodeList: any = document.querySelectorAll('.container--node-images');
    const nodesImages = [...containerImagesNodeList];
    
    //Boolean Array
    const nodesReadys = nodesImages.map(( item: HTMLElement )=>{
        const input = <HTMLInputElement>item.querySelector('input');
        const descriptionALT = <HTMLTextAreaElement>item.querySelector('textArea');
        const containerDataImage = <HTMLDivElement>item.querySelector('.container-metadatos');
    


        if (input !== null && descriptionALT !== null && containerDataImage !== null) {

            if(containerDataImage.dataset.imagevalue){
                let imageValue = JSON.parse(containerDataImage.dataset.imagevalue);
                
                if (typeof(imageValue) === 'object')
                    return true                
            }            

            if (input.files !== null) {
            
                if (input.files.length === 0 || descriptionALT.value === '') {
                    descriptionALT.style.backgroundColor = "red";
                    return false;
                }

                descriptionALT.style.backgroundColor = "white"
                return true;
            }
        }
    });


    if (nodesReadys.every((item) => item === true)) 
        return true


    alert("Faltan por agregar algunos elementos para las imagenes")
    return false;    
}

export { allImagesReadyToUpload }