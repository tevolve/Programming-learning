<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nota Fiscal de Serviço</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
        }

        h1, h2 {
            color: #007BFF;
        }

        label {
            display: block;
            margin: 10px 0;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        button {
            background-color: #28a745;
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
        }

        button:hover {
            background-color: #218838;
        }

        #resultado {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <h1>Emissão de Nota Fiscal de Serviço</h1>

    <label for="valor">Valor do Serviço:</label>
    <input type="number" id="valor" placeholder="Digite o valor do serviço">

    <label for="imposto">Taxa de Imposto (%):</label>
    <input type="number" id="imposto" placeholder="Digite a taxa de imposto">

    <button onclick="calcularNotaFiscal()">Emitir Nota Fiscal</button>

    <h2>Nota Fiscal Gerada</h2>
    <div id="resultado"></div>

    <script>
        function calcularNotaFiscal() {
            // Obter dados do formulário
            var valorServico = parseFloat(document.getElementById("valor").value);
            var taxaImposto = parseFloat(document.getElementById("imposto").value);

            // Verificar se os valores são válidos
            if (isNaN(valorServico) || isNaN(taxaImposto)) {
                alert("Por favor, insira valores numéricos válidos.");
                return;
            }

            // Calcular imposto
            var valorImposto = (valorServico * taxaImposto) / 100;

            // Calcular total
            var total = valorServico + valorImposto;

            // Exibir nota fiscal
            var resultadoHTML = `
                <p><strong>Valor do Serviço:</strong> R$ ${valorServico.toFixed(2)}</p>
                <p><strong>Imposto (${taxaImposto}%):</strong> R$ ${valorImposto.toFixed(2)}</p>
                <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
            `;

            document.getElementById("resultado").innerHTML = resultadoHTML;
        }
    </script>
</body>
</html>
