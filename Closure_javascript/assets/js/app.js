let i = 10 ;
function show (){
    let j  = 20;
    document.write(j + "<br>")
    document.write(i + "<br>")
}
show();

function outerfunction(){
    const G = "G is  a local variable of outer function ";
    document.write(G + "<br>");
    function innerfunction(){
        const k = "k is a inner variable of inner function";
        document.write(k + "<br>");
    }
    innerfunction();
}
outerfunction();