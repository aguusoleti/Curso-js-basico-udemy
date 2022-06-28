class Carro{

constructor(marca, tipo, puertas){

    this.marca= marca;
    this.tipo = tipo;
    this.puertas= puertas;
    this.creadoEn = 'hoy';
    this.gasolina = 100;
    this.encendido = false;
}
encenderCarro(){
if(this.encendido){
    console.log ('se daño el carro');
}else {
    this.encendido = true;
    console.log ('el carro esta encendido');
}
}
realizarViaje(consumo){
    
    if(this.encendido){  
       
        if(this.gasolina > consumo){  
    this.gasolina= this.gasolina - consumo;
     console.log('le queda '+ this.gasolina);
        }else 
        {
            console.log('el consumo es mayor a la gasolina');
        }
}else
{
    console.log('el carro esta apagado');
}
}
}
let carro=new Carro ('mazda', 'Sedan', 2);
console.log(carro);
