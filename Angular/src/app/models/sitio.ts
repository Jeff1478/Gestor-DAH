export class Sitio{
    constructor(
        public _id:string,
        public num_caso: String,
        public nombre_sitio: String,
        public clave_sitio: String,
        public regional: Boolean,
        public subregional: Boolean,
        public excavacion: Boolean,
        public inspeccion: Boolean,
        public hallazgo: String,
        public fecha_registro: Date,
        public registrador: String,
        public image:any,
        public date:any,

    ){}
}