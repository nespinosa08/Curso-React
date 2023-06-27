import { getHeroeById, getHeroesByOwner } from "../../../src/base-pruebas/08-imp-exp"
import heroes from "../../../src/data/heroes"


describe('Pruebas en 08-imp-exp.test', () => { 
    
    test('getHeroeByID deberia devolver un hero por id', () => { 
        
        const heroePrueba = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        // console.log({heroePrueba})
        
        const id= 1
        const heroeById= getHeroeById(id);


        expect(heroeById).toEqual(heroePrueba)
     })

     test('getHeroeByOwner deberia entregar la cantidad correcta de heroes correspondientes a ese Owner', () => { 


        const owner = 'DC';
        const ownerHeroes = getHeroesByOwner(owner)

        expect(ownerHeroes.length).toBe(3)

      })

      test('getHeroeByOwner deberia entregar los heroes correspondientes a ese Owner (DC)', () => { 

        const owner = 'DC';
        const ownerHeroes = getHeroesByOwner(owner)

        expect(ownerHeroes).toStrictEqual(heroes.filter(heroe =>(heroe.owner === owner)))

      })

      test('getHeroeByOwner deberia entregar la cantidad correcta de heroes correspondientes a ese Owner', () => { 


        const owner = 'Marvel';
        const ownerHeroes = getHeroesByOwner(owner)

        expect(ownerHeroes.length).toBe(2)

      })

      test('getHeroeByOwner deberia entregar los heroes correspondientes a ese Owner (Marvel)', () => { 

        const owner = 'Marvel';
        const ownerHeroes = getHeroesByOwner(owner)

        expect(ownerHeroes).toStrictEqual(heroes.filter(heroe =>(heroe.owner === owner)))

      })



 })
