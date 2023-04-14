import './css'

const ListaSuspensa = (props) => {
    return (

        <div className='listaSuspensa'>
            <label className='listaSuspensa__label'>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} className='listaSuspensa__select' requered={props.required}>
                {props.item.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa