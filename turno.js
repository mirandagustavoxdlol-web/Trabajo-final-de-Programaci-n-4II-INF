tipo y fecha y codigo y paciente
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