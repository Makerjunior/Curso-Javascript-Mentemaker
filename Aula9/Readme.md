
## Métodos de Array em JavaScript

Os arrays são uma estrutura de dados muito útil em JavaScript. Eles são usados para armazenar um conjunto de valores em uma única variável. Os métodos de array são funções que podem ser aplicadas a um array para realizar tarefas específicas. Aqui estão alguns dos principais métodos de array em JavaScript:

### 1. push()

O método push() adiciona um ou mais elementos ao final de um array. Ele modifica o array original e retorna o novo comprimento do array.

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.push('pear');
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']
```

### 2. pop()

O método pop() remove o último elemento de um array. Ele modifica o array original e retorna o elemento removido.

```javascript
const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']
```

### 3. shift()

O método shift() remove o primeiro elemento de um array. Ele modifica o array original e retorna o elemento removido.

```javascript
const fruits = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']
```

### 4. unshift()

O método unshift() adiciona um ou mais elementos ao início de um array. Ele modifica o array original e retorna o novo comprimento do array.

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.unshift('pear');
console.log(fruits); // ['pear', 'apple', 'banana', 'orange']
```

### 5. slice()

O método slice() retorna uma cópia de parte de um array. Ele não modifica o array original.

```javascript
const fruits = ['apple', 'banana', 'orange'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']
console.log(fruits); // ['apple', 'banana', 'orange']
```

### 6. splice()

O método splice() adiciona ou remove elementos de um array. Ele modifica o array original e retorna os elementos removidos.

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'pear', 'pineapple');
console.log(fruits); // ['apple', 'pear', 'pineapple', 'orange']
```

### 7. forEach()

O método forEach() executa uma função em cada elemento de um array.

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// apple
// banana
// orange
```

### 8. map()

O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6]
```

### 9. filter()

O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

### 10. reduce()

O método reduce() executa uma função em cada elemento do array para produzir um único valor.

```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 6
```

Esses são apenas alguns dos principais métodos de array em JavaScript. Espero que isso tenha sido útil!