$(document).ready(function(){

  var allBooks = $('#allBooks');
  allBooks();
  addBooks();
  
$.ajax({
      url: 'http://localhost:8080/books',
      data: '{}',
      type: 'GET',
      dataType: "json",
    success: function(json) {
      console.log(json);

        for (var i = 0; i < json.length; i++) {
          var book = $('<li>');
            book.addClass('list-group-item');


          var title =$('<a>').text(json[i].title);
            title.addClass('list-group-item list-group-item-action');


            //console.log(json[i].id);

            var id = $('<div>').text(json[i].id);
            id.addClass('list-group-item');
            id.addClass('idToggle')

            $(document).on('click',".list-group-item", function(e){
              e.preventDefault();
              $(".idToggle").toggle(2000);
            });
              //   title.text("<div>" + id).toggle();
              // });

          var author =$('<div>').text(json[i].author);
            author.addClass('list-group-item');
          var publisher =$('<div>').text(json[i].publisher);
            publisher.addClass('list-group-item');

          book.append(title, id, author, publisher);
          $('#bookList').append(book);
        }
    },
    error: function(xhr, status, errorThrown){
      console.log(status);
    },
    complete: function(xhr, status){
      console.log("done");
    }

  });
  });
