class Pessoa {
    nome;
    idade;
    peso;
    altura;

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
      
    }

            calcularImc() {
                return this.peso / Math.pow(this.altura, 2);
            }

            classificarImc() {
                const imc = this.calcularImc();
                    
                if (imc < 18.5) {
                    return `\nO Sr(a) ${this.nome} de ${this.idade} anos está com o IMC: ${imc.toFixed()} e está ABAIXO DO PESO\n`;
                } else if (imc >= 18.5 && imc < 25) {
                    return `\nO Sr(a) ${this.nome} de ${this.idade} anos está com o IMC: ${imc.toFixed()} e está NORMAL\n`;
                } else if (imc >= 25 && imc < 30) {
                    return `\nO Sr(a) ${this.nome} de ${this.idade} anos está com o IMC: ${imc.toFixed()} e está ACIMA DO PESO\n`;
                } else if (imc >= 30 && imc < 40) {
                    return `\nO Sr(a) ${this.nome} de ${this.idade} anos está com o IMC: ${imc.toFixed()} e está OBESO\n`;
                } else {
                    return `\nO Sr(a) ${this.nome} de ${this.idade} anos está com o IMC: ${imc.toFixed()} e está com OBESIDADE\n`;
                } 

            }
        
        }

const people = new Pessoa('Stark', 30, 60, 1.70);
console.log(people.classificarImc());
