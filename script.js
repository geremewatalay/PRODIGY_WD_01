const qoute = document.getElementById("qoute");
const check = document.getElementById("check");
const sidebar = document.getElementById("sidebar");

check.addEventListener('click',()=>{
    if(check.checked){
        sidebar.style.display = 'flex';
        sidebar.style.flexDirection = 'column';
        sidebar.style.justifyContent = 'first baseline';
    }else{
        sidebar.style.display = 'none';
        sidebar.style.transitionDelay = '0.5s';
    }
});

function changeImage1(){
    document.body.style.background = "url('https://www.ancient-origins.net/sites/default/files/field/image/Lalibela.jpg') center center / cover no-repeat";
    qoute.innerHTML = "A generation which ignores history has no past and no future.<br><br>Robert Heinlein";
}
function changeImage2(){
    document.body.style.background = "url('https://media.istockphoto.com/id/174680666/id/foto/istana-fasiladas-di-gondar-ethiopia.jpg?s=612x612&w=0&k=20&c=HjULwQzHGUrbi55JSSy8h_fwHY930Lv-mSaycK2JhpQ=') center center / cover no-repeat";
    qoute.innerHTML = "A patriot must always be ready to defend his country against his government.<br><br>Edward Abbey";
}
function changeImage3(){
    document.body.style.background = "url('https://trainsplanesandtuktuks.com/wp-content/uploads/2017/09/Ethiopia-2016-759.jpg') center center / contain";
    qoute.innerHTML = "A people without knowledge of their past history, origin and culture is like a tree without roots.<br><br> Marcus Garvey";
}