let htmlSkil = document.querySelector('.htmlSkil');
let cssSkil = document.querySelector('.cssSkil');
let jsSkil = document.querySelector('.jsSkil');
let  reactSkil = document.querySelector('.reactSkil');
let time = 30;
let skilAll = document.querySelector('.skil');

htmlSkil.addEventListener('click', function () {
        let start = 0;
        let a;
        let progressElement = document.querySelector('.users1');
        a = setInterval(function(){
            progressElement.value = start;
            if(start >= 90){
                clearInterval(a);
            } else {
                start++;
            }
        }, time);

})





cssSkil.addEventListener('click', function () {
    let start = 0;
    let a;
    let progressElement1 = document.querySelector('.users2');
    a = setInterval(function(){
        progressElement1.value = start;
        if(start >= 50){
            clearInterval(a);
        } else {
            start++;
        }
    }, time);
})


jsSkil.addEventListener('click', function () {
    let start = 0;
    let a;
   let progressB = document.querySelector('.users3');
   a = setInterval(function(){
       progressB.value = start;
       if (progressB.value >= 40){
           clearInterval(a);
       } else {
           start++;
       }
   }, time)
})

reactSkil.addEventListener('click', function () {
    let start = 0;
    let a;
    let progressR = document.querySelector('.users4');
    a = setInterval(function () {
        progressR.value = start;
        if (progressR.value >=10){
            clearInterval(a);
        } else{
            start++;
        }
    }, time)
});

































//
// let jsSkil = document.querySelector('.jsSkil'),
//     reactSkil = document.querySelector('.reactSkil');
//
//
//
//

// let footskil = document.querySelector('.footskil');
//
// footskil.addEventListener('click', function (e) {
//     // console.log(e.target.classList[0])
//     switch (e.target.classList[0]) {
//         case 'users1':
//
//             let start = 0;
//             let progressElement = document.querySelector('.users1');
//                 progressElement.value = start+50;
//
//             // console.log(progressElement.value)
//             break;
//         default:
//             console.log('error')
//     }
//
//     // console.log(e.target.classList[0]);
// })
















