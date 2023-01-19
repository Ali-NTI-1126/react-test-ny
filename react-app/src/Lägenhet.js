import 'bulma/css/bulma.css';
import React, { useState } from 'react';

function Lägenhet() {
  const [Inköpspris, setInköpspris] = useState(0);
  const [Kontantinsats, setKontantinsats] = useState(0);
  const [Ränta, setRänta] = useState(0);
  const [Avgift, setAvgift] = useState(0);
  const [Övrigt, setÖvrigt] = useState(0);
  const [Amortering , setAmortering ] = useState(30);

  function handleChange(event, setState, inköpspris) {
    if(event.target.name === 'Kontantinsats' && (event.target.value/inköpspris) < 0.15){
      let minKontantinsats = Math.round(inköpspris*0.15);
      alert(`Kontantinsats måste vara minst 15% av Inköpspris, minimum är ${minKontantinsats} kr`)
      setKontantinsats(minKontantinsats);
    } else {
      setState(event.target.value);
    }
  }

  function slutligaKostnaden(){
    let summa = parseInt((Inköpspris - Kontantinsats)/(Amortering*12)) * (1 + Ränta/100);
    let inkschablonv = parseInt(summa + parseInt(Avgift) + parseInt(Övrigt));
    return inkschablonv;
}

  return (
    <div className='has-text-centered box'>
        <h1 className='title'>Vad kommer ditt hem att kosta?</h1>
    
      <div>
        <input
          type="range"
          min={0}
          max={20000000}
          step={25000}
          value={Inköpspris}
          onChange={(e)=> handleChange(e, setInköpspris)}
        />
        <p>Inköpspris: {Inköpspris} kr</p>
        <br />

      </div>
      <div>
      <input
        type="range"
        name='Kontantinsats'
        min={0}
        max={5000000}
        step={10000}
        value={Kontantinsats}
        onChange={(e)=> handleChange(e, setKontantinsats, Inköpspris)}
        />


        <p>Kontantinsats: {Kontantinsats} kr</p>
        <br />

      </div>
      <div>
        <input
          type="range"
          min={0}
          max={15}
          step={0.1}
          value={Ränta}
          onChange={(e)=> handleChange(e, setRänta)}
        />
        <p>Ränta: {Ränta} %</p>
        <br />


        <div>
        <input
          type="range"
          min={2}
          max={60}
          step={1}
          value={Amortering }
          onChange={(e)=> handleChange(e, setAmortering )}
        />
        <p>Amortering : {Amortering } år</p>
        <br />
        </div>

      </div>
      <div>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={Avgift}
          onChange={(e)=> handleChange(e, setAvgift)}
        />
        <p>Avgift: {Avgift} kr</p>
        <br />

        
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={Övrigt}
          onChange={(e)=> handleChange(e, setÖvrigt)}
        />
        <p>Övrigt: {Övrigt} kr</p>
        <hr />

      </div>
      <div>
      <h2 className='is-size-1'>Den slutliga kostnaden: {slutligaKostnaden()} kr/mån</h2>
      </div>
    </div>
  );
}

export default Lägenhet;
