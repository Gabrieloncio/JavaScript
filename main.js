




    let client = prompt('Ingrese su nombre de usuario')
    let password = prompt('Ingrese su clave secreta') 
    


  

        let askAgain = true;

    do{
        let client = prompt('Ingrese su nombre de usuario')
        let password = prompt('Ingrese su clave secreta');
        if (client === 'Catalina.Andrea' && password === 'Patata.123') {
            alert('Usted ha ingresado al sistema correctamente')
        }
        else if (client === 'Patricio' && password === 'Pato123') {
            alert('Usted ha ingresado al sistema correctamente')
    
        }
    
        else if (client === 'Andrea' && password === 'Andrea69') {
            alert('Usted ha ingresado al sistema correctamente')
        }
        else if (client === 'Paolo.Agustin' && password === 'Paoloagustin') {
            alert('Usted ha ingresado al sistema correctamente')
    
        }
         
        else {
            alert('Datos incompletos o erróneos, revisa y vuelve a intentarlo')
        }
    
        
    } while (askAgain);
    


