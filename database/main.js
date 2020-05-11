
const state = {
    photos : [],
    props : [],
    names : [],
    prices : [],
    page : 0
}

function setState(state, list, page){
    clearState(state)
    limit = 6;
    if(page){
        var limit = (page+1) * 6;
    }
    index_aux = 0;
    for(i = limit-6; i < limit; i++){
        state.photos.push(list[index_aux].photo);
        state.props.push(list[index_aux].property_type);
        state.names.push(list[index_aux].name);
        state.prices.push(list[index_aux++].price);
        state.page = page;
    }
    console.log(state)
}

function clearState(state){
    for(i = 0; i < 6; i++){
        state.photos = []
        state.props = []
        state.names = []
        state.prices = []
        state.page = 0;
    }
}

async function getData(index){
    const data = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
    data.json().then(
        (data) =>{
            var places = [...data]
            
            setState(state, places, index);
            //showPhotos(index, places);
            addGallery(state);
        }
    )
}


function createTag(){
    

    var div = document.createElement("div")
    div.id = "cards";
    var cards = div;

    return cards;
}

function addGallery(state){
    const cont = document.getElementById("container");

    for(i = 0; i < 6; i++){
        var card = createTag()
        cont.append(card);
        addPhoto(state, i, card); 
    }
    
  //  addProps();
  //  addName();
  //  addPrice();
}


function addPhoto(state, i, card){
    

    var img = document.createElement("img")
    img.src = state.photos[i];
    
    card.append(img);
}


