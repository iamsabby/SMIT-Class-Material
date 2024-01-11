function clear12(){
    var tagName = document.getElementsByTagName("h2")
    var className = document.getElementsByClassName("abc")

    tagName[0].className = "abc"
    console.log(tagName)

    for(let i = 0; i < tagName.length; i++){
        tagName[i].className = "changeIntoOrange"
    }
}

// var parent = document.getElementById("parent").nextElementSibling;
// // let p = parent.getElementsByTagName("h3")[0].innerHTML = "DEF";
// console.log(parent)

