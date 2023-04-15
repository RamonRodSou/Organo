import './Time.css'

const Time = (props) => {

    const corPrimaria = {backgroundColor: props.corPrimaria}

    return (

        <section className='time' style={corPrimaria}> 
            <h3 style={{borderColor: props.corSegundaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time