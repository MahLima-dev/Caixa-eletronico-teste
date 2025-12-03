// Definir classe ContaBancaria
class ContaBancaria{
    //Propriedades e valor privado de acordo com as novas normas
    #saldo;
    constructor(){
        this.#saldo = 0;
    }
    depositar(valor){
        this.#saldo += valor;
    }
    sacar(valor){
        this.#saldo -= valor;

    }
    TemSaldoParaSacar(valor){
        return valor <= this.#saldo; 

    }
    get saldo(){
        return this.#saldo
    }
}

class CaixaEletronico{
    constructor(conta){
        this.conta = conta;
    }
    depositar(){
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        this.conta.depositar(valorDeposito)
        this.mostrarSaldo(this.conta.saldo)
    }
    sacar(){
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        if(this.conta.TemSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque)
            this.mostrarSaldo(this.conta.saldo)
        }else{
            this.mostrarSaldo("Saldo Insuficiente")
        }
        }
    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo} `;
        document.getElementById("valorDeposito").textContent = "";
        document.getElementById("valorSaque").textContent = "";
    }
}

const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta)