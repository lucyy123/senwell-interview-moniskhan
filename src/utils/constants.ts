

// import { faker } from "@faker-js/faker";

export const randomName = [
    'John', 'Alice', 'Bob', 'Charlie', 'Eve', 'Grace', 'Mallory', 'Oscar', 'Peggy', 'Trent', // Unique names
    
    'John', 'Alice',  // Repeated twice
    
    'Bob', 'Bob', 'Charlie', 'Charlie', 'Charlie',  // Repeated more than three times
    
    'Eve', 'Eve', 'Eve', 'Eve', 'Eve',  // Repeated 5 times
    
    'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace',  // Repeated 12 times
    
    'Mallory', 'Mallory', 'Mallory', 'Oscar', 'Oscar', 'Oscar',  // Some repeated three times
    
    'Peggy', 'Peggy', 'Peggy', 'Peggy', 'Peggy',  // Repeated 5 times
    
    'Trent', 'Trent', 'Trent', 'Trent'  // Repeated 4 times
  ];





export const namesFilter = () => {

    const newObj = {}

    for (let i = 0; i < randomName.length; i++) {
        const name: string = randomName[i]
        if (newObj[name]) {
            newObj[name]++
        } else {
            newObj[name] = 1
        }
    }


    localStorage.setItem('name',JSON.stringify(Object.entries(newObj)))
    // return Object.entries(newObj)
}
namesFilter()