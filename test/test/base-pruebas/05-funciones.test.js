import { getUsuarioActivo } from "../../../src/base-pruebas/05-funciones"



describe('Pruebas en 05-funciones', () => { 

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name= 'Nelson'

        const user = {
            uid: 'ABC567',
            username: name

        }
        // console.log(user);
        const usuarioACtivo = getUsuarioActivo(name);
        // console.log(usuarioACtivo)
        expect(usuarioACtivo).toStrictEqual(user)

     })

 })