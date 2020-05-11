var index = 0;
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

function showPhotos(index, list){
    limit = 6;
    if(index){
        var limit = (index+1) * 6;
    }
    
    for(i = limit-6; i < limit; i++){
        console.log(list[i].photo)
        console.log(i)
    }
}

async function getData(index){
    const data = await fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
    data.json().then(
        (data) =>{
            var places = [...data]
            
            setState(state, places, index);
            //showPhotos(index, places);
            
        }
    )
}

export default state;