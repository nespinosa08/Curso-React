import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Prueba en CounterApp', () => { 
    
    test('Debe hacer match con el snapshot', () => { 
        const {container} = render( <CounterApp value={testValue}/> )
        expect(container).toMatchSnapshot();

     })

    const tittle = 'CounterApp';
    const testValue = 8

    test('El titulo deb ser: CounterApp ', () => { 
        render( <CounterApp value={testValue}/> )
        // screen.debug(); // para tener una vista del elemento renderizado. Se ejecuta debajo del render
        expect(screen.getByText(tittle)).toBeTruthy();
        
     })
    
     test('El titulo deb estar contenido en una etiqueta h1', () => { 
        render( <CounterApp value={testValue}/> )
        expect(screen.getByRole('heading', {level:1}).innerHTML).toBe(tittle);

     })

     test('Debe existir un testValue en el html', () => { 
        render(<CounterApp value={testValue}/>)
        expect(screen.getByText(testValue)).toBeTruthy();
      })

      test('should incrementar 1 al hacer click en el boton +1', () => { 
        render(<CounterApp value={testValue}/>)
        fireEvent.click(screen.getByRole('button', {name:'+1'}))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toBe((testValue+1).toString())
        // expect(screen.getByText(testValue+1)).toBeTruthy()
       })
      
       test('should decrementar 1 al hacer click en el boton -1', () => { 
        render(<CounterApp value={testValue}/>)
        fireEvent.click(screen.getByRole('button', {name:'-1'}))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toBe((testValue-1).toString())
        // expect(screen.getByText(testValue-1)).toBeTruthy()
       })
       
       test('should hacer el reset al valor inicial al hacer click en el boton Reset', () => { 
        render(<CounterApp value={testValue}/>)
        fireEvent.click(screen.getByRole('button', {name:'Reset'}))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toBe((testValue).toString())
        // expect(screen.getByText(testValue)).toBeTruthy()
       })


 })