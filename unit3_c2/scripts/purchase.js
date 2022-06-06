var arr=JSON.parse(localStorage.getItem('purchase'));
var mydiv=document.querySelector('#purchased_vouchers');
var total=document.querySelector('#wallet_balance');
func(arr);

function func(arr,){
    var sum=0;
    arr.forEach(element => {
        
        sum+=element.amount;
        
        var div=document.createElement('div');
        

        var img=document.createElement('img');
        img.src=element.image;

        var p1=document.createElement('p');
        p1.innerText=element.name;

        var p2=document.createElement('p');
        p2.innerText=element.amount;
        div.append(img,p1,p2);
        mydiv.append(div);
    });
    
    total.innerText=sum;
    console.log(sum);
}

