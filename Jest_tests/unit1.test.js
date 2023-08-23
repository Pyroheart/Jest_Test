// Vous importez la fonction à tester
import { sayHello } from './unit1.js'


// Puis, vous créez le bloc de séries de test (ou Test Suite)
describe('sayHello Unit Test Suites', () => {
    it('should display "Hello, World"', () => {
        expect(sayHello()).toEqual("Hello, World")
    })
    
    it('should display "Bonjour Alexandra"', () => {
        expect(sayHello("Nor")).toEqual("Bonjour Nor")
    })
    
    it('should display "Hello, Thomas"', () => {
        expect(sayHello("Vin")).toEqual("Hello, Vin")
    })

    it('should display "Hello, Sam"', () => {
        expect(sayHello("Sam")).toEqual("Hello, Sam")
    })
})
