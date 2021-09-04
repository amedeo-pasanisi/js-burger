// Il programma dovrà consentire 
// di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

const check = document.getElementsByClassName("fake-checkbox");

for (let i=0; i<check.length; i++) {
    check[i].addEventListener("click",
    function () {
        check[i].previousElementSibling.checked = !check[i].previousElementSibling.checked
    })
}