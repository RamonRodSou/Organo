import Colaborador from '../Colaboradores'
import './Time.css'

const Time = (props) => {

    const corPrimaria = {backgroundColor: props.corPrimaria}

    return (

       (props.colaboradores.length > 0) &&  <section className='time' style={corPrimaria}> 
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} corDeFundo={props.corSecundaria} />)}
            </div>
        </section>

        // (props.colaboradores.length > 0) ?  <section className='time' style={corPrimaria}> 
        //     <h3 style={{borderColor: props.corSegundaria}}>{props.nome}</h3>
        //     <div className='colaboradores'>
        //         {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} />)}
        //     </div>
        // </section>

        // : ''
    )
}

export default Time 