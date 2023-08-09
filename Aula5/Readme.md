 Aqui estão alguns exemplos de como usar `while` e `do while` com arrays e objetos em JavaScript:

**While com arrays:**

```javascript
const numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
  console.log(`O número atual é ${numbers[i]}`);
  i++;
}
```

Neste exemplo, o loop `while` percorre todos os elementos do array `numbers` e imprime o valor de cada um deles. A variável `i` é incrementada em 1 a cada iteração do loop, até que ela seja igual ao comprimento do array.

**Do While com arrays:**

```javascript
const numbers = [1, 2, 3, 4, 5];
let i = 0;

do {
  console.log(`O número atual é ${numbers[i]}`);
  i++;
} while (i < numbers.length);
```

Este exemplo é semelhante ao anterior, mas utiliza o loop `do while`. O resultado é o mesmo que o exemplo anterior.

**While com objetos:**

```javascript
const person = {
  name: 'João',
  age: 30,
  city: 'São Paulo'
};

let keys = Object.keys(person);
let i = 0;

while (i < keys.length) {
  let key = keys[i];
  console.log(`A chave "${key}" tem o valor "${person[key]}"`);
  i++;
}
```

Neste exemplo, o loop `while` percorre todas as chaves do objeto `person` e imprime o nome da chave e seu respectivo valor. A variável `i` é incrementada em 1 a cada iteração do loop, até que ela seja igual ao número total de chaves do objeto.

**Do While com objetos:**

```javascript
const person = {
  name: 'João',
  age: 30,
  city: 'São Paulo'
};

let keys = Object.keys(person); 
let i = 0;

do {
  let key = keys[i];
  console.log(`A chave "${key}" tem o valor "${person[key]}"`);
  i++;
} while (i < keys.length);
```

Este exemplo é semelhante ao anterior, mas utiliza o loop `do while`. O resultado é o mesmo que o exemplo anterior.