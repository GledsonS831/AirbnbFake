
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
        
        state.photos.push(list[i].photo);
        state.props.push(list[i].property_type);
        state.names.push(list[i].name);
        state.prices.push(list[i].price);
        state.page = page;
    }
    
    
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

function clearWindow(){

}

async function getData(index){
    const data = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
    data.json().then(
        (data) =>{
            var places = [...data]
            
            setState(state, places, index);
            //showPhotos(index, places);
            addGallery(state, index);
        }
    )
}


function addGallery(state, page){
    

    for(i = 0; i < 6; i++){
        
        addPhoto(state, i); 
        
    }
    
  //  addProps();
  //  addName();
  //  addPrice();
}


function addPhoto(state, i, card){
    document.getElementById(`i${i+1}`).src = state.photos[i];
    
}


