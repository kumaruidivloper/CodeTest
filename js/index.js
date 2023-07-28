
let rootdiv = document.getElementById('root-div');
let defaultPage = "landing";
// let baseURL = 'http://localhost:3000/collections/'
// let baseURL_2 = 'http://localhost:3001/articals/'
let baseURL = 'https://www.jsonkeeper.com/b/A3HJ/'
let baseURL_2 = 'https://www.jsonkeeper.com/b/LCQA/'

//change the color intro
function changeFirstWordcColor(color, value, number) {
    let colorText = '';
    let temp = value.split(' ', number);
   temp.forEach((item) => {
    colorText = colorText+' '+item;
   });
   let rest = value.replace(colorText.trim(), ' ');
   return `<span class=${color}>${colorText}</span>${rest}`
}

//fetch collections
// fetch(baseURL)
// .then(res =>  res.json())
// .then(json =>
// json.map(data => {
//     if(data.collection ===   defaultPage) {
//         console.log(data.collectionid)
//         fetchArticles(data.collectionid)
//     }
// })
// ).catch(() => {
//     console.log(error);
// })

fetch(baseURL).then(res => res.json()).then(json => json.collections.map(data => {
    if(data.collection ===   defaultPage) {
        console.log(data);
        fetchArticles(data)
    }
})
)

//fetch articles
// function fetchArticles(value) {
//     fetch(baseURL_2 + value).then(res1 => 
//         res1.json().then(data => {
//             console.log(data);
//             rootdiv.append(div_func(data.data));
//     })).catch(() => {
//             console.log(error)
//     })
// }

function fetchArticles(value) {
    fetch(baseURL_2).then(res1 => res1.json()).then(data => rootdiv.append(div_func(data.articals[0].data)))
}


//fetch bg-banner Img
function fetchBgImg(image_path) {
    return `<img src="${image_path}">`
}

//create element
function div_func(data) {
    let div = document.createElement('div');
    div.className = "wrapper";
    div.innerHTML = `
        <section class="left">
    <header class="header">
        Header
    </header>
    <article class="artical-wrapper">
        <div class="artical-left">
            <div class="banner-img">
               <span>${fetchBgImg(data[0].imageurl)}</span>
            </div>
            <h1 class="name">
                <span class="bullatin-icon"></span>
                ${data[0].title}
            </h1>
            <p class="description" id="firstword">
               ${changeFirstWordcColor('redText', data[0].intro, 2)}
            </p>
            <div class="user-action">
                <div class="clock-icon"></div>
                <div class="time">${data[0].Published}m</div>
                <div class="message"></div>
            </div>
        </div>
        <div class="artical-right">
            <div class="banner-img type-2-img">
            <span>${fetchBgImg(data[1].imageurl)}<span>
            </div>
            <h1 class="name-2">
                <span class="bullatin-icon"></span>
                Opal Tower unit still closed as work only approved now
            </h1>
            <p id="trim-firstword" class="description exclu">${changeFirstWordcColor('blueText', data[1].intro, 1)}</p>
            <div class="user-action">
                <div class="clock-icon"></div>
                <div class="time">${data[1].Published}m</div>
                <div class="message"></div> <span class="message-time">1</span>
            </div>
            <div class="small-feeds">
                <div>
                    <h1 class="name-3">
                    <span class="bullatin-icon"></span>
                    ${data[2].title}
                </h1>
                </div>
                <div class="small-feed-img">
                <span>${fetchBgImg(data[3].imageurl)}<span>
                </div>
            </div>
            <div class="user-action">
                <div class="clock-icon"></div>
                <div class="time">${data[2].Published}h</div>
                <div class="message"></div>
            </div>
            <div class="small-feeds">
                <div>
                    <h1 class="name-3">
                    <span class="bullatin-icon"></span>
                    ${data[3].title}
                </h1>
                </div>
                <div class="small-feed-img">
                <span>${fetchBgImg(data[3].imageurl)}<span>
                </div>
              </div>
              <div class="user-action">
                <div class="clock-icon"></div>
                <div class="time">${data[3].Published}h</div>
              </div>
        </div>
    </article>
</section>
<section class="right">
    <article class="side-bar-item about"></article>
    <article class="side-bar-item"></article> 
</section>`    
    return div;
}