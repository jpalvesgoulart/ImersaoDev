var listaSéries = ['https://occ-0-2873-987.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg' , 'https://noticiasdatv.uol.com.br/media/_versions/recomenda/game-of-thrones-poster-season-8_fixed_recomenda_big.jpg','https://psverso.com.br/wp-content/uploads/2022/12/duracao-primeiro-episodio-serie-the-last-of-us-768x432.jpg','https://masmorracine.com.br/wp-content/uploads/2022/10/house-of-the-dragon.jpg','https://upload.wikimedia.org/wikipedia/pt/thumb/8/8c/Batter_call_saul_temp4.jpg/230px-Batter_call_saul_temp4.jpg']

listaSéries.push('https://flxt.tmsimg.com/assets/p185128_b_v8_ag.jpg')

var nomeSéries = ['Breaking Bad','Game of Thrones','The Last Of Us','House of The Dragon','Better Call Saul']

nomeSéries.push('Prison Break')

document.write('<div class="container_todosFilmes">')

var i = 0
    while(i<listaSéries.length){
      if((listaSéries[i].endsWith('jpg')) ||
         (listaSéries[i].endsWith('jpeg')) ||
          (listaSéries[i].endsWith('png'))){
        
      document.write('<div class="container_filme">')
      document.write('<img src='+ listaSéries[i] +'>');
      document.write('<p>'+ nomeSéries[i] +'</p>'); 
document.write('</div>')
}
else{
document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg, jpg ou png </p>');
    }
      i++
    }
document.write('</div>')