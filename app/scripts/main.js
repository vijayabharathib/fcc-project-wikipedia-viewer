
var apiURLPrefix="https://en.wikipedia.org/w/api.php"; //base url
var searchQuery="Big History..."; //default & placeholder
/**
  * wait until the document is ready to take orders
  * define behaviour buttons and text fields
  * define ajax api call to wiki
  */
$(document).ready(function(){
  /**
    * searchQuery is global and has a default
    * get value from search textbox
    * if textbox is blank, let the default as is
    * fire the api call
    */
  $("#search").on("click",function(){
    if(!$(".query").val()=="")
      searchQuery=$(".query").val();
    searchWiki();
  });

  /**
    * fire search function call if textbox receives enter key
    * handle blank text box (use the default)
    */
  $(".query").on("keypress",function(event){
    if(event.which==13){
      event.preventDefault(); //prevent page reload on 'enter',just call api
      if(!$(".query").val()=="")
        searchQuery=$(".query").val();
      searchWiki();
    }
  });

  /**
    * search generator for wiki api
    * info prop used to get url
    * extract used to get snippet - 140 chars
    * apiURLPrefix - global base api url
    * searchQuery - global search text variable
    * render results on success
    */
  function searchWiki(){
    $.ajax( {
      url: apiURLPrefix, //watch out for this global variable
      datatype: "jsonp",
      data: {
        action: "query",
        format: "json",
        origin: "*", //required to treat cross origin issues
        generator: "search",
        gsrnamespace: 0,
        gsrlimit: 10, //result limit
        inprop: "url", //request for url to the article
        prop: "info|extracts", // request for url and snippets
        exintro: true,
        explaintext:true,
        exchars: 140, //snippet char length
        exlimit: "max",
        gsrsearch: searchQuery //watch out for this global variable
      },
      /**
        * data holds api response on success
        * get the list of keys from resulting pages
        * use the keys to get each article
        * render title as link to article
        * render snippet
        */
      success: function(data) {
        var keys=Object.keys(data.query.pages); //get the keys
        var articles=data.query.pages; //list of articles in result
        var result=""; //container for results converted to html
        for(var i=0;i<keys.length;i++){
          var article=articles[keys[i]];
          result+="<article><h2><a href='" + article.fullurl
            +"' target='_blank'>" + article.title
            +" <i class='fa fa-external-link'></i></a></h2>"
            + "<p>" + article.extract + "</p></article>";
        }
        $('.result').html(result); //render result
      }
  });
  }
});

    
