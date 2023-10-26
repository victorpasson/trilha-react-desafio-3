import { useState, useEffect, useMemo, useCallback } from "react"
import { Link } from "react-router-dom";

export default function Teste() {
    const [name, setName] = useState('Pablo');
    const [age, setAge] = useState(26);

    const handleChangeName = useCallback(() => {
        console.log('Alterou nome')
        setName(prev => prev === 'Pablo' ? 'José' : 'Pablo')
    }, [])

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('Age atual', newAge)
        setAge(prev => prev === 26 ? 32 : 26)
    }, [age])

    const calculo = useMemo(() => {
      console.log('calculou', age);
      return 10 * age;
    }, [age])
    console.log('Renderizou', calculo)

    //useEffect(() => {
    //  alert('renderizei');
    //  return () => {
    //    alert('desmontei');
    //  }
    //}, [name])

  return (
    <div>
        <p>Idade: {age}</p>
        <p>Nome: {name}</p>
        <button onClick={handleChangeAge}>Alterar Idade</button>
        <button onClick={handleChangeName}>Alterar Nome</button>
        <Link to="/">Home</Link>
    </div>
  )
}
