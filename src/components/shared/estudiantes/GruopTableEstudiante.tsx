import { estudent } from "../../../pages/estudiantes/EstudianteDashboard"
import { TableDatosPersonales } from "./Tables/TableDatosPersonales"
import { TableDireccionActual } from "./Tables/TableDireccionActual"
import { TableDireccionFamiliar } from "./Tables/TableDireccionFamiliar"
import { TableTutor } from "./Tables/TableTutor"


export const GroupTableEstudiante = ({estudents}:{estudents:estudent[]}) => {
    return(
        <>
            <TableDatosPersonales estudents={estudents} />
            <TableTutor estudents={estudents}/>
            <TableTutor estudents={estudents} />
            <TableDireccionActual estudents={estudents} />
            <TableDireccionFamiliar estudents={estudents} />
        </>
    )
}