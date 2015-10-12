/**
 * Created by kolou on 2015-10-09.
 */
function number_slide(id,num,step,slide,speed,delay){//var
    this.id=id;
    this.num=num;
    this.speed=speed;
    this.delay=delay;
    this.step=step;
    this.slide=slide;
    this.init();
}
number_slide.prototype.init=function(){//init
    var obj=document.getElementById(this.id);
    var num=this.num.split('');
    var html='';
    obj.innerHTML='<ul class="number_slide"></ul>';
    for(var i=0;i<num.length;i++){
        html+='<li data-id="'+i+'" class="number_slide"></li>';
    }
    obj.children[0].innerHTML=html;
    this.animate();

};
number_slide.prototype.animate=function(){//animate
    var obj=document.getElementById(this.id).getElementsByTagName('li');
    var num=this.num.split('');
    var setp=this.step;
    var slide=this.slide;
    var speed=this.speed;
    var delay=this.delay;
    setTimeout(function(){
        for(var i=0;i<num.length;i++){
            var v=-num[i]*setp;
            obj[i].style.transition='top '+Math.abs(v/1000+speed)+'s '+slide+' '+delay*i+'s';
            obj[i].style.top=v+'px';
        }
    },1);
};
