window.onload = function createTag(){
    const cont = document.getElementById("container");
    for(i = 1; i <=6 ; i++){
        var div = document.createElement(`div`)
        div.className = "cards";
        div.id = `c${i}`;
        var img = document.createElement("img");
        img.id = `i${i}`;
        div.append(img);
        cont.append(div);
        
    }
    this.getData(0)
}