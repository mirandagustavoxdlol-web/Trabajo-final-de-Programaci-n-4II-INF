function  RegistraTurno(){
    let nombre =document.document.getElementById("nombre").value;
    let apellido =document.document.getElementById("apellido").value;
    let dni =document.document.getElementById("dni").value;
    let edad =document.document.getElementById("edad").value;
    let telefono =document.document.getElementById("telefono").value;
    let sexo =document.document.getElementById("sexo").value;
    let fecha=document.document.getElementById("fecha").value;
}
//Resto de Datos de Paciente
const p=new paciente (nombre,apellido,dni,edad,telefono,sexo);
let tipoturno=document.getElementById("tipo").value;
//resto de datos del turno
const t =new turno(cod,tipo,fecha,p)