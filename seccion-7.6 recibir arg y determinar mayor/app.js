let a = 15;
let b = 8;
let c= 9;
let grande;

grande = mayor (a, b, c);
console.log(grande)
function mayor (a, b, c)
{
    let grande ;
    if (a >= b)
    {
        if(a >= c)
        {
            grande = a;
        }
        else
            {
                grande = c;
            }
    }else
       if(b>c) {
            grande = b;
        }
        else {
            grande= c;
        }
        return grande;
}  