
//  function numero(x, y, z, f, s) {
    
//        if ( x > y) {
//            maiornumero = x;
//       } else { 
//            maiornumero = y;
//               }
//            if ( maiornumero < z) {
//             maiornumero = z;
//        } else { 
//             maiornumero; }
//             if ( maiornumero < f) {
//                 maiornumero = f;
//            } else { 
//                 maiornumero; }
//                 if ( maiornumero < s) {
//                     maiornumero = s;
//                } else { 
//                     maiornumero;
//                }
            
//         //comentario
//         //kc seleccionar tudo em comentario
//         //ku d/seleccionar tudo em comentario 
//     console.log(maiornumero)           // pode ser return neste caso
// }

// // loops


// //var y = x/2        //par
// //var z = (x/2)-1    //impar
// var x 
  
// for (x = 0; x <= 15; x++) { 
//      if (x/2)
//     console.log(x) ;
// }






//    //        if ( x > y) {
//     //        greeting = "x e maior que y"
//     //   } else { 
//     //        greeting = "y e maior que x"




//         //  if (time < 10) {
//      //       greeting = "Good morning";
//       //  } else if (time < 20) {
//       //      greeting = "Good day";
//       //  } else {
//       //      greeting = "Good evening";
//       //  }

//      // function msg(){
//      //   console.log("Olá");
//    // }
    
//     // var input = document.getElementById("btMensagem");
//     // input.addEventListener("click",function(){
//     //     console.log("Botão clicado");
//     //     msg();
//     // });

//     // exercicio contar likes e dislike
    
//     // $('.dislike').click(function(){
//     //    console.log("Botão Dislike");
//     // });

// //     $('.like').click(function(){
// //         console.log("Botão Like");
// //     });

//     //exercicio permitir apenas um like ou dislike por livro

//     // $('#dislike').click(function(){
//     //     console.log("Botão Dislike Irmandade do anel");
//     // });

//     // $('#like').click(function(){
//     //     console.log("Botão Like Irmandade do anel");
//     // });
//     // $('#dislike2').click(function(){
//     //     console.log("Botão Dislike As duas torres");
//     // });

//     // $('#like2').click(function(){
//     //     console.log("Botão Like As duas torres");
//     // });
//     // $('#dislike3').click(function(){
//     //     console.log("Botão Dislike Livro Retorno do Rei");
//     // });e

//     // $('#like3').click(function(){
//     //     console.log("Botão Like Livro Retorno do Rei");
//     // });

//    // Nao e a melhor opcao

//    $('.dislike').click(function(){
//        console.log("Botão Dislike");
//     });

//     $('.like').click(function(){
//         console.log("Botão Like");
//     });

//     //cmd d 


//     // $('.dislike').click(function(){
//     //    console.log("Botão Dislike");
//     // });

// //     $('.like').click(function(){
// //         console.log("Botão Like");
// //     });

//    Exercicio


//   $('.book button').click(function(){
//   //var opinion = $ (this).attr("data-Opinion");

//    $current = $('.book.active');
//    $next = $current.next();

//    $current.removeClass('active');
//    $next.addClass("active")
//   });

  
// exercicio mostrar umlivro e centrado


//   if (8< time < 12) {
//     document.write ("Good Morning") ;
//   }
//      else if (12 < time < 20) ; {
//       document.write ("Good Afternoon") ;
//      }
//     else {
//       document.write ("GoodEvening") ;
//     }
       
// }



var book1 = {
    name: "Senhor dos Aneis I",
    img: "Imagens/Irmandade do anel.jpg",
    descricao: "Um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal, pois o futuro da civilização depende do destino desse anel. Para isso, o hobbit Frodo terá um caminho árduo pela frente. Ao seu lado, para o cumprimento desta jornada, ele poderá contar com outros hobbits.",
          link:{
             text:"wikipedia",
             url:"https://pt.wikipedia.org/wiki/Sociedade_do_Anel"
 }
}

var book2 = {
    name: "Senhor dos Aneis II",
    img: src="Imagens/duas-torres-livro-capa.jpg",
    descricao: "Frodo, seus amigos e os contínuos esforços para destruir o anel.Frodo e Sam descobrem que estão sendo seguidos pelo misterioso Gollum.Enquanto iso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
         link:{
             text:"wikipedia",
             url:"https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is:_As_Duas_Torres"
 }
}
var book3 = {
    name: "Senhor dos Aneis III",
    img: src="Imagens/senhor-dos-aneis-o-vol-3-o-retorno-do-rei.jpg",
    descricao: "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média. Hobbits, Frodo e Sam chegam a Mordor na sua missão para destruir o anel enquanto Aragorn leva as forças do bem contra o exército do mal de Sauron na cidade de pedra de Minas Tirith",
          link:{
             text:"wikipedia",
             url:"https://pt.wikipedia.org/wiki/O_Retorno_do_Rei"
    }
}

class Library {    // class
    constructor(){ // metodo predefinido
        this.books = [book1,book2,book3];
        this.Load(book1);
        this.seenBooks = [];
    }


//alt z -- wrap text

Load(livro)  {        // funcao
    $(".book h1").text(livro.name);
    $(".book img").attr("src",livro.img);
    $(".book p").text(livro.descricao);
    $(".book a").attr("href",livro.link.url);
};


NextBook(livro) {
       // Passar o livro que acabamos de mostrar para o seenBooks

    //load() do proximo
          this.seenBooks.push(book1);
          this.books.splice(0,1);
          this.Load(this.books[0]);
}

}
var library = new Library();
    
$('.book button').click(function(){
           library.NextBook();
});