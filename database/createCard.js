function createImage(i){
    var img = document.createElement("img");
    img.id = `i${i}`;
    return img;
}
function createName(i){
    var name = document.createElement("div");
    name.id = `name${i}`;

    name.append(addP("name",i))

    return name;
}
function createPrice(i){
    var price = document.createElement("div");
    price.id = `price${i}`;

    price.append(addP("price", i))
    return price;
}
function createProp(i){
    var prop = document.createElement("div");
    prop.id = `prop${i}`;

    prop.append(addP("prop", i))

    return prop;
}

function addP(name, i){
    var p = document.createElement("p");
    p.id = `${name}Info${i}`  
    return p
}


window.onload = function createTag(){
    const cont = document.getElementById("container");
    for(i = 1; i <=6 ; i++){
        var div = document.createElement(`div`)
        div.className = "cards";
        div.id = `c${i}`;

        
        div.append(this.createImage(i))
        div.append(this.createName(i))
        div.append(this.createPrice(i))
        div.append(this.createProp(i))
        
        cont.append(div);
        
    }
    this.getData(0)
}