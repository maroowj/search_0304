var size=9;
getList();
$("#list").on("click", "a", function(){
    var title=$(this).attr("title");
    var authors=$(this).attr("authors");
    var contents=$(this).attr("contents");
    var price=$(this).attr("price");
    var thumbnail=$(this).find("img").attr("src");
    $("#image").attr("src", thumbnail);
    $("#title").html(title);            
    $("#authors").html(authors + " ("+price+"원)");          
    $("#contents").html(contents);

});

$("#txtQuery").on("keydown", function(e){
    if(e.keyCode==13){
    size=9;
    getList();
    };
});

$("#btnMore").on("click", function(){
    size +=3;
    getList();
});

$("#btnTop").on("click", function(){
   $("#txtQuery").focus();
});


function getList(){
    var query = $("#txtQuery").val();
    $.ajax({
        type: "get",
        url: url,
        data: {"query": query, "size": size},
        dataType: "json",
        headers: {"Authorization": "KakaoAK a60bc09c00995f3ab5c8f997d00e3c46"},
        success: function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}


