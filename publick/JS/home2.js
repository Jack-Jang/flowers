/*************2长辈鲜花添加产品********/
$(document).ready(function (){
     var s_uid2=sessionStorage.getItem("");
    $.ajax({
        url:"http://localhost:8080/flwors_home/home2",
        data:{},
        type:"get",
        dataType:"json",
        success:function(result){
            var html="";
           for(var item of result){
            html+=`
                 <li>
                        <a href="">
                            <img src="${item.img}"  alt="">
                        </a>
                        <div class="text">
                            <div>
                                  <p>
                                      <a href="">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                         <div class="opacity1"></div>
                   </li>
            `
            
            $("#love2").html('');
             $("#love2").html(html)

        }
      }
    })

})

