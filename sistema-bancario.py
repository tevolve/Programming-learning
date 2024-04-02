class ContaBancaria:
    def __init__(self):
        self.saldo = 1000  # saldo inicial
        self.limite_diario = 500  # limite diário de saque

    def sacar(self, valor):
        if valor > self.limite_diario:
            print("Você excedeu o limite diário de saque.")
        elif valor > self.saldo:
            print("Saldo insuficiente.")
        else:
            self.saldo -= valor
            print(f"Saque de R${valor} realizado com sucesso. Saldo restante: R${self.saldo}")

# Função para interagir com o usuário e realizar saques
def main():
    conta = ContaBancaria()
    while True:
        print("\nOpções:")
        print("1. Sacar")
        print("2. Verificar Saldo")
        print("3. Sair")

        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            valor_saque = float(input("Digite o valor que deseja sacar: "))
            conta.sacar(valor_saque)
        elif opcao == '2':
            print(f"Saldo disponível: R${conta.saldo}")
        elif opcao == '3':
            print("Saindo...")
            break
        else:
            print("Opção inválida. Por favor, escolha uma opção válida.")

if __name__ == "__main__":
    main()
