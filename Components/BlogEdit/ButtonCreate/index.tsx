import Styles from './styles.module.scss';
import { FC } from 'react';
import { templateButton } from '../../../constants/constans';
import { TemplateDocument } from '@interfaces/template';


interface Props {
  template: TemplateDocument[];
  setTemplate: any;
  title: string;
  tag: string[];
  color: string;
  content: string;
  id: number;
}

const ButtonCreate: FC<Props> = ({template, setTemplate, title, tag, color, content, id}) => {
  
  const addTemplate = (id: number) => {  
    const obj: TemplateDocument = {
        title: templateButton[id].title,
        color: templateButton[id].color,
        tag: templateButton[id].tag,
        permanent: templateButton[id].permanent,
        content: templateButton[id].content,
        id: templateButton[id].id,
    }
 
    setTemplate([...template, obj]);
  }
  
  return (
    <button 
      className={`${Styles["draw-border"]} ${Styles["button"]}`}
      onClick = {()=> addTemplate(id)}
    >
        {title}
    </button>
  )
}

export default ButtonCreate;