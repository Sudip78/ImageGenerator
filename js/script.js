
/*------------------------------ Random Image Generator-----------------------------*/

const url = 'https://source.unsplash.com/random'
const img = document.getElementById("image");
const getImage = async (url) => {
    return await fetch(url).then(res => res.url)
}
const img_url = getImage;
getImage(url).then(result => {
   img.setAttribute('src', result)
});