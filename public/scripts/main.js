var apiURLPrefix="https://en.wikipedia.org/w/api.php",searchQuery="Big History...";$(document).ready(function(){function e(){$.ajax({url:apiURLPrefix,datatype:"jsonp",data:{action:"query",format:"json",origin:"*",generator:"search",gsrnamespace:0,gsrlimit:10,inprop:"url",prop:"info|extracts",exintro:!0,explaintext:!0,exchars:140,exlimit:"max",gsrsearch:searchQuery},success:function(e){for(var r=Object.keys(e.query.pages),a=e.query.pages,t="",i=0;i<r.length;i++){var n=a[r[i]];t+="<article><h2><a href='"+n.fullurl+"' target='_blank'>"+n.title+" <i class='fa fa-external-link'></i></a></h2><p>"+n.extract+"</p></article>"}$(".result").html(t)}})}$("#search").on("click",function(){""==!$(".query").val()&&(searchQuery=$(".query").val()),e()}),$(".query").on("keypress",function(r){13==r.which&&(r.preventDefault(),""==!$(".query").val()&&(searchQuery=$(".query").val()),e())})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMUHJlZml4Iiwic2VhcmNoUXVlcnkiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlYXJjaFdpa2kiLCJhamF4IiwidXJsIiwiZGF0YXR5cGUiLCJkYXRhIiwiYWN0aW9uIiwiZm9ybWF0Iiwib3JpZ2luIiwiZ2VuZXJhdG9yIiwiZ3NybmFtZXNwYWNlIiwiZ3NybGltaXQiLCJpbnByb3AiLCJwcm9wIiwiZXhpbnRybyIsImV4cGxhaW50ZXh0IiwiZXhjaGFycyIsImV4bGltaXQiLCJnc3JzZWFyY2giLCJzdWNjZXNzIiwia2V5cyIsIk9iamVjdCIsInF1ZXJ5IiwicGFnZXMiLCJhcnRpY2xlcyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJhcnRpY2xlIiwiZnVsbHVybCIsInRpdGxlIiwiZXh0cmFjdCIsImh0bWwiLCJvbiIsInZhbCIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQ0EsR0FBSUEsY0FBYSxxQ0FDYkMsWUFBWSxnQkFNaEJDLEdBQUVDLFVBQVVDLE1BQU0sV0FrQ2hCLFFBQVNDLEtBQ1BILEVBQUVJLE1BQ0FDLElBQUtQLGFBQ0xRLFNBQVUsUUFDVkMsTUFDRUMsT0FBUSxRQUNSQyxPQUFRLE9BQ1JDLE9BQVEsSUFDUkMsVUFBVyxTQUNYQyxhQUFjLEVBQ2RDLFNBQVUsR0FDVkMsT0FBUSxNQUNSQyxLQUFNLGdCQUNOQyxTQUFTLEVBQ1RDLGFBQVksRUFDWkMsUUFBUyxJQUNUQyxRQUFTLE1BQ1RDLFVBQVdyQixhQVNic0IsUUFBUyxTQUFTZCxHQUloQixJQUFJLEdBSEFlLEdBQUtDLE9BQU9ELEtBQUtmLEVBQUtpQixNQUFNQyxPQUM1QkMsRUFBU25CLEVBQUtpQixNQUFNQyxNQUNwQkUsRUFBTyxHQUNIQyxFQUFFLEVBQUVBLEVBQUVOLEVBQUtPLE9BQU9ELElBQUksQ0FDNUIsR0FBSUUsR0FBUUosRUFBU0osRUFBS00sR0FDMUJELElBQVEseUJBQTJCRyxFQUFRQyxRQUN4QyxxQkFBdUJELEVBQVFFLE1BQy9CLG1EQUNTRixFQUFRRyxRQUFVLGlCQUVoQ2pDLEVBQUUsV0FBV2tDLEtBQUtQLE1BaEV4QjNCLEVBQUUsV0FBV21DLEdBQUcsUUFBUSxXQUNDLEtBQW5CbkMsRUFBRSxVQUFVb0MsUUFDZHJDLFlBQVlDLEVBQUUsVUFBVW9DLE9BQzFCakMsTUFPRkgsRUFBRSxVQUFVbUMsR0FBRyxXQUFXLFNBQVNFLEdBQ2pCLElBQWJBLEVBQU1DLFFBQ1BELEVBQU1FLGlCQUNpQixLQUFuQnZDLEVBQUUsVUFBVW9DLFFBQ2RyQyxZQUFZQyxFQUFFLFVBQVVvQyxPQUMxQmpDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBhcGlVUkxQcmVmaXg9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwXCI7IC8vYmFzZSB1cmxcbnZhciBzZWFyY2hRdWVyeT1cIkJpZyBIaXN0b3J5Li4uXCI7IC8vZGVmYXVsdCAmIHBsYWNlaG9sZGVyXG4vKipcbiAgKiB3YWl0IHVudGlsIHRoZSBkb2N1bWVudCBpcyByZWFkeSB0byB0YWtlIG9yZGVyc1xuICAqIGRlZmluZSBiZWhhdmlvdXIgYnV0dG9ucyBhbmQgdGV4dCBmaWVsZHNcbiAgKiBkZWZpbmUgYWpheCBhcGkgY2FsbCB0byB3aWtpXG4gICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAvKipcbiAgICAqIHNlYXJjaFF1ZXJ5IGlzIGdsb2JhbCBhbmQgaGFzIGEgZGVmYXVsdFxuICAgICogZ2V0IHZhbHVlIGZyb20gc2VhcmNoIHRleHRib3hcbiAgICAqIGlmIHRleHRib3ggaXMgYmxhbmssIGxldCB0aGUgZGVmYXVsdCBhcyBpc1xuICAgICogZmlyZSB0aGUgYXBpIGNhbGxcbiAgICAqL1xuICAkKFwiI3NlYXJjaFwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBpZighJChcIi5xdWVyeVwiKS52YWwoKT09XCJcIilcbiAgICAgIHNlYXJjaFF1ZXJ5PSQoXCIucXVlcnlcIikudmFsKCk7XG4gICAgc2VhcmNoV2lraSgpO1xuICB9KTtcblxuICAvKipcbiAgICAqIGZpcmUgc2VhcmNoIGZ1bmN0aW9uIGNhbGwgaWYgdGV4dGJveCByZWNlaXZlcyBlbnRlciBrZXlcbiAgICAqIGhhbmRsZSBibGFuayB0ZXh0IGJveCAodXNlIHRoZSBkZWZhdWx0KVxuICAgICovXG4gICQoXCIucXVlcnlcIikub24oXCJrZXlwcmVzc1wiLGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZihldmVudC53aGljaD09MTMpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHBhZ2UgcmVsb2FkIG9uICdlbnRlcicsanVzdCBjYWxsIGFwaVxuICAgICAgaWYoISQoXCIucXVlcnlcIikudmFsKCk9PVwiXCIpXG4gICAgICAgIHNlYXJjaFF1ZXJ5PSQoXCIucXVlcnlcIikudmFsKCk7XG4gICAgICBzZWFyY2hXaWtpKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICAqIHNlYXJjaCBnZW5lcmF0b3IgZm9yIHdpa2kgYXBpXG4gICAgKiBpbmZvIHByb3AgdXNlZCB0byBnZXQgdXJsXG4gICAgKiBleHRyYWN0IHVzZWQgdG8gZ2V0IHNuaXBwZXQgLSAxNDAgY2hhcnNcbiAgICAqIGFwaVVSTFByZWZpeCAtIGdsb2JhbCBiYXNlIGFwaSB1cmxcbiAgICAqIHNlYXJjaFF1ZXJ5IC0gZ2xvYmFsIHNlYXJjaCB0ZXh0IHZhcmlhYmxlXG4gICAgKiByZW5kZXIgcmVzdWx0cyBvbiBzdWNjZXNzXG4gICAgKi9cbiAgZnVuY3Rpb24gc2VhcmNoV2lraSgpe1xuICAgICQuYWpheCgge1xuICAgICAgdXJsOiBhcGlVUkxQcmVmaXgsIC8vd2F0Y2ggb3V0IGZvciB0aGlzIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgZGF0YXR5cGU6IFwianNvbnBcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aW9uOiBcInF1ZXJ5XCIsXG4gICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAgIG9yaWdpbjogXCIqXCIsIC8vcmVxdWlyZWQgdG8gdHJlYXQgY3Jvc3Mgb3JpZ2luIGlzc3Vlc1xuICAgICAgICBnZW5lcmF0b3I6IFwic2VhcmNoXCIsXG4gICAgICAgIGdzcm5hbWVzcGFjZTogMCxcbiAgICAgICAgZ3NybGltaXQ6IDEwLCAvL3Jlc3VsdCBsaW1pdFxuICAgICAgICBpbnByb3A6IFwidXJsXCIsIC8vcmVxdWVzdCBmb3IgdXJsIHRvIHRoZSBhcnRpY2xlXG4gICAgICAgIHByb3A6IFwiaW5mb3xleHRyYWN0c1wiLCAvLyByZXF1ZXN0IGZvciB1cmwgYW5kIHNuaXBwZXRzXG4gICAgICAgIGV4aW50cm86IHRydWUsXG4gICAgICAgIGV4cGxhaW50ZXh0OnRydWUsXG4gICAgICAgIGV4Y2hhcnM6IDE0MCwgLy9zbmlwcGV0IGNoYXIgbGVuZ3RoXG4gICAgICAgIGV4bGltaXQ6IFwibWF4XCIsXG4gICAgICAgIGdzcnNlYXJjaDogc2VhcmNoUXVlcnkgLy93YXRjaCBvdXQgZm9yIHRoaXMgZ2xvYmFsIHZhcmlhYmxlXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgICogZGF0YSBob2xkcyBhcGkgcmVzcG9uc2Ugb24gc3VjY2Vzc1xuICAgICAgICAqIGdldCB0aGUgbGlzdCBvZiBrZXlzIGZyb20gcmVzdWx0aW5nIHBhZ2VzXG4gICAgICAgICogdXNlIHRoZSBrZXlzIHRvIGdldCBlYWNoIGFydGljbGVcbiAgICAgICAgKiByZW5kZXIgdGl0bGUgYXMgbGluayB0byBhcnRpY2xlXG4gICAgICAgICogcmVuZGVyIHNuaXBwZXRcbiAgICAgICAgKi9cbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGtleXM9T2JqZWN0LmtleXMoZGF0YS5xdWVyeS5wYWdlcyk7IC8vZ2V0IHRoZSBrZXlzXG4gICAgICAgIHZhciBhcnRpY2xlcz1kYXRhLnF1ZXJ5LnBhZ2VzOyAvL2xpc3Qgb2YgYXJ0aWNsZXMgaW4gcmVzdWx0XG4gICAgICAgIHZhciByZXN1bHQ9XCJcIjsgLy9jb250YWluZXIgZm9yIHJlc3VsdHMgY29udmVydGVkIHRvIGh0bWxcbiAgICAgICAgZm9yKHZhciBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe1xuICAgICAgICAgIHZhciBhcnRpY2xlPWFydGljbGVzW2tleXNbaV1dO1xuICAgICAgICAgIHJlc3VsdCs9XCI8YXJ0aWNsZT48aDI+PGEgaHJlZj0nXCIgKyBhcnRpY2xlLmZ1bGx1cmxcbiAgICAgICAgICAgICtcIicgdGFyZ2V0PSdfYmxhbmsnPlwiICsgYXJ0aWNsZS50aXRsZVxuICAgICAgICAgICAgK1wiIDxpIGNsYXNzPSdmYSBmYS1leHRlcm5hbC1saW5rJz48L2k+PC9hPjwvaDI+XCJcbiAgICAgICAgICAgICsgXCI8cD5cIiArIGFydGljbGUuZXh0cmFjdCArIFwiPC9wPjwvYXJ0aWNsZT5cIjtcbiAgICAgICAgfVxuICAgICAgICAkKCcucmVzdWx0JykuaHRtbChyZXN1bHQpOyAvL3JlbmRlciByZXN1bHRcbiAgICAgIH1cbiAgfSk7XG4gIH1cbn0pO1xuXG4gICAgXG4iXX0=
