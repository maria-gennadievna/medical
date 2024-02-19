
// scroll

// var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
  
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
    
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
      
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });

// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });










// basket
// window.onload= function() {
//             document.getElementById('toggler').onclick = function() {
//                 openbox('box-basket', this);
//                 return false;
//             };
//         };
    
//     function openbox(id, toggler) {
//             var div = document.getElementById(id);
//             if(div.style.display == 'block') {
//                 div.style.display = 'none';
//                 toggler.innerHTML = 'Открыть';
//             }
//             else {
//                 div.style.display = 'block';
//                 toggler.innerHTML = 'Закрыть';
//             }
//         }
    






// $(document).ready(function(){
//     sb_set_basket_events();
//   });
  
//   function sb_set_basket_events(){
    
//     // Set scroll for basket
//     $(window).scroll(function(){
//       if($(window).scrollTop() === 0){
//         $(".basket-container").removeClass("basket-scrolling");
//       }else{
//         if(!$(".basket-container").hasClass("basket-scrolling")){
//           $(".basket-container").toggleClass("basket-scrolling");
//         }
//       }
//     });
    
//     // Set Icon open and close
//     $(".basket-icon").click(function(){
//       $(this).parent().toggleClass("open-basket");
//     });
    
//     // Set add to basket events
//     $(".select_button_wrapper").click(function(){
//      sb_add_to_basket(
//       $(this).data("basket-product-id"),
//       $(this).data("basket-product-name"),
//       $(this).data("basket-product-price")
//      ); 
//     });
    
//     // Set remove product from basket
//     $(".remove-product").click(function(){
//       sb_remove_from_basket($(this));
//     });
    
//     // Set on change for prouct amounts
//     $(".basket-products input").change(function(){
//       sb_sum_total();
//     });
    
//   }
  
//   function sb_add_to_basket(pid, name, price){
//     if(sb_product_not_exist(pid)){
//       var shortName = name;
//       if(name.length > 10){
//         shortName = name.substring(15, 0) + "...";
//       }
//       $(".basket-products ul").append(
//         $("<li>").append(
//           $("<span>", {"class": "oi oi-x remove-product"}).click(function(){
//             sb_remove_from_basket($(this));
//           }),
//           $("<input>", {"type": "number", "min": "1"}).val(1).change(function(){
//             sb_sum_total();
//           }),
//           shortName,
//           $("<span>", {"class": "amount"}).text("\u20AC " + price)
//         ).data("price", price).data("pid", pid)
//       );
//     }
//     sb_sum_total();
//     sb_update_basket_amount();
//   }
  
//   function sb_product_not_exist(pid){
//     var notFound = true;
//     $(".basket-products ul").find("li").each(function(){
//       if($(this).data("pid") == pid){
//         var val = Number($(this).find("input").val()) + 1;
//         $(this).find("input").val(val);
//         notFound = false;
//         return false;
//       }else{
//         notFound = true;
//       }
//     });
//     return notFound;
//   }
  
//   function sb_remove_from_basket(product){
//     $(product).parent().remove();
//     sb_sum_total();
//     sb_update_basket_amount();
//   }
  
//   function sb_sum_total(){
//     var total = 0;
//     $(".basket-products ul").find("li").each(function(){
//       var amount = Number($(this).find("input").val());
//       total = total + (amount * Number($(this).data("price")));
//     });
//     $(".basket-total-amount").text("\u20AC " + total);
//   }
  
//   function sb_update_basket_amount(){
//     $(".basket-count p").text($(".basket-products ul").find("li").length);
//   }
  
  