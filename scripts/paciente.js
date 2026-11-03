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