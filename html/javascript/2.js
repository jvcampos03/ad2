var tabPor = new Array(4);
tabPor[1] = ["Cientício Bege",
 "87,7 X 87,7cm", "1,54", "imagens/Piso_Cime_Portinari_150.png", 110.00];
tabPor[2] = ["Decorado", "60 X 60cm", "2,2", "imagens/Piso_Deco_Biancogres_150.png", 200.00];
tabPor[3] = ["Marmorizado", "60 X 60cm", "2,4", "imagens/Piso_Marm_Biancogres_150.png", 300.00];
tabPor[4] = ["Amadeirado Nogueira", "19,7 X 120cm", "1,42", "imagens/Piso_Amad_Eliane_150.png", 150.00];


function MostraPor(ind) {
    var TitTamDes = document.getElementById("TitTamDes");
    var ImgDes = document.getElementById("ImgDes");
    var CaiPrcDes = document.getElementById("CaiPrcDes");
    TitTamDes.innerHTML = "<h2>" + tabPor[ind][0] + "</h2><p>Tamanho: " + tabPor[ind][1] + "</p>";
    ImgDes.src = tabPor[ind][3];
    CaiPrcDes.innerHTML = "<p> Caixa: " + tabPor[ind][2] + "m²</p><p style='color: red;'> Preço: R$ " + tabPor[ind][4] + "</p>";
}