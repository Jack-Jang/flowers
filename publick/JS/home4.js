/*************4开业花篮添加产品********/
$(document).ready(function (){
     var s_uid4=sessionStorage.getItem("");
    $.ajax({
        url:"http://localhost:8080/flwors_home/home4",
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
            
            $("#love4").html('');
             $("#love4").html(html)

        }
      }
    })

})