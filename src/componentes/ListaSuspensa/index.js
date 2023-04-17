import './css'

const ListaSuspensa = (props) => {
    return (

        <div className='listaSuspensa'>
            <label className='listaSuspensa__label'>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} className='listaSuspensa__select' requered={props.required}>
                <option value=''> </option>
                {props.item.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa