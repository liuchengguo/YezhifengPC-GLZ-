$(function () {
    //装修计算效果
    var $controlBar = $('#control-bar');
    var $fixedBarWrap = $('#fixed-bar-wrap');
    $controlBar.click(function () {
        var bottomVal = $fixedBarWrap.css('bottom');
        console.log(bottomVal === '-372px')
        if (bottomVal === '-372px') {
            $fixedBarWrap.stop(true, true).animate({'bottom': 0});
        } else {
            $fixedBarWrap.stop(true, true).animate({'bottom': '-372px'});
        }
    })

    //下拉效果
    var $hasArrow = $('.head-nav .has-arrow');
    var $dropNav = $('.drop-wrap .drop-nav');

    $hasArrow.hover(function () {
        $(this).addClass('hover').siblings('.has-arrow').removeClass('hover');
        $dropNav.eq($(this).index()-1).show().siblings('.drop-nav').hide();
    }, function () {
        $(this).removeClass('hover');
        $dropNav.eq($(this).index()-1).hide();
    })
    $dropNav.hover(function () {
        $(this).show();
        $hasArrow.eq($(this).index()).addClass('hover');
    }, function () {
        $(this).hide();
        $hasArrow.eq($(this).index()).removeClass('hover');
    })

});