import java.util.Scanner;

public class BancoApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo ao Banco Tevolve!");
        
        // Coletar informações do usuário
        System.out.print("Digite o seu nome: ");
        String nome = scanner.nextLine();
        System.out.print("Digite o seu sobrenome: ");
        String sobrenome = scanner.nextLine();
        System.out.print("Digite o seu CPF: ");
        String cpf = scanner.nextLine();
        
        // Criar uma instância do Banco com os dados do usuário
        Banco banco = new Banco(nome, sobrenome, cpf);

        while (true) {
            exibirMenu();
            int escolha = scanner.nextInt();

            switch (escolha) {
                case 1:
                    banco.mostrarDadosPessoais();
                    break;
                case 2:
                    System.out.print("Digite o valor a ser depositado: ");
                    double valorDeposito = scanner.nextDouble();
                    banco.depositar(valorDeposito);
                    break;
                case 3:
                    System.out.print("Digite o valor a ser retirado: ");
                    double valorRetirada = scanner.nextDouble();
                    banco.retirar(valorRetirada);
                    break;
                case 4:
                    banco.mostrarSaldo();
                    break;
                case 5:
                    System.out.println("Obrigado por utilizar os serviços do Banco Tevolve. Volte Sempre!");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    public static void exibirMenu() {
        System.out.println("\nEscolha uma opção:");
        System.out.println("1. Mostrar dados pessoais");
        System.out.println("2. Depositar");
        System.out.println("3. Retirar");
        System.out.println("4. Consultar saldo");
        System.out.println("5. Sair");
        System.out.print("Digite o número da opção desejada: ");
    }
}

class Banco {
    private String nome;
    private String sobrenome;
    private String cpf;
    private double saldo;

    public Banco(String nome, String sobrenome, String cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.saldo = 0.0;
    }

    public void mostrarDadosPessoais() {
        System.out.println("\nDados Pessoais:");
        System.out.println("Nome: " + nome);
        System.out.println("Sobrenome: " + sobrenome);
        System.out.println("CPF: " + cpf);
    }

    public void depositar(double valor) {
        saldo += valor;
        System.out.println("\nDepósito realizado com sucesso. Novo saldo: " + saldo);
    }

    public void retirar(double valor) {
        if (valor <= saldo) {
            saldo -= valor;
            System.out.println("\nRetirada realizada com sucesso. Novo saldo: " + saldo);
        } else {
            System.out.println("\nSaldo insuficiente para realizar a retirada.");
        }
    }

    public void mostrarSaldo() {
        System.out.println("\nSaldo atual: " + saldo);
    }
}
