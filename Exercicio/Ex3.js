/*Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e
 verificar o saldo.*/

 class ContaBancaria{
    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
    verificarSaldo(){
        
        console.log(`O saldo da conta é ${this.saldo}`);
    }
 }
 const ContaBancaria1 = new ContaBancaria("Senai",1000);
 ContaBancaria1.depositar(1000);
 ContaBancaria1.sacar(500);
 ContaBancaria1.verificarSaldo();
