
$(document).ready(function (){
        var link = "http://api.tumblr.com/v2/blog/archatlas.tumblr.com/posts/photo?";
        $.ajax({
          type: "GET",
          url : link,
          dataType: "jsonp", 
          data: {
              api_key: "o6cTRlyutTPAa6ESQNdcBX2iw1PS3sTl0f2B0jYXO18xf3sfqM"
          }
        }).done(function( data ) {
          $.each(data.response.posts, function(){
              teste = data.response.posts;
            var _photos = this.photos;
            
            $.each(_photos, function(){
              $('.somethig-extra .contend').append("<a class='fancybox' data-fancybox-group='gallery'> <img src='" +this.original_size.url+ "'/> </a>");
            });
          });
        });
});

$(".trigger").each(function (i) {
        $(this).on("click", function () {
            
            $.fancybox($(".fancybox"));
        }); // on click
    }); // each