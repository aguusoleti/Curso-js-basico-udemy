
function describirPersona(datos){
    console.log('la persona se llama ' + datos.nombre + ' y tiene ' + datos.edad + 'años');
}

let persona ={ 
    nombre: 'agustiin',
    apellido: 'soleti',
    edad: 26,
    altura: '1.8 metros',
}
describirPersona(persona);