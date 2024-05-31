const array = [
    { name: "a", image: "IMG_7564.jpg" },
    { name: "b", image: "man-ai-8068201_1280.webp" },
    { name: "c", image: "IMG_7566.jpg" },
    { name: "d", image: "IMG_7568.jpg" },
    { name: "a", image: "man-ai-8068201_1280.webp" },
    { name: "b", image: "IMG_7564.jpg" },
    { name: "c", image: "IMG_7565.jpg" },
    { name: "d", image: "man-ai-8068201_1280.webp" },
    { name: "a", image: "IMG_7568.jpg" },
    { name: "b", image: "IMG_7567.jpg" },
    { name: "c", image: "man-ai-8068201_1280.webp" },
    { name: "d", image: "IMG_7565.jpg" },
    { name: "a", image: "IMG_7566.jpg" },
    { name: "b", image: "IMG_7564.jpg" },
    { name: "c", image: "IMG_7567.jpg" },
    { name: "d", image: "man-ai-8068201_1280.webp" },

]

function showarray() {
    let a = "";
    array.forEach(function (obj) {
        a += `<div class="box"> <img src="${obj.image}" alt="image"> </div>`;
    })

    let content = document.querySelector(".content")
    content.innerHTML = a;
}

function nothing() {
    let input = document.querySelector("#input");

    input.addEventListener('focus', function () {
        document.querySelector("#overlays").style.backgroundColor = `rgba(10, 10, 10, 0.76)`;
    })

    input.addEventListener('blur', function () {
        document.querySelector("#overlays").style.backgroundColor = ``;
    })

    input.addEventListener('input', function () {

        const newarr = array.filter(obj => obj.name.startsWith(input.value))

        let a = "";
        newarr.forEach(function (obj) {
            a += `<div class="box"> <img src="${obj.image}" alt="image"> </div>`;
        })

        let content = document.querySelector(".content")
        content.innerHTML = a;

        document.querySelector("#overlays").style.backgroundColor = ``;
    })


}
nothing();
showarray();