import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './css'




const Formulario = () => {

    const [nome, SetNome] = useState ('')
    const [cargo, SetCargo] = useState ('')
    const [imagem, SetImage] = useState ('')
    const [time, SetTime] = useState ('')


    
    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        console.log('Form foi submetido', nome, cargo,imagem, time)
    }
    

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} className='formulario__form'>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto
                 label="Nome" 
                 placeholder="Digite seu nome"  
                 obrigatorio={true}
                 valor={nome}
                 aoAlterado={valor => SetNome (valor)}
                 />
                <CampoTexto
                 label="Cargo" 
                 placeholder="Digite seu cargo" 
                 obrigatorio={true}
                 valor={cargo}
                 aoAlterado={valor => SetCargo (valor)}
                 />
                <CampoTexto
                 label="Imagem" 
                 placeholder="Digite o endereço da imagem" 
                 valor={imagem}
                 aoAlterado={valor => SetImage (valor)}
                 />
                <ListaSuspensa 
                label="Time"
                item={times} 
                obrigatorio={true}
                valor={time}
                aoAlterado={valor => SetTime (valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario