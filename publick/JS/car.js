$(function(){
    $("#cart").click(function(){
            $.ajax({
        url:"http://localhost:8080/shopping_car/car",
        data:{s_uid1},
        type:"get",
        dataType:"json",
        success:function(result){
           var html="";
           for(var i=0;i<result.length;i++){
            html+=`
                <tr class="shopping">
                    <td width=5% >
                        <input type="checkbox"class="checkbox1 checkboxstyle" >
                    </td>
                    <td width=10%>
                        <img src="${result[i].s_img}" alt="" class="td_img" data-id="${result[i].sid}">
                    </td>
                    <td width=30%>
                        <span>${result[i].s_title}</span>
                    </td>
                    <td width=10% class="dan">
                        <span>￥</span><span class="price">${result[i].s_price.toFixed(2)}</span>
                    </td>
                    <td width=10% class="button">
                            <input type="text" value="-"  class="minus input">
                            <span class="count input" >${result[i].s_count}</span>
                            <input type="text" value="+"  class="plus input">
                    </td>
                    <td width=10%>
                        <span class="color">￥</span><span class="color" class="totle">${(result[i].s_price*result[i].s_count).toFixed(2)}</span>
                    </td>
                    <td td width=20%>
                        <span class="hover move" >移除</span>
                    </td>
                </tr>
            `
        }
         $("#tbody").html('');
         $("#tbody").html(html)
        }
    })
    $("#shopping_car").css("display","block");
        $("#opacity").css("display","block");
    })
//     /*********************购物车功能*******************/
//    /************    点击   继续购物  购物车页面关闭******************* */
   $("#go_on").click(function(){
        $("#shopping_car").css("display","none");
        $("#opacity").css("display","none");
   })
//    /********************  点击  X 购物车页面关闭***************** */
   $("#close3").click(function(){
       $("#shopping_car").css("display","none");
        $("#opacity").css("display","none");
   })
    /****************************  购物车动态添加产品   ************************************/
    var s_uid1=sessionStorage.getItem("uid");
         /************************ 删除功能 ***************************/
         $(".move").click(function(){
             var sid=$(this).parent().parent().find("img").attr("data-id");
             $.ajax({
                    url:"http://localhost:8080/shopping_car/delect",
                    data:{sid},
                    type:"get",
                    dataType:"json",
                    success:function(result){
                        if(result=="1")
                        location.href="http://127.0.0.1:5500/publick/login_car.html"
                    }
             })
         })
        //  /**********1.加  减功能 */
        var n=1;//数量初始化
        var sum=0;//单件产品的总金额
        $(".plus").click(function(){
            $(this).prev().html(parseInt($(this).prev().html()) + 1)
                var $a=$(this);
            var num= $(this).prev().html();
            var price=$a.parent().prev().children(".price").html();//产品单价
            sum=(n*price).toFixed(2);
            var totle=$a.parent().next().children().last().html(sum);
            result1()
        })
        $(".minus").click(function(){
            var $a=$(this);
            if(n>1){
                n--;
                $a.next().html(n);
                var price=$a.parent().prev().children(".price").html();//产品单价
               sum=(n*price).toFixed(2);
                console.log(price)
                var totle=$a.parent().next().children().last().html(sum);
            
            }
            $(this).next().html(parseInt($(this).next().html()) - 1);
                if (parseInt($(this).next().html()) <= 1) {
                    $(this).next().html(1);
                }
                var num=$(this).next().html();
                var price=$a.parent().prev().children(".price").html();//产品单价
                sum=(n*price).toFixed(2);
                var totle=$a.parent().next().children().last().html(sum);
                result1()
        })
        // /****** 2. 选中产品并计算 总价相加添加到总计********/   
        // // //2.3获取事件触发元素
        function result1() {
            var allprice = 0;//产品总价
            var allnum = 0;//产品总件数
            $(".shopping").each(function() {
                if ($(this).find(".checkboxstyle")[0].checked == true) {
                    allprice += parseFloat($(this).find(".price").html()) * parseInt($(this).find(".count").html());
                    allnum += parseInt($(this).find(".count").html());
                } else {
                    allprice += 0;
                    allnum += 0;
                }
            });
            $("#settlement").html(allprice.toFixed(2));
            $("#allnum").html(allnum);
        }
    
        // /*******************     点击全选 ，多选框  状态  操作****************************** */
        $(".SelectAll").click(function(){console.log(2222)
            var checkAll=$(this).prop("checked");
            $(".checkboxstyle").each(function(){
                if(checkAll){
                    $(this).prop("checked",true);
                    $(".SelectAll").prop("checked",true);
                }else{
                    $(this).prop("checked",false);
                    $(".SelectAll").prop("checked",false);
                }
            })
            result1()
        })
        // /******************  点击多选框 ，全选框状态**********************/
        $(".checkboxstyle").click(function(){
                $(".SelectAll").prop("checked",$(".checkboxstyle").length==$(".checkboxstyle:checked").length);
                result1()
            })
})