import { useEffect, useState } from "react";
import Error from "./Error";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    // ? console.log('Sí hay algo')
    // : console.log('No hay nada');
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacío');
      setError(true)
      return
    }
    setError(false)

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      // Editando registro
      objPaciente.id = paciente.id

      console.log(pacientes);
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      // Nuevo registro
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }

    // console.log(objPaciente);

    // setPacientes([...pacientes, objPaciente])

    // Resetear el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
        <form onSubmit={handleSubmit} action="#" className="bg-white shadow-md rounded py-10 px-5 mx-5">
          { error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label className="block uppercase font-bold text-gray-700" htmlFor="mascota">Nombre Mascota</label>
            <input
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
              type="text" id="mascota"
              placeholder="Nombre de la mascota"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block uppercase font-bold text-gray-700" htmlFor="propietario">Nombre Propietario</label>
            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
              type="text"
              placeholder="Nombre del propietario"
              value={propietario}
              onChange={e => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block uppercase font-bold text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
              type="email"
              placeholder="Email del propietario"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block uppercase font-bold text-gray-700" htmlFor="alta">Alta</label>
            <input
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
              type="date"
              value={fecha}
              onChange={e => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block uppercase font-bold text-gray-700" htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              cols="30"
              rows="5"
              className="border-2 w-full placeholder-gray-400 p-2 rounded-sm"
              placeholder="Describa los síntomas"
              value={sintomas}
              onChange={e => setSintomas(e.target.value)}
            >
            </textarea>
          </div>

          <input 
            className="bg-indigo-600 w-full p-2 uppercase text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-sm" 
            type="submit" 
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </form>
    </div>
  )
}

export default Formulario