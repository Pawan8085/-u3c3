
function func(){
    var name=document.querySelector('#name').value;
    var email=document.querySelector('#email').value;
    var address=document.querySelector('#address').value;
    var amount=document.querySelector('#amount').value;
    var obj={
        name:name,
        email:email,
        address:address,
        amount: +amount
    }
    localStorage.setItem('user',JSON.stringify(obj));
}
