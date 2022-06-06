var myobj=JSON.parse(localStorage.getItem('user'));
console.log(myobj);
var mywallet=document.querySelector('#wallet_balance');mywallet.innerText=myobj.amount;

async function getData(){
    try{
        var url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';
        var res=await fetch(url);
        var data=await res.json();
        console.log(data)
        func(data[0].vouchers);
    }
    catch (error){
        console.log(error)
    }
}
var voucherdiv=document.querySelector('#voucher_list');
getData()
var arr=JSON.parse(localStorage.getItem('purchase'))||[];
var sum=0;
function func(data){
    console.log()
    data.forEach(element => {
        
        var div=document.createElement('div');
        div.setAttribute('class','voucher');

        var img=document.createElement('img');
        img.src=element.image;

        var p1=document.createElement('p');
        p1.innerText=element.name;

        var p2=document.createElement('p');
        p2.innerText=element.price;

        var btn=document.createElement('button');
        btn.innerText='BUY';
        btn.setAttribute('class','buy_voucher');
        btn.addEventListener('click',btN);
        
        function btN(){
            sum+=element.price;
            
            if(sum<=myobj.amount){
                mywallet.innerText=sum;
                alert('Hurray! purchase successful')
                var obj={
                    name:element.name,
                    image:element.image,
                    amount:element.price,
                }
                arr.push(obj);
                localStorage.setItem('purchase',JSON.stringify(arr));
            }
            if(sum>myobj.amount){
                alert('Sorry! insufficient balance')
            }
            
        }
        div.append(img,p1,p2,btn);
        
        voucherdiv.append(div)
    });
    




}
