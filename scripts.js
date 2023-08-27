        /*function for smooth link jumping, whenever the user clicks a link.*/
        $(document).on('click', 'a[href^="#"]', function (event) { 
            event.preventDefault(); 
                $('html, body').animate({
                 scrollTop: $($.attr(this, 'href')).offset().top 
             }, 900,"linear");
        });   
        /*Makes body black when the membership button is pressed, and the background white, when other links are pressed, resetting this*/
        $("a").on("click",function(){
            $("body").css("background-color","white")
        })
        $(".membership_link").on("click",function(){
            $("body").css("background-color","black")
        })
        /*Code for gallery slideshow*/
       img_src_list=["Maunga Images/Maunga Club Images/maunga_club_cabin.jpg","Maunga Images/Maunga Club Images/pukeko/bathroom.jpg","Maunga Images/Maunga Club Images/kereru/adult_bedroom.jpg",
       "Maunga Images/Maunga Club Images/kereru/kids_bedroom.jpg","Maunga Images/Maunga Club Images/kereru/kitchen.jpg","Maunga Images/Maunga Club Images/kakapo/hallway.jpg"]
    
       img_alt_list=["Club cabin with christmas decorations","Club bathroom","Kereru cabin adult bedroom","Kereru cabin kids bedroom","Club kitchen","Kakapo cabin hallway"]
        x=0    /*x is the counter, and will dictate what images appear*/
    setInterval(function() { /*A setInterval function fires 1 time every specific milliseconds. In this case, it is 3000, or 3 seconds, as defined in line 136  */
        if (x+1<img_src_list.length){x+=1}/*If x is NOT greater than the list length, increase it, as the number is still within the list_length*/
        else{x=0}/*otherwise, reset x to 0*/
        $(".gallery_image").attr("src",img_src_list[x]) /*after these changes have been done, change the gallery image to xth index of the array, including the alt as well*/
        $(".gallery_image").attr("alt",img_alt_list[x])
                /*img 1 is the smaller faded image that appears to the left to the gallery images*/
        if (x==0){$("#img1").attr("src",img_src_list[img_src_list.length-1]) /*If x is 0, display the last image on the array, along with it's alt.*/
        $("#img1").attr("alt",img_alt_list[img_alt_list.length-1])} 
    
        else{$("#img1").attr("src",img_src_list[x-1]);$(".gallery_image").attr("alt",img_alt_list[x-1])} /*Otherwise, display the image the gallery image was previously*/
        /*Changes #img2 the smaller image to the right of the gallery images*/
        if(x+1==img_src_list.length){$("#img2").attr("src",img_src_list[0]) /*if x is greater than the list length, display the first image of the array.*/ 
                                     $("#img2").attr("alt",img_alt_list[0])}
        else{$("#img2").attr("src",img_src_list[x+1])  /*otherwise, display the image the gallery image will become next.*/
             $("#img2").attr("alt",img_alt_list[x+1])}
    }, 3000);
    
    $("#membership").on("mouseover",function(){
        $("body").css("background-color","black")
    })
    $("#membership").on("mouseleave",function(){
        $("body").css("background-color","white")
    })
    
    $(".membership_sub_button").on("click",function(){
        error_string="" /*This will be tracking the errors if an input is empty, and if nothing is added to it, it will stay empty.*/
        if($("#full_name").val()==""){error_string+="Full name needs to have info\n"}
        if($("#address").val()==""){error_string+="Address needs to have info\n"} /*e.g if The adress input is empty, add a message onto error_string*/
        if($("#address_proof").val()==""){error_string+="Address Proof needs to have info\n"}
        if($("#id_proof").val()==""){error_string+="ID proof needs to have info"}
    
        if(error_string==""){ alert("Information sent to maungaclub@maungaclub.maungaclub")} /*if no errors, alert that the information has been sent*/
        else{alert(error_string)}/*otherwise, notify the people*/
    })