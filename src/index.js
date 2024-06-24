const button = document.getElementById("button");

  


button.addEventListener('click', function () {
    const select = document.getElementById("select");
    const hidden = select.getAttribute("hidden");

    console.log(hidden)
 
    
    if (hidden) {
        select.removeAttribute("hidden");
        button.innerText = "Hide Select";
    } else {
        select.setAttribute("hidden", "hidden");
        button.innerText = "Show Select"; 
    }
})