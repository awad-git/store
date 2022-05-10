let title=document.getElementById('title')
let price=document.getElementById('price')
let tax=document.getElementById('tax')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let count=document.getElementById('count')
let cat=document.getElementById('category')
let submit=document.getElementById('submit')

console.log(title,price,tax,ads,discount,count,cat,total,submit)
let j
//let mood='create'
//get total
function getTotal(){
    if (price.value !=''){
        let result=(+price.value+ +tax.value+ +ads.value)- +discount.value
        total.innerHTML=result
        total.style.background='green'

    }else{total.innerHTML=''
total.style.background='red'}
}


//validate & createupda
let products
if(localStorage.product!=null){
    products=JSON.parse(localStorage.product)
    }else{products=[]}


submit.addEventListener('click',create)
function create(){
    
    if(submit.innerHTML==='create'){if(title.value && price.value && count.value && cat.value !=''){
let newProduct={
    title:title.value,
    price:price.value,
    ads:ads.value,
    tax:tax.value,
    total:total.innerHTML,
    discount:discount.value,
    count:count.value,
    category:cat.value
}


//console.log(newProduct)
products.push(newProduct)
//save to local storage
localStorage.setItem('product',JSON.stringify(products))
console.log('AWAAAAproducts')
//clear form
count.value=''
title.value=''
price.value=''
ads.value=''
tax.value=''
cat.value=''
discount.value=''
showData()
}else{prompt('enter the missing values')}
}
else{updating(j)}}
//read and show
function showData(){
    let table=''
   
for(let i=0;i<products.length;i++){
            
    table+=`<tr>
    <td>${i}</td>
    <td>${products[i].title}</td>
    <td>${products[i].price}</td>
    <td>${products[i].tax}</td>
    <td>${products[i].ads}</td>
    <td>${products[i].discount}</td>
    <td>${products[i].total}</td>
    <td>${products[i].category}</td>
    <td><button onclick="updat(${i})" id="update">update</button></td>
    <td><button onclick="delet(${i})" id="delete">delete</button></td>
    </tr>`
    document.getElementById('tb').innerHTML=table
    if(products.length>0){
        document.getElementById('dAll').style.display='inline'
    }
}

}
showData()
function delet(i) {
    //console.log('delete')
    //products=JSON.parse(localStorage.product)
products.splice(i,1)
localStorage.setItem('product',JSON.stringify(products))
showData()
}
//count creation / button
//delete

function clearData(){
    console.log('working')
    localStorage.clear()
    products.splice(0);
    showData()
}
//update
function updat(i){
    let p=products[i]
scroll({top:0,behavior:"smooth"})
 title.value=p.title
price.value=p.price
tax.value=p.tax
ads.value=p.ads
discount.value=p.discount
total.innerHTML=p.total
count.value=p.count
cat.value=p.category
submit.innerHTML='update'
j=i
//submit.addEventListener('click',updating(j))
console.log(j)
//mood==='update'
}
function updating(j){
   
console.log(products)
console.log(products[j])

    products[j].title=title.value
    products[j].price=price.value
    products[j].ads=ads.value
    products[j].tax=tax.value
    products[j].total=total.innerHTML
    products[j].discount=discount.value
    products[j].count=count.value
    products[j].category=cat.value

console.log(products[j])
localStorage.setItem('product',JSON.stringify(products))

submit.innerHTML='create'
showData()
}
//submit.addEventListener('click',updating(j))
///if(mood==='create'){submit.addEventListener('click',create)}else{
//search
let smood='title'
let searchValue=document.getElementById('search')
function searchTitle(d){

    console.log(`id is ${d}`)
    if (d=='stitle'){
searchValue.focus
console.log(searchValue.value)
for (let m=0;m<products.length;m++){
    if (products[m].title.includes(searchValue.value)){
console.log('found')
    }
    //else{console.log('not found')}
}


    }
    else{console.log('searching category')}

}
