/**
 * 
 * @param {string} name 
 * @return {string}
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name === "Nor") {
        return "Bonjour Nor"
    }

    return `Hello, ${name}`
}
