$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $("#enviarCorreo").click(
      function(){
          alert("El correo fue enviado correctamente");
      }
  )
  $(".underline").on("dblclick", function(){
      $(this).addClass("red")
  })
  $('.card').on('click', function(){
      $('.card-text').toggle()
  })