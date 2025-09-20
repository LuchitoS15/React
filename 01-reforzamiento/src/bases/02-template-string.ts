const firstName = 'Luis';
const lastName = "O' Neal \" es el nombre de alguient \"";

// Concatenación usando template strings
const fullName = `

El nombre es :
 ${firstName} ${lastName} 
`

console.log(fullName);


// Sin usar template strings

console.log(firstName + ' ' + lastName + ':')