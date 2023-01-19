import 'bulma/css/bulma.css';
import React, { useState } from 'react';

function Vila() {
  const [Inköpspris, setInköpspris] = useState(0);
  const [Kontantinsats, setKontantinsats] = useState(0);
  const [Ränta, setRänta] = useState(0);
  const [Vatten, setVatten] = useState(400);
  const [El, setEl] = useState(1400);
  const [Sopor, setSopor] = useState(500);
  const [Värme, setVärme] = useState(1000);
  const [Amortering , setAmortering ] = useState(30);

  function handleChange(event, setState, inköpspris) {
    if(event.target.name === 'Kontantinsats' && (event.target.value/inköpspris) < 0.15){
      let minKontantinsats = Math.round(inköpspris*0.15);
      alert(`Kontantinsats måste vara minst 15% av Inköpspris, minimum är ${minKontantinsats} kr`)
      setState(minKontantinsats);
    } else {
      setState(event.target.value);
    }
    
  }

  function slutligaKostnaden(){
    let summa = parseInt((Inköpspris - Kontantinsats)/(Amortering*12)) * (1 + Ränta/100);
    let inkschablonv = parseInt(summa + parseInt(Vatten) + parseInt(El) + parseInt(Sopor) + parseInt(Värme));
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

      </div>

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

      <div>
        <input
          type="range"
          min={0}
          max={1000}
          step={100}
          value={Vatten}
          onChange={(e)=> handleChange(e, setVatten)}
        />
        <p>Vatten: {Vatten} kr</p>
        <br />

      </div>
      <div>
        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={El}
          onChange={(e)=> handleChange(e, setEl)}
        />
        <p>El: {El} kr</p>
        <br />

        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={Sopor}
          onChange={(e)=> handleChange(e, setSopor)}
        />
        <p>Sopor: {Sopor} kr</p>
        <br />

        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={Värme}
          onChange={(e)=> handleChange(e, setVärme)}
        />
        <p>Värme: {Värme} kr</p>
        <hr/>

      </div>
      <div>
      <h2 className='is-size-1'>Den slutliga kostnaden: {slutligaKostnaden()} kr/mån</h2>
      </div>
    </div>
    
  );
}

export default Vila;
