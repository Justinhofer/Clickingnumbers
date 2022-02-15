var colorlist= [
    { color:"red"},
    {color:"green"},
    {color:"blue"}];

var boxes =[];

function box(info){
    var that= this;
    this.color=info.color;
    this.clicker=0;
    this.ele = document.createElement("div");
    this.numEle = document.createElement("div");
    this.numEle.innerHTML = this.clicker;
    this.ele.addEventListener("click",function(){
        that.numClick();
    })

    this.ele.style.backgroundColor=this.color;
    this.ele.style.height="100px";
    this.ele.style.width="200px";
    this.ele.style.borderRadius="10px";
    this.numEle.style.padding="40px";
    this.numEle.style.fontSize="18px";
    this.numEle.style.textAlign="center";
    this.ele.appendChild(this.numEle);
    document.body.appendChild(this.ele);
}

box.prototype.numClick = function (){
    this.numEle.innerHTML = this.clicker;
    this.clicker = this.clicker+1;
};

for(var i=0; i<colorlist.length; i++){
    boxes.push(new box(colorlist[i]));
}