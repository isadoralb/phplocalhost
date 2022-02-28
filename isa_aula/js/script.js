
alert("Estou em um arquivo externo");

//string=texto
//inteiro(int)= numeros inteiros
//number(float)= qualquer numero
//boolean

//exercício 1
/*var nome;
var dtNascimento;
var mesada;
var peso; 
var altura;
var endereco;

nome = window.prompt("Insira um nome: ");
dtNascimento = window.prompt("Insira sua Data de Nascimento: ");
mesada = window.prompt("Insira um valor: ");
endereco = window.prompt("Insira seu endereço: ");
peso = window.prompt("Insira seu peso: ");
altura = window.prompt("Insira sua altura: ");

document.write('<h2> <br> Exercício 1</h2>')

document.write("<br>"+"Bom dia, me chamo "+nome+"<br>Nasci " +dtNascimento+ "<br>Moro no "+endereco+"<br>"+ "Ganho "+mesada+" de mesada. ");
document.write("<br>Tenho " +peso+ " kg e "+altura+" de altura.");


// pop-up window.prompt("Insira um nome: ");| criar campo para preencher
 alert("Olá "+nome);
 document.write(" Salve "+nome);*/
//exercício 1

// exercício 2
var numero1 = parseFloat(window.prompt("Insira o primeiro valor: "));
var numero2 = parseFloat(window.prompt("Insira o segundo valor: "));
var resultado = 0.00;

 //conferir as "", + sempre fora, tags sempre dentro com o <>
 /*Adição (+)
 Subtração(-)
 Divisão (/) 
 Multiplicação (*)
 Resto da Divisão (%)
 ParseInt = tranforma em números inteiros
 ParseFloat = consegue transformar números quebrados
 */
 document.write('<h2><br> Exercício 2</h2>')
//soma
resultado = numero1 + numero2;
document.write("<br>Soma: "+resultado+ "<br>");

//subtração
resultado = numero1 - numero2;
document.write("Subtração: "+resultado+ "<br>");

//divisão
resultado = numero1 / numero2;
document.write("Divisão: "+resultado+ "<br>")

//multiplicação
resultado = numero1 * numero2;
document.write("Multiplicação: "+resultado+ "<br>")

//resto da divisão
resultado = numero1 % numero2;
document.write("Resto da Divisão: "+resultado) 
// exercício 2

// exercício 3

/*Operadores Relacionais
(>) Maior que 
(<) Menor que 
(>=)Maior ou Igual que
(<=)Menor ou Igual que
(==) Igual a...
(!=)Diferente de...
*/

var retorno;

document.write('<h2><br> Exercício 3 </br></h2>')

//Maior
retorno = numero1 > numero2;
document.write(retorno+ "<br>");

//Menor
retorno = numero1 < numero2;
document.write(retorno+ "<br>");

// Maior Igual
retorno = numero1 >= numero2;
document.write(retorno+ "<br>");

//Menor Igual
retorno = numero1 <= numero2;
document.write(retorno+ "<br>");

// Igual
retorno = numero1 == numero2;
document.write(retorno+ "<br>");

// Diferente
retorno = numero1 != numero2;
document.write(retorno+ "<br>");

// Exercício 4
/* Operadores Lógicos
&& = E
|| = Ou
! = Não
*/

document.write('<h2><br> Exercício 4 </br></h2>')

// &&
retorno = (numero1 == numero2 ) && (numero1 > numero2);
document.write(retorno+ "<br>"); 

//||
retorno = (numero1 == numero2 ) || (numero1 > numero2);
document.write(retorno+ "<br>"); 

retorno = (numero1 <= numero2 ) || (numero1 > numero2);
document.write(retorno+ "<br>"); 

retorno = (numero1 <= numero2 ) 
&& (numero1 != numero2)
|| (numero1 != numero2);
document.write(retorno+ "<br>"); 