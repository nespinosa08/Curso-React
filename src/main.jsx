import React from 'react';
import  ReactDOM  from 'react-dom/client';


// importacion de estilos de css globales
import './styles.css'

// import { GraciasDiosPadre } from './GraciasDiosPadre';
// import { LisimacoEspinosaLozano } from './LisimacoEspinosaLozano';
import { CounterApp } from './CounterApp';
// funcion LisimacoEspinosaLozano es capitalizada

ReactDOM.createRoot( document.getElementById('root') ).render(

    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);


/* Pruebas o Testing

- Se debe descargar un framework de pruebas llamado JEST. 
- Ir a la pagina oficial de jest. Instalar el paquete
- crear el script en el packaje.json => "test": "jest"
- Abrir una nueva terminal y ejecutar: yarn test.
- crear carpeta (test) fuera del src (para evitar incrementar el tamaño del proyecto src)
- La carpeta test contiene el espejo de los archivos del src
- Modificar script del test => "test": "jest --watchAll" para que actulice los cambios duarante la ejecucion del test
- Instalar el intecens para la ayuda de los metodos de jest => yarn add -D @types/jest (OTRA FORMA:) yarn  add --dev @types/jest
- Agrupar las pruebas en un describe para cada componente (functional component). Una agrupacion por archivo
- Snipet del describe => desc + tabs
- La funcion a probar debe estar exportada (export)

- Instalar babel => yarn add --dev babel-jest @babel/core @babel/preset-env 
- Crear archivo babel.config.js
- pegar el codigo que esta  en la pagina de jest.
- si hay error de: "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.", 
se debe cambiar la extension del archivo a babel.config.cjs

- Para pruebas con funciones asincronas, usando el then y el catch, se debe enviar en el test un argumento usualmente llamado (done) y antes finalizar el codigo de la funcion se debe llamara al done()

- Para pruebas con funciones asincronas, usando el async y el await No reqiere usar el argumento (done)  y para versiones de node inferiores a la 18 (no inclute el fetch), se necesita hacer 1 instalacion de un paquete: 
yarn add  -D whatwg-fetch
y configurar 2 archivos: 
jest.setup.js
import 'whatwg-fetch'

jest.config.js
module.export ={
    setupFiles: ['./jest.setip.js']
}
(esta es una confiuracion manual)
- usando CRA, ya viene incluida la configuarcion.
- Para versiones de node 18 o superior ya viene el fetch y por lo tanto no seria necesario esta configuracion


- Para las pruebas de componentes de react, jest recomienda usar testing-library
yarn add --dev @testing-library/react
- usando CRA, ya viene incluida la configuarcion.

- Para hacer puebas con react, hacer la siguente instalacion: 
yarn add --dev  jest-environment-jsdom

 y ahora incluir en el jest.config.js la siguiente configuarcion:
 testEnvironment: 'jest-environment-jsdom'

 - Tambien hay que configurar babel.config.js
 - hacer la siguiente instalacion:
 yarn add --dev @babel/preset-react
 y configurar el archivo babel.config.js como:
 module.exports ={
    presets: [
        ['babel/preset-env', {targets: {esmodules:true}}],
        ['babel/preset-react', {runtime: 'automatic'}],

    ]
 }

 - Asercion del Snapshot: No recomendada cuando el componente cambia mucho.
 - El objeto metodo render del testing-library, actualiza el objeto screen y retorna un objeto (container =como= document) con muchas propiedades de algo parecido a DOM (nodo de HTML).
 - ANALOGIA: se puede hacer container.querySelector como document.querySelector.
 - Elmetodo render tambien retorna varias funciones como: getByText, getByTextId, getAllByText, etc.
 - El metode render tambien retorna el objeto screen, el cual es util para hacer las validaciones con los cambios actualizados del objeto renderizado.
 - screen.debug() ==> Permite ver el estado del DOM


 - El snapshot toma una foto de como luce el html. posteriormente al hacer una nueva prueba, detecta si hay cambios con la foto tomada inicialmente.
 - Si se desea actualizar la foto para validar con un cambio en el html, presionar "u" en la consola.
 - .toBe es mas esctricto. No acepta espacios.
 - .toContain es mas flexible. Acepta espacios.
 - Las pruebas deben ser flexibles.
 - Se puede hacer las aseciones usando el objeto container 
 - Se puede hacer las asercions usando el objeto screen (Mejor opcion).

 - No es necesario probar el funcionamiento del useState (Hook). Ya esta probado por react.
 - Para probar los eventos del componente, se usa: fireEvent del testingLibrary ( contempla todos los eventos posibles).
 - Cuando hay errores hay 2 posibilidades: El codigo tiene errores / La prueba tiene errores
 - Pruebas:
    + Poner el sujeto de pruebas.
    + Aplicar un estimulo.
    + Asercion del comportamiento esperado.





*/