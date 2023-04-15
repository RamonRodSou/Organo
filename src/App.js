
import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programação' ,
      corPrimaria: '#D9F7E9',
      corSegundaria: '#57C278'
    },
    {
      nome:'Front-End',
      corPrimaria: '#E8F8FF',
      corSegundaria: '#82CFFA'
    },
    {
      nome:'Data Science',
      corPrimaria: '#F0F8E2',
      corSegundaria: '#A6D157'
    },
    {
      nome:'Devops',
      corPrimaria: '#FDE7E8',
      corSegundaria: '#E06B69'
    },
    {
      nome:'Ux e Design',
      corPrimaria: '#FAE9F5',
      corSegundaria: '#DB6EBF'
    },
    {
      nome:'Mobile',
      corPrimaria: '#FFF5D9',
      corSegundaria: '#FFBA05'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSegundaria: '#FF8A29'
    }
  ]

  const [colaboradores, setColaborador] = useState ([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaborador(...colaboradores, colaborador)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSegundaria={time.corSegundaria}/> )}



    </div>

  );
}

export default App;
