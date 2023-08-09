Claro, aqui estão alguns exemplos de como usar o `for` em JavaScript:

### Exemplo 1: For Simples
Este exemplo mostra como usar um `for` simples para iterar sobre um array de números e imprimir cada um deles no console.

```javascript
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

### Exemplo 2: For/In
Este exemplo mostra como usar o `for/in` para iterar sobre as propriedades de um objeto e imprimir seus valores no console.

```javascript
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
```

### Exemplo 3: For/Of
Este exemplo mostra como usar o `for/of` para iterar sobre os elementos de um array de strings e imprimir cada um deles no console.

```javascript
const frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
```

Espero que isso ajude!