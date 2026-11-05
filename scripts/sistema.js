class paciente {
    constructor (nombre, apellido, dni, edad, telefono, sexo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.edad=edad;
        this.telefono=telefono;
        this.sexo=sexo;
    }
        setnombre (nuevoNombre){
            this.nombre=nuevoNombre
        }
        setapellido (nuevoApellido){
            this.apellido=nuevoApellido
        }
        setdni (nuevoDni){
            this.dni=nuevoDni
        }
        setedad (nuevoEdad){
            this.edad=nuevoEdad
        }
        settelefono (nuevoTelefono){
            this.telefono=nuevoTelefono
        }
        setsexo (nuevoSexo){
            this.sexo=nuevoSexo
        }
        getnombre (){
            return this.nombre
        }
        getapellido (){
            return this.apellido
        }
        getdni (){
            return this.dni
        }
        getedad (){
            return this.edad 
        }
        gettelefono (){
            return this.telefono
        }
        getsexo (){
            return this.sexo
        }

        toString(){
            return "nombre: " + this.nombre + ", apellido: " + this.apellido + ", dni: " + this.dni + ", edad" + this.edad + ", telefono: " + this.telefono + ", sexo: " + this.sexo
        }
            
}

class turno {
    constructor (tipo, fecha, codigo, paciente){
        this.tipo=tipo;
        this.fecha=tipo;
        this.codigo=codigo;
        this.paciente=paciente;
    }

        settipo (nuevoTipo){
            this.tipo=nuevoTipo
        }
        setfecha (nuevoFecha){
            this.fecha=nuevoFecha
        }
        setcodigo (nuevoCodigo){
            this.codigo=nuevoCodigo
        }
        setpaciente (nuevoPaciente){
            this.paciente=nuevoPaciente
        }
        gettipo (){
            return this.tipo
        }
        getfecha (){
            return this.fecha
        }
        getcodigo (){
            return this.codigo
        }
        getpaciente (){
            return this.paciente
        }

        toString(){
            return "tipo: " + this.tipo + ", fecha: " + this.fecha + ", codigo: " + this.codigo + ", paciente: " + this.paciente
        }
}

class SistemaTurno() {
    constructor(){
        this.paciente=[];
        this.turno=[];
        this.cargardatos();
    }
}

cargardatos(){
    let paciente=localstorage.getItem("pacientes");
    let turno=localstorage.getItem("turnos");

    if (paciente!=null){
        this.pacientes=JSON.parse()
    }
    if (turno!=null){
        this.turnos=JSON.parse
    }
}

guardardatos(){
    localstorage.setItem("pacientes", JSON.stringify(this.pacientes));
    localstorage.setItem("turnos", JSON.stringify(this.turno));
}