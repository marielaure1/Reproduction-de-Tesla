$(".nav-item").each((e, item)=>{
    $(item).mouseenter(()=>{
        position = $(item).position()
        width = $(item).width() + 16
        $(".animate-backdrop").css({top: position.top, left: position.left, visibility: "visible", opacity: 1, width: width + 4})
    })
})

$("nav").mouseleave(()=>{
    $(".animate-backdrop").css({visibility: "hidden", opacity: 0})
})


$(".menu-open").click(()=>{
    $(".menu-backdrop").addClass("active")
})

$(".menu-close").click(()=>{
    $(".menu-backdrop").removeClass("active")
})


// $("main").scroll(()=>{
//     $(".models").each((e, element)=>{
//         $(".content").eq(e).removeClass("active")
//         let offset = $(element).offset()
//         if(offset.top == $("main").scrollTop()){
//             $(".content").eq(e).addClass("active")
//         }
//     })
// })