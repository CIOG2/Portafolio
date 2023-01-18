import type { NextPage } from 'next'
import { useState, useEffect, useRef, FC } from 'react'
import { templateButton, templatePermanent, datosFake } from '../../../constants/constans';
import { generatorJSON } from '@Components/BlogEdit/utils/generatorJSON';
import ButtonCreate from '@Components/BlogEdit/ButtonCreate';
import Template from '@Components/BlogEdit/Template';
import Styles from './styles.module.scss';
import { TemplateDocument } from '@interfaces/template';


const Editor: NextPage = () => {
  
  const [template, setTemplate] = useState<TemplateDocument[]>([]);
  const esEditado = false


  return (
    <main className = {Styles['main']}>
      <section 
        className = {Styles['main__section--text']}
        id = 'CONTAINER-TEPLATES'
      >
        

        { (esEditado)
          ?(
            datosFake.mainContent.map((item: any, index: number) => (
              <Template
                key = {index}
                title = {item.title}
                color = {item.color}
                tag = {item.tag}
                permanent = {item.permanent}
                content = {JSON.stringify(item.content)}
                id= {item.id}
              />
            ))
          )
          :(
              templatePermanent.map((item, index) => (
                <Template
                  key = {index}
                  title = {item.title}
                  color = {item.color}
                  tag = {item.tag}
                  permanent = {item.permanent}
                  content = {item.content}
                  id= {item.id}
                />
              ))
      
          )
        }

       
        {template.map((item, index) =>  (
                <Template
                  key = {index}
                  title = {item.title}
                  color = {item.color}
                  tag = {item.tag}
                  permanent = {item.permanent}
                  content = {item.content}
                  id= {item.id}
                />
              ))  
      }

      </section>
      
      <section className = {Styles['main__section--buttons']}>
        <div className = {Styles['main__section--buttons-container']}>
          
          {templateButton.map((item, index) => {
            return <ButtonCreate
              key = {index}
              template = {template}
              setTemplate = {setTemplate}
              title = {item.title}
              tag = {item.tag}
              color = {item.color} 
              content = {item.content}
              id= {item.id}
            />
          })}

        </div>
        <button 
          className = {Styles['button__generate']}
          onClick = {() => generatorJSON() }
          >
          Generar
        </button>
      </section>
    </main>
  )
}

export default Editor;