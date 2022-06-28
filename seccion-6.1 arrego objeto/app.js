

let persona1= {
    nombre: 'agustin',
    edad: 26
};
let persona2= {
    nombre: 'valeria',
    edad: 26
};
let persona3= {
    nombre: 'antonella',
    edad: 18
};

let personas=[persona1, persona2, persona3];
//console.log(personas);
let persona ;
for( let i=0 ; i<personas.length; i++)
{
//console.log(i);

persona=personas[i];

   console.log(`${ persona.nombre }` + ' -- ' + `${persona.edad}`);
}