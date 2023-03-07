import { ChangeEvent, useState } from 'react';
import { useForm } from './hooks/useForm';
import getAmount from './helpers/getAmount';
import './App.css';
import { InputCard } from './components/InputCard';

function App() {
  const [quantity, setQuantity] = useState<string>('0.00');
  const { values, handleInputChange } = useForm({
    start: '09:00',
    end: '09:00',
    start2: '00:00',
    end2: '00:00',
  });
  const { start, end, start2, end2 } = values;

  const handleCalculate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const amountInTime: string | undefined = getAmount(start, end, start2, end2);

    ( amountInTime && amountInTime !== 'NaN' ) 
      ? setQuantity( amountInTime )
      : alert('Horas incorrectas')
  }

  return (
    <div>
      <form>
        <InputCard 
          titleStart={ 'Inicio' }
          titleEnd={ 'Final' }
          nameStart={ 'start' }
          valueStart={ start }
          nameEnd={ 'end' }
          valueEnd={ end } 
          handleInputChange={ handleInputChange }
        />

        <InputCard 
          titleStart={ 'Inicio 2' }
          titleEnd={ 'Final 2' }
          nameStart={ 'start2' }
          valueStart={ start2 }
          nameEnd={ 'end2' }
          valueEnd={ end2 } 
          handleInputChange={ handleInputChange }
        />
      </form>
      <div className="card">
        <button onClick={ handleCalculate }>
          Calcular cantidad
        </button>

        <p className='quantity'>Cantidad a facturar: <b>{ quantity }</b></p>
      </div>
    </div>
  )
}

export default App
