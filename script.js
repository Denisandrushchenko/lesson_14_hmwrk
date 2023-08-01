'use strict'
$(document).ready(function(){

    $('#tabs div').first().siblings('div').hide(0)
    $('ul').delegate('li','click', function(){
        $('#tabs div').hide(300)
        $(this).siblings().removeClass('active')
        $(this).siblings().addClass('no_active')
        $(this).removeClass('no_active')
        $(this).addClass('active')
        let c = this.children[0].hash
        $(c).show(300)
    })
})