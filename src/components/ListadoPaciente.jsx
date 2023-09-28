import Paciente from "./Paciente";

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {
  // console.log(pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:pt-0 pt-10 md:h-screen overflow-scroll">
        
        {
          pacientes && pacientes.length ?
          (  
            <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>

              {
                pacientes.map(
                  paciente => <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />
                )
              }
            </>
          ) : (
            <>
              <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
              <p className="text-lg mt-5 text-center mb-10">
                Comienza agregando pacientes y {''}
                <span className="text-indigo-600 font-bold"> aparecerán abajo</span>
              </p>
            </>
          )
        }
    </div>
  )
}

export default ListadoPaciente