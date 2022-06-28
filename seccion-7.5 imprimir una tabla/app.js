//   1   2   3   4   5  
//   2   4   6   8   10
//   3   6   9   12  15  
//   4   8   12  16  20
//   5   10  15  20  25

let i=0;
let j =0;


for (i=1; i<=5 ; i++)
{
    let resultado ='';
    for (j=1; j<=5 ; j++)
    {
     //let resultado = i*j;
    resultado += ` ${ i * j }   `;
    }
    console.log(resultado);
}