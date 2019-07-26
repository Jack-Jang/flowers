/*************5植物盆栽添加产品********/
$(document).ready(function (){
     var s_uid5=sessionStorage.getItem("");
    $.ajax({
        url:"http://localhost:8080/flwors_home/home5",
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
                        <div>
                            <div>
                                  <p>
                                      <a href="">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                   </li>
            `
            
            $("#love5").html('');
             $("#love5").html(html)

        }
      }
    })

})