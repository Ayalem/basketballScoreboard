h1=document.getElementsByClassName("home-score")[0]
g=document.getElementsByClassName("guest-score")[0]
let hcount=0
let gcount=0
function increment1(){
hcount++
h1.textContent=hcount

}
function increment2(){
hcount+=2
h1.textContent=hcount
}
function increment3(){
    hcount+=3
    h1.textContent=hcount
    }
    function increment1g(){
        gcount++
        g.textContent=gcount
        
        }
        function increment2g(){
        gcount+=2
        g.textContent=gcount
        }
        function increment3g(){
            gcount+=3
            g.textContent=gcount
            }
function reset(){
    hcount=0
    gcount=0
    h1.textContent=0
    g.textContent=0
}        