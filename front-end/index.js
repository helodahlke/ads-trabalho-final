$(document).ready(function() {
    $('.heart-button').click(function() {
        console.log('aham')
        $(this).toggleClass('liked');
        console.log(this)
    });
    $('#content .content:first').addClass('active');
   
    $('.navbar .nav-item').click(function(e) {

       e.preventDefault(); 

       $('.content').removeClass('active');
       $('#navbar .nav-item').removeClass('active');
       
       $(this).addClass('active');
        
       $($(this).data('target')).addClass('active');
       $($(this).data('target')).addClass('active');
       
        switch($(this).data('target')){
            case '#profile-content': 
                carregarUsuario()
                break;
            case '#timeline-content': 
                $('.post').empty()
                carregarPostagem()
                break;
            case '#timeline-content': 
                criarPostagem()
                break;
        }
    });

});
function carregarUsuario(){
    $.ajax({
        url: 'http://localhost:3000/entity/users', 
        type: 'GET', 
        dataType: 'json', 
        success: function(data) {
          $(".user-name").text(`Nome: ${data[0].nome}`)
          $(".user-email").text(`E-mail: ${data[0].email}`)
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error('Erro ao chamar a API: ' + textStatus, errorThrown);
        }
    })
}
function carregarPostagem(){
    $.ajax({
        url: 'http://localhost:3000/entity/posts', 
        type: 'GET', 
        dataType: 'json', 
        success: function(data) {
            console.log(data)
            for(post in data){
                $('.post').append(
                    `<div class='eachPost'>
                    <h4 class="autor-postagem"><i class="fas fa-sharp fa-thin fa-user"></i>${data[post].autor.nome} publicou:</h4>
                    <p class="conteudo-postagem"><i class="fas fa-solid fa-keyboard"></i>${data[post].conteudo}</p>
                    <div class="container mt-5 text-center heart-section">
                       <i id="heartButton${data[post].id}" class="heart-button fas fa-heart"></i>
                    </div>
                    </div>
                    <br>`
                )   
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          
            console.error('Erro ao chamar a API: ' + textStatus, errorThrown);
           }
       })
}
function criarPostagem(){
    var conteudo = $("#post-content").val()
    var autor = 1
    let formData = {
        id: 5,
        conteudo,
        autor
    }
    if($("#post-content").val()  == '') {
        alert("Você precisa escrever algo para liberar a publicação da postagem :)")
    } else {

        $.ajax({
            url: 'http://localhost:3000/entity/posts', 
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                $("#post-content").val('')
                alert('Sucesso! Agora seus amigos conseguem ver sua postagem');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Erro ao chamar a API:', textStatus, errorThrown);
            }
        });
    }
}



