import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState([]);

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);
  return (
    <>
      <ul>
        { tech.map((techs) => (<li key={techs}>{techs}</li>))}
      </ul>
      <strong>
        Você tem
        {' '}
        {techSize}
        {' '}
        tecnologias
      </strong>
      <br />
      <input value={newTech} onChange={(event) => setNewTech(event.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
