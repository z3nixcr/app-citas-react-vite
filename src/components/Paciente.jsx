
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="bg-white px-5 py-10 rounded-md mx-5 my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: <span className="font-normal normal-case">{fecha}</span></p>
        <p className="font-bold text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span></p>

        <div className="flex gap-4 flex-col md:justify-between md:flex-row">
          <button
            className="w-full mt-6 transition-colors duration-300 uppercase hover:bg-indigo-800 text-white font-bold py-2 px-10 rounded-sm bg-indigo-600" 
            type="button"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button
            className="w-full mt-6 transition-colors duration-300 uppercase hover:bg-red-800 text-white font-bold py-2 px-10 rounded-sm bg-red-500" 
            type="button"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente