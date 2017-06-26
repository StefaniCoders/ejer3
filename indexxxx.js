function pasa(nombre,edad,pasatiempo){
  this.nombre=nombre;
  this.edad=edad;
  this.pasatiempo=pasatiempo;

   this.responder = function(){
        return "hola soy " + this.nombre +  " tengo " + this.edad +" y me gusta " + this.pasatiempo
  };

}
var resultado= new pasa("Stephanie",23,"componer_poemas");
console.log(resultado.responder());
