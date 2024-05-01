var tabObj = new Array(6);
      tabObj[0] = [
        "Espaçador",
        "Standers 2mm",
        "300 peças",
        50.00,
        "<img src='imagens/Esp_Standers_150.png' alt='Image 1'>",
      ];
      tabObj[1] = [
        "Argamassa",
        "Axton Branca",
        "20kg",
        40.00,
        "<img src='imagens/Arga_Axton_150.png' alt='Image 2'>",
      ];
      tabObj[2] = [
        "Rejunte",
        "Axton Marfim",
        "1kg",
        17.00,
        "<img src='imagens/Rej_Marfin_Axton_150.png' alt='Image 3'>",
      ];
      tabObj[3] = [
        "Rodapé",
        "Moldufarma MDF Nogueira",
        "10cm X 2,40mm",
        35.00,
        "<img src='imagens/Rod_MDF_Moldufarma_150.png' alt='Image 4'>",
      ];
      tabObj[4] = [
        "Rodapé",
        "Santa Luzia Poliestireno ","10cm X 2,40mm",
        78.00,
        "<img src='imagens/Rod_Poliest_SantaLuzia_150.png' alt='Image 5'>",
      ];
      tabObj[5] = [
        "Cola para Moldura",
        "Santa Luzia","400g",
        47.00,
        "<img src='imagens/Cola_Rod_SantaLuzia_150.png' alt='Image 6'>",
      ];

      function MostraObjeto(tipo) {
        var jan = window.open("", tabObj[tipo][0], "location=no,status=no," + "width=260,height=390");

    with (jan.document) {
        write("<!DOCTYPE html>");
        write("<html><head><title>Refresca Pé</title>");
        write("<link rel='stylesheet' type='text/css'");
        write(" href='css/styles.css'>");
        write("</head><body>");
        write("<div class='apres'>");
        write("<style>.preco { color: red; }.center { display: flex; justify-content: center; } h3 { text-align: center; }</style>");

        write("<h3>" + tabObj[tipo][0] + "</h3>"); // Nome do produto
        write(tabObj[tipo][4]); // Adiciona a imagem
        write("<div>");
        write("<p>" + tabObj[tipo][1] + "</p>" ); // Descrição do produto
        write("<p>" + tabObj[tipo][2] + "</p>"); // Dimensões do produto
        write("<p class='preco'>Preço: R$ " + tabObj[tipo][3] + "</p></div>" ); // Preço do produto
        write("<form class = 'center'>");
        write("<input type='button' value='Fechar' onClick='window.close();'/>"); // Botão para fechar a janela
        write("</form></div>");
        write("</body></html>");
        close();
    }
}