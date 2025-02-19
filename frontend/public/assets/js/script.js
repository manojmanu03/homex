$(document).ready(function(){
  $('#propertyImgModalBtn').click(function(){
     $('#propertyImgModalView').modal('show');
  });
  $('.propertyImgModalBtn2').click(function(){
     $('.propertyImgModalSrc').attr('src',$(this).attr('data-img'));
     $('#propertyImgModalView2').modal('show');
  });
});



$(document).ready(function(){



  $('.searchByListingType').change(function(){
     var listingType  = $('.searchByListingType').val();
     var propertyType = $('.searchByPropertyType').val();
     var priceType    = $('.searchByPriceType').val(); 
     var cityType     = $('.searchByCity').val(); 
     var searchArea   = $('.searchArea').val();  
     var param = { 
     	'listingType' : listingType,
     	'propertyType' : propertyType,
     	'priceType' : priceType,
     	'cityType' : cityType,
     	'searchArea' : searchArea 
     };
      $.ajax({
                type:'POST',
                url: "/ajax/searchPropertyCount_Ajax",
                data: param,
                success:function(response){
                  $('#searchResult').html(response); 
                } 
            });
  });




  $('.searchByPropertyType').change(function(){
         var listingType  = $('.searchByListingType').val();
	     var propertyType = $('.searchByPropertyType').val();
	     var priceType    = $('.searchByPriceType').val(); 
	     var cityType     = $('.searchByCity').val(); 
	     var searchArea   = $('.searchArea').val();  
	     var param = { 
	     	'listingType' : listingType,
	     	'propertyType' : propertyType,
	     	'priceType' : priceType,
	     	'cityType' : cityType,
	     	'searchArea' : searchArea 
	     };
	      $.ajax({
	                type:'POST',
	                url: "/ajax/searchPropertyCount_Ajax",     
	                data: param,
	                success:function(response){
	                	console.log(response);
	                  $('#searchResult').html(response); 
	                } 
	            });
  });
  $('.searchByPriceType').change(function(){
         var listingType  = $('.searchByListingType').val();
	     var propertyType = $('.searchByPropertyType').val();
	     var priceType    = $('.searchByPriceType').val(); 
	     var cityType     = $('.searchByCity').val(); 
	     var searchArea   = $('.searchArea').val();  
	     var param = { 
	     	'listingType' : listingType,
	     	'propertyType' : propertyType,  
	     	'priceType' : priceType,
	     	'cityType' : cityType,
	     	'searchArea' : searchArea 
	     };
	      $.ajax({
	                type:'POST',
	                url: "/ajax/searchPropertyCount_Ajax",   
	                data: param,
	                success:function(response){
	                	console.log(response);
	                   $('#searchResult').html(response); 
	                } 
	            });  
  });




  $('.searchByCity').change(function(){

         var listingType  = $('.searchByListingType').val();
	     var propertyType = $('.searchByPropertyType').val();
	     var priceType    = $('.searchByPriceType').val();
	     var cityType     = $('.searchByCity').val(); 
	     var searchArea   = $('.searchArea').val();  
	     var param = { 
	     	'listingType' : listingType,
	     	'propertyType' : propertyType,
	     	'priceType' : priceType,
	     	'cityType' : cityType,
	     	'searchArea' : searchArea 
	     };
	      $.ajax({
	                type:'POST',
	                url: "/ajax/searchPropertyCount_Ajax",
	                data: param,
	                success:function(response){
	                	console.log(response);
	                   $('#searchResult').html(response); 
	                } 
	            });  
  });



    $('.msg_send_btn').click(function(){
            var fk_user_id  = $('#fk_user_id').val(); 
            var property_id = $('#property_id').val();
            var message = $('.write_msg').val();
            var obj = { 
              'fk_user_id'  : fk_user_id,
              'property_id' : property_id,
              'message' : message 
            };
            $.ajax({ 
              type : 'POST',  
              data : obj,
              url  : '/Message/messagePostAjax', 
              success : function(res){
                  //$('.msg_history').append(res);
                  $('.write_msg').val('');
              }
            }); 
      }); 


    $('.searchDrop').change(function(){  
          var listing_type  = $('.listing_type').val();
          if(listing_type == "rent")
          {
            $('.rental_price').show();
            $('.total_price').hide();
          }else{
            $('.rental_price').hide(); 
            $('.total_price').show();
          } 
          var property_type = $('.property_type').val(); 
          var price         = (listing_type == "rent") ? $('.rental_price').val() : $('.total_price').val(); 
          var facing        = $('.facing').val(); 
          var bhk_type       = $('.bhktype').val();   
          var availability  = $('.availability').val(); 
          var houseOwner    = $('#houseOwner:checked').val();  
          var realEstateDeveloper  = $('#realEstateDeveloper:checked').val(); 
          var agent  = $('#agent:checked').val(); 
          var data = {
             listing_type : listing_type,
             property_type : property_type,
             price : price,
             facing : facing ? facing : 'any',
             bhk_type : bhk_type,
             availability : availability ? availability : 'any',
             houseOwner : houseOwner ? houseOwner : 'any',
             realEstateDeveloper : realEstateDeveloper ? realEstateDeveloper : 'any',
             agent : agent ? agent : 'any' 
          }
          //alert("ok");  
             $.ajax({
                type : 'POST',
                data : data,
                url : '/Ajax/searchPropertyAjax', 
                success:function(html){  
                   $('.ajaxSearchResult').html(html);
                 }
              });
        });




         $('.searchDrop').click(function(){  
          var listing_type  = $('.listing_type').val();
          if(listing_type == "rent")
          {
            $('.rental_price').show();
            $('.total_price').hide();
          }else{
            $('.rental_price').hide(); 
            $('.total_price').show();
          } 
          var property_type = $('.property_type').val(); 
          var price         = (listing_type == "rent") ? $('.rental_price').val() : $('.total_price').val(); 
          var facing        = $('.facing').val(); 
          var bhk_type       = $('.bhktype').val();   
          var availability  = $('.availability').val(); 
          var houseOwner    = $('#houseOwner:checked').val();  
          var realEstateDeveloper  = $('#realEstateDeveloper:checked').val(); 
          var agent  = $('#agent:checked').val(); 
          var data = {
             listing_type : listing_type,
             property_type : property_type,
             price : price,
             facing : facing ? facing : 'any',
             bhk_type : bhk_type,
             availability : availability ? availability : 'any',
             houseOwner : houseOwner ? houseOwner : 'any',
             realEstateDeveloper : realEstateDeveloper ? realEstateDeveloper : 'any',
             agent : agent ? agent : 'any' 
          }
          //alert("ok");  
             $.ajax({
                type : 'POST',
                data : data,
                url : '/Ajax/searchPropertyAjax', 
                success:function(html){  
                   $('.ajaxSearchResult').html(html);
                   //console.log(html); 
                 }
              });
        }); 


        $('#checkUsernameAvailability').click(function(){
          var username = $('#username').val();
          var data = {
            username : username
          }
          $.ajax({
            type : 'POST',
            data : data,  
            url : '/Ajax/checkUsernameAvailabilityAjax',  
            success:function(html){   
               $('#isUsernameAvailable').html(html);
               //console.log(html); 
             }
          });   
        });
      var i = 2;
      $('.addServiceAreaBtn').click(function(){
      	var max = 6;
      	if(i > max )
      	{
          alert('Sorry you can add only 6 service area');
      	}else{
      		var html = '<div class="col-md-5 mb-3">'+
                     '<label for="service_area">Service Area - '+i+'</label>'+
                     '<input type="text" class="form-control" id="service_area" name="service_area[]" value="" placeholder="Eg : West Pitampura">'+
                     '<div class="invalid-feedback">'+
                        'Please select your service area.'+
                     '</div>'+
                   '</div>';
      	    $('.addServiceAreaDiv').append(html);
      	}
      	 i++; 
      });



     $('.calcAdsPrice').click(function(){ 
        $('#adsPaymentPopup').modal('show');
        var pid = $(this).attr('data-pid');
        var adstype = $(this).attr('data-adstype');
        $('#sPropertyId').val(pid); 
        $('#sAdsType').val(adstype); 
     }) 


   $('#featured_from').change(function(){
        var from = $(this).val();
        var upto = $('#featured_upto').val();
        var adsPrice = $('#adsPricePerDay').val();

        if(from && upto)
        {
              var date1 = new Date(from); 
              var date2 = new Date(upto);   
                
              // To calculate the time difference of two dates 
              var Difference_In_Time = date2.getTime() - date1.getTime(); 
                
              // To calculate the no. of days between two dates 
              var Difference_In_Days = 1 + Difference_In_Time / (1000 * 3600 * 24);
              var totalAdsprice = adsPrice * Difference_In_Days;
              if(Difference_In_Days > 0)
              {
                var html = '<hr>'+
                         '<h5>Make this Property Featured for '+Difference_In_Days+' days</h5>'+
                         '<h4>Total Cost : '+totalAdsprice+' INR</h4>'+
                         '<br>'+
                         '<input type="submit" class="btn btn-success" name="createAdsPayment" value="Create Payment"/>' ;
              }else{
                var html = '<hr>'+
                           '<h5>Invalid Date Choosen</h5>';
              } 
              
              $('#resultCalcAdsPrice').html(html);
        }
     });

     $('#featured_upto').change(function(){
        var from = $('#featured_from').val();
        var upto = $(this).val(); 
        var adsPrice = $('#adsPricePerDay').val();

        if(from && upto) 
        {
              var date1 = new Date(from); 
              var date2 = new Date(upto);   
                
              // To calculate the time difference of two dates 
              var Difference_In_Time = date2.getTime() - date1.getTime(); 
                
              // To calculate the no. of days between two dates 
              var Difference_In_Days = 1 + Difference_In_Time / (1000 * 3600 * 24); 
              var totalAdsprice = adsPrice * Difference_In_Days; 
              if(Difference_In_Days > 0)
              {
                var html = '<hr>'+
                         '<h5>Make this Property Featured for '+Difference_In_Days+' days</h5>'+
                         '<h4>Total Cost : '+totalAdsprice+' INR</h4>'+
                         '<br>'+ 
                         '<input type="submit" class="btn btn-success" name="createAdsPayment" value="Create Payment"/>' ;
              }else{
                var html = '<hr>'+
                           '<div class="alert alert-danger">Invalid Date Choosen</div>';
              } 
            
              $('#resultCalcAdsPrice').html(html);
        }
     }) 
     
     $('#agentLocation').keypress(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#agentSForm').submit(); 
        } 
     });
     $('#agentLocation').keyup(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#agentSForm').submit(); 
        } 
     });
     $('#agentName').keypress(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#agentSForm').submit();  
        } 
     }); 
     $('#agentService').change(function(event){
          if($('#agentName').val() || $('#agentLocation').val())
          {
            $('#agentSForm').submit(); 
          } 
     });
     
     $('.starHover').click(function(){ 
          var title  = $(this).attr('data-title');
          var starid = $(this).attr('data-starid');
          $('#selectedStar').val(starid);
          if(starid !=  0)
          {
              for(i = 1; i <= starid ; i++)
              { 
                $('.star'+i).show();  
                $('.star-empty'+i).hide();  
              } 
          }  
     });
     $('.starHover').mouseover(function(){ 
          var title  = $(this).attr('data-title');
          var starid = $(this).attr('data-starid');
          for(i = 1; i <= starid ; i++){ 
              $('.star'+i).show();  
              $('.star-empty'+i).hide();  
          } 
          $('#starRemark').html('&nbsp;&nbsp;' + title);
     });
     $('.starHover').mouseout(function(){
            $('.str').hide();  
            $('.estr').show();  
            $('#starRemark').html('');
          var starid = $('#selectedStar').val(); 
          if(starid !=  0)
          {   
              for(i = 1; i <= starid ; i++)
              { 
                $('.star'+i).show();  
                $('.star-empty'+i).hide();  
              } 
          } 
     });
     
      $('#iAgree').click(function(){ 
          var agree  = $('#iAgree:checked').val() ? true : false;  
          if(agree == true)
          {
            $('#submitReview').removeAttr('disabled');
          }else{
            $('#submitReview').attr('disabled',""); 
          }
     });

      $('.reportFlagBtn').click(function(){
         var reviewId = $(this).attr('data-reviewid');
         $('#reviewId').val(reviewId); 
         $('#reportFlag').modal('show');
      });

     $('#submitReviewFlag').click(function(){ 
          var problem  = $('#problem').val();  
          var details  = $('#details').val();  
          var email    = $('#email').val();
          var reviewId    = $('#reviewId').val();

          if(email && details) 
          { 
              var data = {
                  problem : problem,
                  details : details,
                  email   : email,
                  reviewId : reviewId
                }  
                $.ajax({
                  type:'POST',
                  url:'/Ajax/submitReviewFlag',
                  data:data,
                  success:function(res)
                  {
                    $('#reviewSubmitAlert').html('<div class="alert alert-success">'+
                                                  '<b>Flagged successfully!</b>'+
                                                  '<br>We will take another look at this review.'+ 
                                                  'Thanks for helping make the site more useful to everyone.</div>');
                    $('#reviewSubmitForm').hide();    
                  }
                }); 
          }else{
             $('#reviewSubmitAlert').html('<div class="alert alert-danger">Complete all details!</div>');
          }

     });   

  }); 



//   setTimeout(function() {
//             var fk_user_id  = $('#fk_user_id').val(); 
//             var property_id = $('#property_id').val();
//             var obj = { 
//               'fk_user_id'  : fk_user_id,
//               'property_id' : property_id
//             };
//            $.ajax({ 
//               type : 'POST',  
//               data : obj,
//               url  : '/Message/getMessagesAjax', 
//               success : function(res){
//                   $('.msg_history').html(res);
//               }
//             }); 
// }, 5000);

