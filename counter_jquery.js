$(document).ready(function () {
        var num = 0;
        $("#plus").click(function () {
            num = +$(".input").val();
            if (num < 10) {
                num = num + 1;
                changecolor(num);
                enableMinus();
                $(".input").val(num);
            }

            else {
                disablePlus();
            }
        });
        $("#minus").click(function () {
            if (num > 0) {
                num = +$(".input").val();
                num = num - 1;
                changecolor(num);
                enablePlus();
                $(".input").val(num);
            }

            else {
                disableMinus();
                enablePlus();
            }
        });
        $("#reset").click(function () {
            $(".counter ").css({ "background-color": "lightskyblue" });
            $(".input").css({ "background-color": "lightskyblue", "color": "white" });
            enablePlus();
            disableMinus();
            $(".input").val(0);
        });
    });
function changecolor(val)
{
    if(val % 2 ==0 )
    {
       $(".counter ").css({"background-color" : "lightskyblue"});
       $(".input").css({"background-color" : "lightskyblue","color":"white"});
    }
    else
    {
        $(".counter , .input").css({"background-color":"grey"});
        $(".input").css({"background-color" : "grey","color":"red"});
    }    
}
function disablePlus()
{
    $("#plus").prop('disabled',true);
}
function disableMinus()
{
    $("#minus").prop('disabled',true);
}
function enablePlus()
{
    $("#plus").prop('disabled',false);
}
function enableMinus()
{
    $("#minus").prop('disabled',false);
}