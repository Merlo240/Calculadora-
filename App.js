window.onload = function(){ //Acciones tras cargar la página
    previo=document.getElementById("previo"); //elemento pantalla de salida
    resultado=document.getElementById("resultado");
    }
 
x=0; //guardar número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;

function numero(valor) {  //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) {  // inicializar un número, 
       previo.innerHTML=valor.value; //mostrar en pantalla
       resultado.innerHTML=valor.value; //recoge en pantalla
       x=valor.value; //guardar número;
       }
    else { //continuar escribiendo un número
        if (valor.value =="." && coma==0) { //si escribimos una coma decimal p�r primera vez
            previo.innerHTML+=valor.value ;
            x+=valor.value ;
            coma=1; //cambiar el estado de la coma  
        }
       //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (valor.value =="." && coma==1) {
        } 
        //Resto de casos: escribir un número del 0 al 9: 	 
        
        else {
            previo.innerHTML+=valor.value;
            x+=valor.value
        }
     }
    xi=0 //el número está iniciado y podemos ampliarlo.
    }

