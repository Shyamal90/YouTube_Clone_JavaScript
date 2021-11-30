  
let API_KEY = "AIzaSyDDuW7u2lKauZ76_kABuHGIqpXODPuQt54";


async function getYouTubeData(){
    let query = document.getElementById("searchEl").value;
    let url     = `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&type=video&maxResults=10&part=snippet`;
    try{
        let response = await fetch(url);
        console.log(response);
        let data     = await response.json();
        console.log(data);

        let items = data.items;

        displayVideo(items)
    }catch(err){
        console.log(err);
    }
    
}

function displayVideo(items){
    console.log(items);

    items.map(({id:{videoId}})=>{
        // console.log(video.id.videoId);
        console.log(videoId);

        let div = document.createElement("div");

        let iframe = document.createElement("iframe");
        iframe.allowfullscreen = "True";
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.setAttribute("allowfullscreen",true);

        div.append(iframe);
        document.querySelector(".searchResult").append(div);
    })

    
}