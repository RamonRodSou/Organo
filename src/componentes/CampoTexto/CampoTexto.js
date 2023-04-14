import './css'

export const CampoTexto = (props) => {

    //const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo__texto'>
            <label className='campo__texto--label'>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} className='campo__texto--input' placeholder={props.placeholder} required={props.obrigatorio} /> 
        </div>
    )
}

