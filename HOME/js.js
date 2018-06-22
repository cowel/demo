$('body').on('keypress', 'input', function(e) {
      if(e.keyCode === 13) {
        var value = $(this).val()
        var ele = `<li>${value}</li>`
        $('.list').append($(ele))
      }
    })
