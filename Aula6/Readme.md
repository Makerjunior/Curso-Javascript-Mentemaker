

Em JavaScript, os comandos `break` e `continue` são usados em loops `while` para controlar o fluxo do programa.

O comando `break` é usado para interromper o loop `while` quando uma determinada condição é atendida. Quando o comando `break` é executado dentro do loop, o loop é interrompido imediatamente e o controle é transferido para a próxima linha de código após o loop.

Já o comando `continue` é usado para pular uma iteração do loop quando uma determinada condição é atendida. Quando o comando `continue` é executado dentro do loop, a iteração atual é interrompida e o controle é transferido para a próxima iteração do loop.

Aqui está um exemplo de como esses comandos podem ser usados em um loop `while`:

```javascript
let i = 0;

while (i < 10) {
  i++;
  
  if (i === 5) {
    continue;
  }
  
  if (i === 8) {
    break;
  }
  
  console.log(i);
}
```

Neste exemplo, o loop `while` é executado enquanto `i` for menor que 10. Dentro do loop, verificamos se `i` é igual a 5 usando o comando `continue`. Se for igual a 5, a iteração atual é interrompida e o controle é transferido para a próxima iteração do loop.

Também verificamos se `i` é igual a 8 usando o comando `break`. Se for igual a 8, o loop é interrompido imediatamente e o controle é transferido para a próxima linha de código após o loop.

Espero que isso ajude!