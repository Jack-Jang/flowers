/*************1爱情鲜花添加产品********/
$(document).ready(function (){
     var s_uid1=sessionStorage.getItem("");
    $.ajax({
        url:"http://localhost:8080/flwors_home/home",
        data:{},
        type:"get",
        dataType:"json",
        success:function(result){
            var html="";
           for(var item of result){
            html+=`
                 <li>
                        <a href="http://127.0.0.1:5500/publick/flowers_list.html?fid=${item.fid}">
                            <img src="${item.img}"  alt="">
                        </a>
                        <div class="text">
                            <div>
                                  <p>
                                      <a href="http://127.0.0.1:5500/publick/flowers_list.html?fid=1">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                   </li>
            `
            
            $("#love").html('');
             $("#love").html(html)

        }
      }
    })
    

})
