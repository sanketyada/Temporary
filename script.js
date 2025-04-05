let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
let requestUrl='https://api.github.com/users/sanketyada';
const xhr = new XMLHttpRequest();

xhr.open("GET",requestUrl)

xhr.onreadystatechange=function (){
    console.log(xhr.readyState)
    if(xhr.readyState ===4){
        let data=JSON.parse(this.responseText);
        console.log(data)
        console.log(data.avatar_url)
        console.log(data.followers)
        let img=document.querySelector('img')
        img.src=data.avatar_url
        let h3=document.querySelector('h3');
        h3.innerText=data.name
        let p=document.querySelector('p');
        p.innerHTML=`Followers: ${data.followers}`
    }
}

xhr.send();

});