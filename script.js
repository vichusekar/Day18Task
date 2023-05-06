// var container=document.createElement("div");
// container.className="container";

// var row=document.createElement("div");
// row.classList.add("row");


// // var nametype=document.createElement("div");
// // nametype.style.margin="32px";
// // nametype.style.fontFamily="Arial";

// container.append(row);


// // async function brew(){
// // var res= await fetch("https://api.openbrewerydb.org/v1/breweries/")
// // var res1=await res.json()
// // console.log(res1)
// foo()

// // }
// async function foo(){
//   let result=await fetch("https://api.openbrewerydb.org/v1/breweries/")
//   let result1=await result.json()
//   try{
//     for(var i=0;i<result1.length;i++){
//         row.innerHTML+=`
//         <div class="col-md-4">
//         <div class="card border-primary mb-3 " style="width: 18rem;">
//         <img src="" class="card-img-top" alt="">
//           <div class="card-body">
//           <h5 class="card-title">Breweries</h5>
//           <p class="card-text">Name & Type: ${result1[i].name} ${result1[i].brewery_type}<br> Address :${result1[i].address_1}<br> Website url:${result1[i].website_url}<br>Phone no :${result1[i].phone}</p>
//         </div>
//       </div>
//       </div>`;

//       document.body.append(container);


//         }    
//     }
//     catch (err){
//       console.log(err)
//     }
// }

// // brew()




var container=document.createElement('div');
container.className='container';

var row=document.createElement('div');
row.classList.add('row', 'm-4')

// var button=document.createElement('button');
// button.setAttribute=('type', 'button');
// button.innerHTML='Click for Weather';
// button.addEventListener('click',foo)
// button.style.size='30px';


// row.append(button)

container.append(row);

async function foo(){
    var res=await fetch('https://restcountries.com/v3.1/all');
    var res1=await res.json();
    console.log(res1);

    try{
        for(var i=0; i<res1.length; i++){
            row.innerHTML+=`
                    <div class="col-lg-4">
                    <div class="card border-primary mb-3 cards" style="width: 18rem;">
                    <h5 class="card-title"> ${res1[i].name.common}</h5>
                    <img src= "${res1[i].flags.svg}" class="card-img-top" alt="">
                    <p class="card-text"> Capital: ${res1[i].capital}<br>Region: ${res1[i].region}<br> Country Code: ${res1[i].ccn3}<br> Weather: ${res1[i].latlng} </p>
                    <div class="card-body">
                    </div>
                  </div>
                  </div>`;
                  document.body.append(container)
        }
    }
    catch (err){
        console.log(err)
    }


}
foo()

