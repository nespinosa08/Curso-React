// Estafuncion no esta en el scopoe global


const saludar = (nombre, a, b)=>{
  const res = a*b
  return ( `hola mi amigo ${nombre} al ${res}%`)
}

const hero = {
  name: 'Peter Parker',
  code: 'Spiderman',
  age: 44
}
const boo = null;
const text = 'Esta es una cadena de texto '

// rafc tab: snipet para exportacion y funcion de flecha con el mismo nombre del archivo

// se puede introducir codigo de javascript dentro de llaves {}

// para agrupar varios elementos dentro del functional component, se puede hacer la importacion del fragmen de react o colocar entre <> </> sim tener que mportar nada. Tambien se puede usar unaa etiqueta como div, p etc, pero eso crea un elemento adicional que puede no ser necesario.

// No se puede mostrar un objeto literal dentro del functional component 


// El elemento padre ( main.jsx) puede enviar props (Objeto literal) hasta el functional component.
// Las props se pueden ver en la consola=> component. Se selecciona el componente y se obtiene

export const LisimacoEspinosaLozano = () => {
  
  
  // funcional component: puede motrarse cualquier variable menos un objeto literal.
  // En lo posible sacar el codigo ( Variables, funciones,etc) fuera del functional component para eviatr el uso de la memoria cada vez que se tenga que renderizar

  // si una funcion dentro del functinal component, no tiene ninguna interaccion con las props => se puede sacar fuera del funtional component.


  return (
    <>
      <h1>{saludar('DIOS', 80, 20)}</h1>
      <h2>Lisimaco Espinosa Lozano Chatoooo</h2>
      <h3>Mi viejo querido</h3>
      <p>{JSON.stringify(hero)}</p>
      <p>{boo}</p>
      <p>{text}</p>
    </>
  )
}
  