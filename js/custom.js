//index
$(document).ready(function() {
        //全局
        function turn(){
            var addresList = [ 'index.html', 'aboutus.html', 'member.html', 'service.html', 'wedding.html', 'spaces.html', 'media.html', 'news.html', 'information.html'];
            var $mainArrow = '<div class="l2 mainArrow"><img src="images/arrow_left.png"></div><div class="r2 mainArrow"><img src="images/arrow_right.png"></div>';
            var addres = window.location.pathname.split('/').pop()==''?'index.html':window.location.pathname.split('/').pop();
            var front = window.location.pathname.split(addres)[0];
            $('#container').append($mainArrow);
            $('.l2.mainArrow').css('top','355px');
            $('.r2.mainArrow').css('top','355px');
            $('.l2').on('click', function(){
                if(addresList.indexOf(addres)==0){
                    index = addresList.length - 1;
                }else{
                    index = addresList.indexOf(addres)-1;
                }
                window.location.href = front + addresList[index];
            });
            $('.r2').on('click', function(){
                if(addresList.indexOf(addres)==(addresList.length - 1)){
                    index = 0
                }else{
                    index = addresList.indexOf(addres) + 1;
                }
                window.location.href = front + addresList[index];
            });
        
        }
        turn();

        $( ".wedding-black>div" ).hide();
        $('.wedding-black .weddingClose').click(function(){
            $('.wedding-black>div').fadeOut(700, function(){
                $('.wedding-black').fadeOut(500);
            });
        })
        $('.wedding4_1btn').on('click', function(){
            $('.wedding-black').fadeIn(900, function(){
                $( ".wedding-black>div" ).show()
                $( ".wedding-black>div" ).animate({
                    top: '53px'
                  }, 700 );
            });
        });

        $('.abc').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/1.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        $('.ab').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/2.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        $('.bc').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/3.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        $('.a').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/4.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        $('.b').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/5.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        $('.c').hover(function(){
          $('.dining-map').attr('src', 'images/場景導覽圖/6.gif'); 
        }, function(){$('.dining-map').attr('src', 'images/場景導覽圖/original.png');})
        audio = document.getElementById('audio');
        audio.muted = true;
        setTimeout(function(){
            audio.muted = getCookie('audioMuted')=='true'?true:false;
            audio.currentTime = getCookie('audioTime');
        }, 1000)
        function muted(){
            if(audio.muted){
                audio.muted = false;
                $(this).find('span').text("SOUND ON");
            }else{
                audio.muted = true;
                $(this).find('span').text("SOUND OFF");
            }
        }
        // console.log(getCookie('audio'));
        $(window).unload(function(){
          UserExit();
        });
        function UserExit(){
          setCookie("audioTime", audio.currentTime, 1);
          setCookie("audioMuted", audio.muted, 1);
        }

        function setCookie(cname,cvalue,exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*3*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname+"="+cvalue+"; "+expires;
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        var pre = '<p class="perBox"><span class="percent">0</span>%</p>'
        $('.black').html(pre)
        var n = 10;
        var t = 80;
        setTimeout(function(){n=20;$('.percent','.black').text(n)},t*1)
        setTimeout(function(){n=30;$('.percent','.black').text(n)},t*2)
        setTimeout(function(){n=40;$('.percent','.black').text(n)},t*3)
        setTimeout(function(){n=50;$('.percent','.black').text(n)},t*4)
        setTimeout(function(){n=60;$('.percent','.black').text(n)},t*5)
        setTimeout(function(){n=70;$('.percent','.black').text(n)},t*6)
        setTimeout(function(){n=80;$('.percent','.black').text(n)},t*7)
        setTimeout(function(){n=90;$('.percent','.black').text(n)},t*8)
        setTimeout(function(){n=100;$('.percent','.black').text(n)},t*9)

        //~ $.get("test.txt",function(data){
            //~ alert(data);
            //~ });
        audio = document.getElementById('audio');
        function muted(){
            if(audio.muted){
                audio.muted = false;
                $(this).find('span').text("SOUND ON");
            }else{
                audio.muted = true;
                $(this).find('span').text("SOUND OFF");
            }
        }
        
        $('.background_music').on('click', muted).css("cursor","pointer");
        $("#StartIndexImg").fadeIn(3000,function(){ //首頁開頭的動畫
            setTimeout(function(){//停？秒
            $("#StartIndexImg").fadeOut(2000,function(){
                $('.indexblack').fadeOut(1500,function(){
                    $('#indexfooter').slideDown(800,function(){
                        $('#indexmenubar').fadeIn(800,function(){
                            $("logo_action").fadeIn(800);
                            $("#welcome_img1").animate({//以圖片作移動
                              marginRight: "30px",
                              opacity:'0.9',
                            }, 2000,"swing",function(){
                                    $("#welcome_img2").fadeIn(1500);
                                });
                        });
                    });
                    
                });
            });
            }, 3000);//settimeout的結尾
        });
          
        function aboutusstart(){//aboutus的開頭動畫function
            
            $("#aboutus_img2").hide();
            $("#aboutus_img1").css({"opacity":"0.05","margin-right":"80px","margin-bottom":"10px"});
            $("#page1_div").fadeIn(1000);
            $("#aboutus_img1").animate({//以圖片作移動
                  marginRight: "80px",/*原本為30px*/
                  opacity:'0.9',
                }, 1200,"swing",function(){
                     $("#aboutus_img2").fadeIn(2000);
            });
            }
        setTimeout(function(){//aboutus的開頭動畫
            // $('.black').fadeOut(500);
            aboutusstart();
            //~ $('footer').slideDown(1000,function(){
                //~ $('#menubar').fadeIn(1000,function(){
                    //~ $("logo_action").fadeIn(1000);
                //~ });
            //~ });
        }, 500);

            
            
//aboutus
        function theArrow( arrow, LorR ){
            arrow.css({
                "position": "absolute",
                "bottom": "24%",
                "font-size": "100px",
                "font-family": "inherit",
                "cursor": "pointer"
            }).hover(function(){
                $(this).css("opacity",'1')
            },function(){
                $(this).css("opacity",'0.5');
            });

            if ( LorR === 'right' ){
                arrow.css('right','20px');
            }else if( LorR === 'left' ){
                arrow.css('left','20px');
            }
        }
        theArrow( $('.l2'), 'left' );
        theArrow( $('.r2'), 'right' );
        $('.logo').css("cursor", "pointer").on('click',function(){
            window.location.href = 'index.html';
        })

      /* wait for images to load */
      $(window).load( function() {
            $(document).smoothSlides({
            duration: 18000,
            navigation: false,
            pagination: false,
            order: 'random',
            effect: 'random',
            // 'random', 'zoomIn', 'zoomOut', 'panLeft', 'panRight', 'panUp', 'panDown', 'crossFade','none'
            /* options seperated by commas */
            
            });
        //aboutus
            $(window).load( function() {
                $(document).smoothSlides({
                duration: 18000,
                navigation: false,
                pagination: false,
                order: 'random',
                effect: 'random',
                // 'random', 'zoomIn', 'zoomOut', 'panLeft', 'panRight', 'panUp', 'panDown', 'crossFade','none'
                /* options seperated by commas */
                });
            });

            $('.logo').css("cursor", "pointer").on('click',function(){
                window.location.href = 'index.html';
            });
            $('.close').click(function(){
                $('#page2_div').fadeOut(1000,function(){
                    //~ window.location.href = 'test.html';
                    aboutusstart();
                    
                    
                    });
               //~ $(window).location.href = 'page1.html';
            });

            $("#summary").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".business_philosophy").stop(true).hide();
                $(".map_location").stop(true).hide();
                //
                $(".summary").stop(true).hide();
                
                $('#aboutus_child').fadeIn(500,function(){
                    $("#summary_img").fadeIn(500,function(){
                        $("#summary_text").fadeIn(500);
                    });
                });
                $("#summary_heading").fadeIn(1000);
            
            });
            $("#business_philosophy").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".summary").stop(true).hide();
                $(".map_location").stop(true).hide();
                //
                $(".business_philosophy").stop(true).hide();
                
                $('#aboutus_child').fadeIn(500,function(){
                    $("#business_philosophy_img").fadeIn(500,function(){
                        
                        $("#business_philosophy_text").fadeIn(500);
                    });
                });
                $("#business_philosophy_heading").fadeIn(1000);
            
            });
            $("#map_location").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".summary").stop(true).hide();
                $(".business_philosophy").stop(true).hide();
                //
                $(".map_location").stop(true).hide();
                
                $('#aboutus_child').fadeIn(500,function(){
                    $("#map_location_img").fadeIn(500,function(){
                        
                        $("#map_location_text").fadeIn(500);
                    });
                });
                $("#map_location_heading").fadeIn(1000);
                
            }); 
            
            /*會員專屬*/
            $("#member01").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".member02").stop(true).hide();
                $(".member03").stop(true).hide();
                $(".member04").stop(true).hide();
                //
                $(".member01").stop(true).hide();
                
                $('#member_child').fadeIn(500,function(){
                    $("#member01_img").fadeIn(500,function(){
                        $("#member01_text").fadeIn(500);
                    });
                });
                $("#member01_heading").fadeIn(1000);
            
            });
            $("#member02").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".member01").stop(true).hide();
                $(".member03").stop(true).hide();
                $(".member04").stop(true).hide();
                //
                $(".member02").stop(true).hide();
                
                $('#member_child').fadeIn(500,function(){
                    $("#member02_img").fadeIn(500,function(){
                        
                        $("#member02_text").fadeIn(500);
                    });
                });
                $("#member02_heading").fadeIn(1000);
            
            });
            $("#member03").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".member01").stop(true).hide();
                $(".member02").stop(true).hide();
                $(".member04").stop(true).hide();
                //
                $(".member03").stop(true).hide();
                
                $('#member_child').fadeIn(500,function(){
                    $("#member03_img").fadeIn(500,function(){
                        
                        $("#member03_text").fadeIn(500);
                    });
                });
                $("#member03_heading").fadeIn(1000);
                
            });
             $("#member04").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".member01").stop(true).hide();
                $(".member02").stop(true).hide();
                $(".member03").stop(true).hide();
                //
                $(".member04").stop(true).hide();
                
                $('#member_child').fadeIn(500,function(){
                    $("#member04_img").fadeIn(500,function(){
                        
                        $("#member04_text").fadeIn(500);
                    });
                });
                $("#member04_heading").fadeIn(1000);
                
            });
            
            /*服務項目*/
            $("#service01").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".service02").stop(true).hide();
                $(".service03").stop(true).hide();
                $(".service04").stop(true).hide();
                //
                $(".service01").stop(true).hide();
                
                $('#service_child').fadeIn(500,function(){
                    $("#service01_img").fadeIn(500,function(){
                        $("#service01_text").fadeIn(500);
                    });
                });
                $("#service01_heading").fadeIn(1000);
            
            });
            $("#service02").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".service01").stop(true).hide();
                $(".service03").stop(true).hide();
                $(".service04").stop(true).hide();
                //
                $(".service02").stop(true).hide();
                
                $('#service_child').fadeIn(500,function(){
                    $("#service02_img").fadeIn(500,function(){
                        
                        $("#service02_text").fadeIn(500);
                    });
                });
                $("#service02_heading").fadeIn(1000);
            
            });
            $("#service03").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".service01").stop(true).hide();
                $(".service02").stop(true).hide();
                $(".service04").stop(true).hide();
                //
                $(".service03").stop(true).hide();
                
                $('#service_child').fadeIn(500,function(){
                    $("#service03_img").fadeIn(500,function(){
                        
                        $("#service03_text").fadeIn(500);
                    });
                });
                $("#service03_heading").fadeIn(1000);
                
            });
             $("#service04").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".service01").stop(true).hide();
                $(".service02").stop(true).hide();
                $(".service03").stop(true).hide();
                //
                $(".service04").stop(true).hide();
                
                $('#service_child').fadeIn(500,function(){
                    $("#service04_img").fadeIn(500,function(){
                        
                        $("#service04_text").fadeIn(500);
                    });
                });
                $("#service04_heading").fadeIn(1000);
                
            });
            
            /*喜宴專案*/
            $("#wedding01").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".wedding02").stop(true).hide();
                $(".wedding03").stop(true).hide();
                $(".wedding04").stop(true).hide();
                //
                $(".wedding01").stop(true).hide();
                
                $('#wedding_child').fadeIn(500,function(){
                    $("#wedding01_img").fadeIn(500,function(){
                        $("#wedding01_text").fadeIn(500);
                    });
                });
                $("#wedding01_heading").fadeIn(1000);
            
            });
            $("#wedding02").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".wedding01").stop(true).hide();
                $(".wedding03").stop(true).hide();
                $(".wedding04").stop(true).hide();
                //
                $(".wedding02").stop(true).hide();
                
                $('#wedding_child').fadeIn(500,function(){
                    $("#wedding02_img").fadeIn(500,function(){
                        
                        $("#wedding02_text").fadeIn(500);
                    });
                });
                $("#wedding02_heading").fadeIn(1000);
            
            });
            $("#wedding03").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".wedding01").stop(true).hide();
                $(".wedding02").stop(true).hide();
                $(".wedding04").stop(true).hide();
                //
                $(".wedding03").stop(true).hide();
                
                $('#wedding_child').fadeIn(500,function(){
                    $("#wedding03_img").fadeIn(500,function(){
                        
                        $("#wedding03_text").fadeIn(500);
                    });
                });
                $("#wedding03_heading").fadeIn(1000);
                
            });
             $("#wedding04").click(function(){
                $("#page2_div").show();
                $("#page1_div").hide();
                //
                $(".wedding01").stop(true).hide();
                $(".wedding02").stop(true).hide();
                $(".wedding03").stop(true).hide();
                //
                $(".wedding04").stop(true).hide();
                
                $('#wedding_child').fadeIn(500,function(){
                    $("#wedding04_img").fadeIn(500,function(){
                        
                        $("#wedding04_text").fadeIn(500);
                    });
                });
                $("#wedding04_heading").fadeIn(1000);
                
            });
                
                /*實景導覽*/
        $("#spaces01").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces02").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces01").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces01_img").fadeIn(500,function(){
                            
                            $("#spaces01_text").fadeIn(500);
                        });
                    });
                    $("#spaces01_heading").fadeIn(1000);
                    
                });
        $("#spaces02").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces02").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces02_img").fadeIn(500,function(){
                            
                            $("#spaces02_text").fadeIn(500);
                        });
                    });
                    $("#spaces02_heading").fadeIn(1000);            
                });                                 
        $("#spaces03").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces03").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces03_img").fadeIn(500,function(){
                            
                            $("#spaces03_text").fadeIn(500);
                        });
                    });
                    $("#spaces03_heading").fadeIn(1000);            
                });
        $("#spaces04").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces04").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces04_img").fadeIn(500,function(){
                            
                            $("#spaces04_text").fadeIn(500);
                        });
                    });
                    $("#spaces04_heading").fadeIn(1000);            
                });                                 
        $("#spaces05").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces05").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces05_img").fadeIn(500,function(){
                            
                            $("#spaces05_text").fadeIn(500);
                        });
                    });
                    $("#spaces05_heading").fadeIn(1000);            
                });                                                 
        $("#spaces06").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces06").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces06_img").fadeIn(500,function(){
                            
                            $("#spaces06_text").fadeIn(500);
                        });
                    });
                    $("#spaces06_heading").fadeIn(1000);            
                });
        $("#spaces07").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    $(".spaces08").stop(true).hide();
                    //
                    $(".spaces07").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces07_img").fadeIn(500,function(){
                            
                            $("#spaces07_text").fadeIn(500);
                        });
                    });
                    $("#spaces07_heading").fadeIn(1000);            
                }); 
        $("#spaces08").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".spaces01").stop(true).hide();
                    $(".spaces03").stop(true).hide();
                    $(".spaces02").stop(true).hide();
                    $(".spaces04").stop(true).hide();
                    $(".spaces06").stop(true).hide();
                    $(".spaces07").stop(true).hide();
                    $(".spaces05").stop(true).hide();
                    //
                    $(".spaces08").stop(true).hide();
                    
                    $('#spaces_child').fadeIn(500,function(){
                        $("#spaces08_img").fadeIn(500,function(){
                            
                            $("#spaces08_text").fadeIn(500);
                        });
                    });
                    $("#spaces08_heading").fadeIn(1000);            
                });                                                 
        /*最新消息*/
                $("#news01").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".news02").stop(true).hide();           
                    //
                    $(".news01").stop(true).hide();
                    
                    $('#news_child').fadeIn(500,function(){
                        $("#news01_img").fadeIn(500,function(){
                            $("#news01_text").fadeIn(500);
                        });
                    });
                    $("#news01_heading").fadeIn(1000);
                
                });
                $("#news02").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".news01").stop(true).hide();           
                    //
                    $(".news02").stop(true).hide();
                    
                    $('#news_child').fadeIn(500,function(){
                        $("#news02_img").fadeIn(500,function(){
                            
                            $("#news02_text").fadeIn(500);
                        });
                    });
                    $("#news02_heading").fadeIn(1000);
                
                });
        /*Information*/
                $("#information01").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".information02").stop(true).hide();
                    $(".information03").stop(true).hide();
                    $(".information04").stop(true).hide();
                    //
                    $(".information01").stop(true).hide();
                    
                    $('#information_child').fadeIn(500,function(){
                        $("#information01_img").fadeIn(500,function(){
                            $("#information01_text").fadeIn(500);
                        });
                    });
                    $("#information01_heading").fadeIn(1000);
                
                });
                $("#information02").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".information01").stop(true).hide();
                    $(".information03").stop(true).hide();
                    $(".information04").stop(true).hide();
                    //
                    $(".information02").stop(true).hide();
                    
                    $('#information_child').fadeIn(500,function(){
                        $("#information02_img").fadeIn(500,function(){
                            
                            $("#information02_text").fadeIn(500);
                        });
                    });
                    $("#information02_heading").fadeIn(1000);
                
                });
                $("#information03").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".information01").stop(true).hide();
                    $(".information02").stop(true).hide();
                    $(".information04").stop(true).hide();
                    //
                    $(".information03").stop(true).hide();
                    
                    $('#information_child').fadeIn(500,function(){
                        $("#information03_img").fadeIn(500,function(){
                            
                            $("#information03_text").fadeIn(500);
                        });
                    });
                    $("#information03_heading").fadeIn(1000);
                    
                });
                 $("#information04").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    $(".information01").stop(true).hide();
                    $(".information02").stop(true).hide();
                    $(".information03").stop(true).hide();
                    //
                    $(".information04").stop(true).hide();
                    
                    $('#information_child').fadeIn(500,function(){
                        $("#information04_img").fadeIn(500,function(){
                            
                            $("#information04_text").fadeIn(500);
                        });
                    });
                    $("#information04_heading").fadeIn(1000);
                    
                });
                
                $("#media01").click(function(){
                    $("#page2_div").show();
                    $("#page1_div").hide();
                    //
                    
                    //
                    $(".media01").stop(true).hide();
                    
                    $('#media_child').fadeIn(500,function(){
                        $("#media01_img").fadeIn(500,function(){
                            $("#media01_text").fadeIn(500);
                        });
                    });
                    $("#media01_heading").fadeIn(1000);
                
                });              
                
                //~ $("#summary").click();
                    //~ setTimeout(function(){$('.black').fadeOut(500)}, 500);
        });
    //page2-3&2-2 bus&map

    $(".map_div").fadeIn(1100,function(){
        $(".g0").fadeIn(1100,function(){
            $(".g1").fadeIn(1100);
            });
            $(".map_sidebutton").fadeIn(1100);
        });
        
    $(".map").click(function(){
        $("#busimg").hide();
        $("#mapimg").fadeIn(1500);
        });
    $(".bus").click(function(){
        $("#mapimg").hide();
        $("#busimg").fadeIn(1500);
        });
        
    
    
    
});


var imgList = []
var count = 3
ajaxCall( 'images/fp_bg.jpg' );
ajaxCall( 'images/bg1.jpg' );
ajaxCall( 'images/bg2.jpg' );
ajaxCall( 'images/bg3.jpg' );
//ajax function
function ajaxCall( imgFile ){
  // $(".black").show();
    $.ajax({
    type:'HEAD',
    url: imgFile,
    // cache : false,
    crossDomain: "true",
    success: function(response) {
      imgList.push( imgFile );
      if(imgList.length > count)
        setTimeout(function(){$(".black").hide();},600);
        // $(".black").hide();
      // alert("Success");
    },
    error: function (xhr, status) {
      // $("#LoadingImage").hide();
      console.log('Unknown error ' + status);
      // alert('Unknown error ' + status);
    }
 });
}
 // service.html
        function checkImgShow(idPrefix,imgNumber){
            //參數為[不包含最後數字的id字串],[圖片總數]
            for(i=0;i<=imgNumber;i++){
                num=i;
                idName=idPrefix;
                filterId=idName+num;
                if($(filterId).css('display') == 'inline'){
                    return filterId;
                    }
                }
            }
        function changeImg(ConditionImgId,nextImgSelect,imgClass,action){
            //參數為[最後一張圖片的ID],[確認完成的現在圖片ID],[<img>的class],['要作的動作是next還是prev']
            $nextImgSelect = $($nowimgid);
            $prevImgSelect = $($nowimgid);
            if($nextImgSelect.attr('id') != ConditionImgId && action == 'next'){
                $nextImgSelect = $nextImgSelect.next();
                $(imgClass).hide();
                $nextImgSelect.fadeIn();
                }else if($prevImgSelect.attr('id') != ConditionImgId && action =='prev'){
                    $prevImgSelect = $prevImgSelect.prev();
                    $(imgClass).hide();
                    $prevImgSelect.fadeIn();
                }
            }
        
        $divClass= "div.underlying > ";
        //中式
          //下一張
        $("#chineseBlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#chinese_tw_',19);
            changeImg('chinese_tw_19',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#chineseBlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#chinese_tw_',19);
            changeImg('chinese_tw_1',$nowimgid,".hideImg",'prev')
        });
        //西式
        $("#westernBlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#western_tw_',15);
            changeImg('western_tw_15',$nowimgid,".hideImg",'next')
        });
        
        $("#westernBlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#western_tw_',15);
            changeImg('western_tw_1',$nowimgid,".hideImg",'prev')
        });
        
        $(function(){
            $('.logo').css("cursor", "pointer").on('click',function(){
                window.location.href = 'index.html';
            });
        });
        //中式
        $(".DropCurtain_chinese").click(function(){
          $(".hideImg").hide();
          $("#chinese_tw_1").show();
          $("#chineseBlackBackground").css("display","block");
          $("#chineseBlackBackground .offBkack").css("display","block");
        });
        $("#chineseBlackBackground .offBkack").click(function(){
          $("#chineseBlackBackground").css("display","none");
        });
        //西式
        $('.DropCurtain_western').click(function(){
          $(".hideImg").hide();
          $("#western_tw_1").show();
          $("#westernBlackBackground").css("display","block");
          $("#westernBlackBackground .offBkack").css("display","block");
        });
        $("#westernBlackBackground .offBkack").click(function(){
          $("#westernBlackBackground").css("display","none");
        });

//spaces.html
        //宴會廳
        $(".DropCurtain_spaces01").click(function(){
          $(".hideImg").hide();
          $("#spaces01_1").show();
          $("#spaces01BlackBackground").css("display","block");
          $("#spaces01BlackBackground .offBkack").css("display","block");
        });
        $("#spaces01BlackBackground .offBkack").click(function(){
          $("#spaces01BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces01BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces01_',2);
            changeImg('spaces01_2',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces01BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces01_',2);
            changeImg('spaces01_1',$nowimgid,".hideImg",'prev')
        });
        //中餐廳
        $(".DropCurtain_spaces02").click(function(){
          $(".hideImg").hide();
          $("#spaces02_1").show();
          $("#spaces02BlackBackground").css("display","block");
          $("#spaces02BlackBackground .offBkack").css("display","block");
        });
        $("#spaces02BlackBackground .offBkack").click(function(){
          $("#spaces02BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces02BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces02_',3);
            changeImg('spaces02_3',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces02BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces02_',3);
            changeImg('spaces02_1',$nowimgid,".hideImg",'prev')
        });
        //西餐廳
        $(".DropCurtain_spaces03").click(function(){
          $(".hideImg").hide();
          $("#spaces03_1").show();
          $("#spaces03BlackBackground").css("display","block");
          $("#spaces03BlackBackground .offBkack").css("display","block");
        });
        $("#spaces03BlackBackground .offBkack").click(function(){
          $("#spaces03BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces03BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces03_',2);
            changeImg('spaces03_2',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces03BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces03_',2);
            changeImg('spaces03_1',$nowimgid,".hideImg",'prev')
        });
        //國譽廳 I
        $(".DropCurtain_spaces04").click(function(){
          $(".hideImg").hide();
          $("#spaces04_1").show();
          $("#spaces04BlackBackground").css("display","block");
          $("#spaces04BlackBackground .offBkack").css("display","block");
        });
        $("#spaces04BlackBackground .offBkack").click(function(){
          $("#spaces04BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces04BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces04_',4);
            changeImg('spaces04_4',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces04BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces04_',4);
            changeImg('spaces04_1',$nowimgid,".hideImg",'prev')
        });
        //國譽廳 II
        $(".DropCurtain_spaces05").click(function(){
          $(".hideImg").hide();
          $("#spaces05_1").show();
          $("#spaces05BlackBackground").css("display","block");
          $("#spaces05BlackBackground .offBkack").css("display","block");
        });
        $("#spaces05BlackBackground .offBkack").click(function(){
          $("#spaces05BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces05BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces05_',2);
            changeImg('spaces05_2',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces05BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces05_',2);
            changeImg('spaces05_1',$nowimgid,".hideImg",'prev')
        });

        //國賓廳 I
        $(".DropCurtain_spaces06").click(function(){
          $(".hideImg").hide();
          $("#spaces06_1").show();
          $("#spaces06BlackBackground").css("display","block");
          $("#spaces06BlackBackground .offBkack").css("display","block");
        });
        $("#spaces06BlackBackground .offBkack").click(function(){
          $("#spaces06BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces06BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces06_',2);
            changeImg('spaces06_2',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces06BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces06_',2);
            changeImg('spaces06_1',$nowimgid,".hideImg",'prev')
        });

        //國賓廳 II
        $(".DropCurtain_spaces07").click(function(){
          $(".hideImg").hide();
          $("#spaces07_1").show();
          $("#spaces07BlackBackground").css("display","block");
          $("#spaces07BlackBackground .offBkack").css("display","block");
        });
        $("#spaces07BlackBackground .offBkack").click(function(){
          $("#spaces07BlackBackground").css("display","none");
        });
          //下一張
        $("#spaces07BlackBackground .next_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces07_',3);
            changeImg('spaces07_2',$nowimgid,".hideImg",'next')
        });
         //上一張
        $("#spaces07BlackBackground .prev_btn").click(function(){
            $nowimgid = $divClass+checkImgShow('#spaces07_',3);
            changeImg('spaces07_1',$nowimgid,".hideImg",'prev')
        });

        //雅緻包廂
        $(".DropCurtain_spaces08").click(function(){
          $(".hideImg").hide();
          $("#spaces08_1").show();
          $("#spaces08BlackBackground").css("display","block");
          $("#spaces08BlackBackground .offBkack").css("display","block");
        });
        $("#spaces08BlackBackground .offBkack").click(function(){
          $("#spaces08BlackBackground").css("display","none");
        });
          //下一張
        //~ $("#spaces08BlackBackground .next_btn").click(function(){
            //~ $nowimgid = $divClass+checkImgShow('#spaces08_',1);
            //~ changeImg('spaces08_1',$nowimgid,".hideImg",'next')
        //~ });
         //上一張
        //~ $("#spaces08BlackBackground .prev_btn").click(function(){
            //~ $nowimgid = $divClass+checkImgShow('#spaces08_',1);
            //~ changeImg('spaces08_1',$nowimgid,".hideImg",'prev')
        //~ });
