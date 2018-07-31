$(function(){
    /*推荐*/
    $('.recommend-list:gt(2)').hide();
    $('.more').click(function(){
        $('.recommend-list').show();
        $('.more').hide();
    });


    $('.first-icon li').eq(3).hover(function(){
        $('.erweima_box').toggle()
    });
    $('.first-icon li').eq(2).click(function(){
        $('.share_box').toggle()
    });
    $('.share img').hide().eq(0).show().click(function(){
        $('.share .share_click').toggle();
    });


    var sbox=$('.second-down-smallpic-box');
    var sin=$('.second-down-smallpic-in');
    var slength=$('.second-small-pic').length;
    $('.second-page-right').text(slength);
    var widthsbox=parseInt(sbox.width());
    var widthin=sin.width(slength*180);
    var widthsin=parseInt(sin.width());
    var wkong=widthsbox-widthsin;
    if(widthsin>=widthsbox){
        $('.second-small-right').click(function(){
            sin.finish();
            if(sin.position().left>=wkong){
                sin.animate({'left':'-=180px'});
            }
        });
        $('.second-small-left').click(function(){
            sin.finish();
            if(sin.position().left<=-1){
                sin.animate({'left':'+=180px'})
            }
        });
    }

    var bodyh=$('body').height();
    var bodyw=$('body').width();
    if(bodyw/bodyh>=(1920/940)){
        $('.first-big-pic').removeClass('first-big-pic-height');
    }else{
        $('.first-big-pic').addClass('first-big-pic-height');
    }
    $(window).resize(function(){
        bodyh=$('body').height();
        bodyw=$('body').width();
        if(bodyw/bodyh>=(1920/940)){
            $('.first-big-pic').removeClass('first-big-pic-height');
        }else{
            $('.first-big-pic').addClass('first-big-pic-height');
        };


        widthsbox=parseInt(sbox.width());
        widthin=sin.width(slength*180);
        widthsin=parseInt(sin.width());
        wkong=widthsbox-widthsin;
        if(widthsin>=widthsbox){
            $('.second-small-right').click(function(){
                sin.finish();
                if(sin.position().left>=wkong){
                    sin.animate({'left':'-=180px'});
                }
            });
            $('.second-small-left').click(function(){
                sin.finish();
                if(sin.position().left<=-1){
                    sin.animate({'left':'+=180px'})
                }
            });
        }

    });
    $('.first-icon li:first').css('margin-right','20px');
    $('.arrow-left:not(".second-arrow-l")').click(function(){
        $('.view-box-in').animate({'left':'+=100%'})
    });
    $('.arrow-right:not(".second-arrow-r")').click(function(){
        $('.view-box-in').animate({'left':'-=100%'});
    });
    $('.second-arrow-l').click(function(){
        if(rightclick>0){
            $('.second-small-pic-over-a').removeClass('second-small-pic-hover').eq(rightclick-1).addClass('second-small-pic-hover')
            $('.second-banner').hide().eq(rightclick-1).show();
            $('.second-article-con p').hide().eq(rightclick-1).show();
            $('.second-page-left').text(rightclick-1+1);
            rightclick--;
        }else{
            $('.view-box-in').animate({'left':'+=100%'})
        }
    });
    $('.second-arrow-r').click(function(){
        if(rightclick<slength-1){
            $('.second-small-pic-over-a').removeClass('second-small-pic-hover').eq(rightclick+1).addClass('second-small-pic-hover')
            $('.second-banner').hide().eq(rightclick+1).show();
            $('.second-article-con p').hide().eq(rightclick+1).show();
            $('.second-page-left').text(rightclick+1+1);
            rightclick++;
        }else{
            $('.view-box-in').animate({'left':'-=100%'});
        }
    });



    var rightclick=0;
    $('.second-banner').hide().eq(0).show();
    $('.second-article-con p').hide().eq(0).show();
    $('.second-small-pic-over-a').eq(0).addClass('second-small-pic-hover').end().each(function(i){
        var num=i;
        $(this).click(function(){
            //alert(num)
            $('.second-small-pic-over-a').removeClass('second-small-pic-hover').eq(num).addClass('second-small-pic-hover')
            $('.second-banner').hide().eq(num).show();
            $('.second-article-con p').hide().eq(num).show();
            $('.second-page-left').text(num+1);
            rightclick=num;
        })
    });
    var sdh=$('.second-down-h')
    sdh.eq(0).hide()
    sdh.eq(1).addClass('second-down-h-right');
    var flag=1;
    /*???????*/
    sdh.eq(2).click(function(){
        if(flag==1){
            $('.second-down-pic').hide('slow');
            sd.css('height','auto');
            flag=2;
        }else{
            sd.css('height','auto');
            $('.second-down-pic').show('slow');
            flag=1;
        };
    })
    var sd=$('.second-down');
    sdh.eq(1).click(function(){
        sdheight=sd.height();
        sd.animate({'height':0},1000);
        sdh.eq(0).addClass('second-down-open').show().animate({'height':100},1000);
    })
    sdh.eq(0).click(function(){
        $(this).animate({'height':0},1000);
        sd.animate({'height':sdheight},1000);
    })
});