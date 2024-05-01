var produtos = [
    {

        nome: "Cientício Bege",
        rotuloQuantidade: "Área",
        rotuloUnidadeVenda: "Caixas",
        unidadeVenda: 1.54,
        preco: 110
    },
    {
        nome: "Decorado",
        rotuloQuantidade: "Área",
        rotuloUnidadeVenda: "Caixas",
        unidadeVenda: 2.2,
        preco: 200
    },
    {
        nome: "Marmorizado",
        rotuloQuantidade: "Área",
        rotuloUnidadeVenda: "Caixas",
        unidadeVenda: 2.4,
        preco: 300
    },
    {
        nome: "Amadeirado Nogueira",
        rotuloQuantidade: "Área",
        rotuloUnidadeVenda: "Caixas",
        unidadeVenda: 1.42,
        preco: 300
    },
    
    
    {
        nome: "MDF Modulfarma 1002 Nogueira",
        rotuloQuantidade: "Metro",
        rotuloUnidadeVenda: "Peças",
        unidadeVenda: 2.40,
        preco: "35"
    },

    {
        nome: "LEV 102 Branco Santa Luzia",
        rotuloQuantidade: "Metro",
        rotuloUnidadeVenda: "Peças",
        unidadeVenda: 2.40,
        preco: 78
    },

  ];
    function atualizarRotulo(index) {
        // Limpar os campos
        document.getElementById('areametros').value = '';
        document.getElementById('caixaspeças').value = '';
        document.getElementById('totalParcial').value = '';
    
        // Atualizar os rótulos
        var medida = document.getElementById('medida');
        var unidvenda = document.getElementById('unidvenda');
        if (index <= 4) { // Porcelanato
            medida.textContent = 'Área';
            unidvenda.textContent = 'Caixas';
        } else { // Rodapé
            medida.textContent = 'Metro';
            unidvenda.textContent = 'Peças';
        }
    }


    // Função para calcular a quantidade de unidades de venda
    function calcularUnidades(indiceProduto, quantidadeDesejada) {
        var produto = produtos[indiceProduto];
        var unidadeVendaNumerica = parseFloat(produto.unidadeVenda.replace(',', '.')); // Convert unidadeVenda to a number
        var unidades = Math.round(quantidadeDesejada / unidadeVendaNumerica + 0.5);
        return unidades;
      }
  
  // Função para calcular a quantidade de unidades de venda
function calcularUnidades(indiceProduto, quantidadeDesejada) {
    var produto = produtos[indiceProduto];
    var unidadeVendaNumerica = parseFloat(produto.unidadeVenda.replace(',', '.')); // Convert unidadeVenda to a number
    var unidades = Math.round(quantidadeDesejada / unidadeVendaNumerica + 0.5);
    return unidades;
  }
  
  // Função para calcular o total parcial
  function calcularTotalParcial(indiceProduto, unidades) {
    var produto = produtos[indiceProduto];
    var preco = parseFloat(produto.preco); // Convert preco to a number
    var totalParcial = unidades * preco;
    return totalParcial;
  }
  
  // Função para atualizar os rótulos e campos de entrada
  function atualizarCampos(indiceProduto) {
    var produto = produtos[indiceProduto];
    document.getElementById("medida").innerText = produto.rotuloQuantidade;
    document.getElementById("unidvenda").innerText = produto.rotuloUnidadeVenda;
    document.getElementById("areametros").value = "";
    document.getElementById("caixaspeças").value = "";
    document.getElementById("totalParcial").value = "";
  }
  
  // Adiciona um evento de 'input' ao campo de entrada da quantidade desejada
  document.getElementById("areametros").addEventListener("input", function() {
    var selectElement = document.getElementById("produtoList");
    var indiceProduto = selectElement.selectedIndex;
  
    var quantidadeDesejada = this.value;
    if (!isNaN(quantidadeDesejada)) {
      var unidades = calcularUnidades(indiceProduto, quantidadeDesejada);
      document.getElementById("caixaspeças").value = unidades;
      var totalParcial = calcularTotalParcial(indiceProduto, unidades);
      document.getElementById("totalParcial").value = totalParcial;
    } else {
      alert("Por favor, insira um valor numérico na quantidade desejada.");
    }
  });