import { contentGenerator } from "./contentGenerator";
import { subTopic } from "./subTopic";
import { uploadImage } from "./uploadImage";
import { allImagesReadyToUpload } from "./allImagesReadyToUpload"

const generatorJSON = async () => {

    const title = <HTMLTextAreaElement>document.getElementById('Titulo');
    const image = <HTMLTextAreaElement>document.getElementById('Imagen-Principal');
    const resume = <HTMLTextAreaElement>document.getElementById('Resumen');
    const category = <HTMLTextAreaElement>document.getElementById('Categoria');
    let Iblog = {};

    const nodesOK = [title, image, resume, category].every((e) => e !== null);

    if (nodesOK && allImagesReadyToUpload()) {
        const elementWithValue = [title.value, resume.value, category.value].every((e) => e !== "")
        
        if (elementWithValue) {
            Iblog = {
                category: category.value.split(`\n`),
                title: title.value,
//                mainContent: JSON.stringify(contentGenerator()),
                mainContent: await contentGenerator(),
                image: await uploadImage(image),
                subtopics: subTopic(),
                resume: resume.value
            }
            console.log(Iblog);
        } else {
            alert('Faltan campos por rellenar')
        }
    }

}

export { generatorJSON }