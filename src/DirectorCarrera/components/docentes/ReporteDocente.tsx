import { Button, Card, CardContent, Typography } from "@mui/material"




export const DocentReporte = () => {
    return (
        <>
            <Card sx={{ width: "90%" }}>
                <CardContent>
                    <Typography variant="h6" color="primary">Evaluación Semestral de Desempeño Académico</Typography>
                    <br />
                    <Typography variant="subtitle2">
                        Fecha: 30 de mayo del 2002
                    </Typography>
                    <br />
                    <Typography variant="body1" color="text.secondary">
                    Este reporte tiene como finalidad ofrecer un resumen detallado del desempeño académico del maestro durante el semestre 10. Se ha realizado una evaluación exhaustiva en las diversas áreas de enseñanza, teniendo en cuenta tanto los resultados académicos como el compromiso y la participación en clase. El maestro ha demostrado un alto nivel de competencia y dedicación en su labor, lo que ha contribuido al éxito y el progreso de sus estudiantes.
                    </Typography>
                    <br />
                    
                    <br />
                    <Button variant="contained">Descargar reporte</Button>
                </CardContent>
            </Card>
        </>
    )
}  