import React, { useState } from 'react';
import '../App.css';
import { db } from '../firebase';

const Input = () => {
  const [date, setDate] = useState('');
  const [vax, setVax] = useState('');
  const [unVax, setUnVax] = useState('');
  const [unKnown, setUnKnown] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('inputs')
      .add({
        date: date,
        vax: vax,
        unVax: unVax,
        unKnown: unKnown,
      })
      .then(() => {
        alert('Andmed sisestatud');
      })
      .catch((error) => {
        alert(error.message);
      });

    setDate('');
    setVax('');
    setUnVax('');
    setUnKnown('');
  };

  return (
    <form clasName="form" onSubmit={handleSubmit} className="flex flex-col">
      <h2 className="text-2xl">Sisesta andmed:</h2>

      <label>Kuupäev</label>
      <input
        className="text-pink-500 p-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        className="text-pink-500 p-2"
        placeholder="Vaktsineeritud"
        value={vax}
        onChange={(e) => setVax(e.target.value)}
      />

      <input
        className="text-pink-500 p-2"
        placeholder="Vaktsineerimata"
        value={unVax}
        onChange={(e) => setUnVax(e.target.value)}
      />

      <input
        className="text-pink-500 p-2"
        placeholder="Teadmata"
        value={unKnown}
        onChange={(e) => setUnKnown(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        type="submit"
      >
        Saada
      </button>
    </form>
  );
};

export default Input;
