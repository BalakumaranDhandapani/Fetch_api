// var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data1)=>console.log(data1));

// to print all the country names
// var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json").then((data)=>data.json());
// var result=res.then((data1)=>{
//     for(var i=0; i<data1.length;i++)
//     {
//         console.log(data1[i].name);
//     }
// });

//to print Capital, Region and Population in Cards using Bootstrap

// var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json())
// .then((data1)=>{
//     for(var i=0; i<data1.length;i++)
//     {
//         var div=document.createElement("div");
//         div.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
//       <div class="card-header">Country Name: ${data1[i].name}</div>
//       <div class="card-body text-primary">
//         <h5 class="card-title">Capital: ${data1[i].capital}</h5>
//         <h5 class="card-title">Region: ${data1[i].region}</h5>
//         <h5 class="card-title">Population: ${data1[i].population}</h5>  
//         <h5 class="card-title">Latitude: ${data1[i].latlng[0]}</h5>
//         <h5 class="card-title">Longitude: ${data1[i].latlng[1]}</h5>
//         <h5 class="card-title">Country Code: ${data1[i].alpha3Code}</h5>
//       </div>`
//       document.body.append(div);
//     }
// });

var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json())
.then((data1)=>{
    var j=1,k=2;
    for(var i=0; i<data1.length;i++)
    {
        var div=document.createElement("div");
        div.innerHTML=`<div class="card-deck" style="background-color: aliceblue;">
        <div class="card" style="padding:10px; margin: 15px; height:auto; background-color: gainsboro;">
            <h4 class="card-header bg-dark border-dark" style="color:white; text-align:center">${data1[i].name}</h4>
          <img style="padding:10px; display:block; margin-left: auto; margin-right: auto; width: 90%;" src="${data1[i].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="text-align:center;">Capital: ${data1[i].capital}</p>
            <p class="card-text" style="text-align:center">Region: ${data1[i].region}</p>
            <p class="card-text" style="text-align:center">Country Code: ${data1[i].alpha3Code}</p>
          </div>
        </div>
        <div class="card" style="padding:10px; margin: 15px; height:auto; background-color: gainsboro;">
            <h4 class="card-header bg-dark border-dark" style="color:white; text-align:center">${data1[j].name}</h4>
          <img style="padding:10px; display:block; margin-left: auto; margin-right: auto; width: 90%;" src="${data1[j].flag}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text" style="text-align:center">Capital: ${data1[j].capital}</p>
          <p class="card-text" style="text-align:center">Region: ${data1[j].region}</p>
          <p class="card-text" style="text-align:center">Country Code: ${data1[j].alpha3Code}</p>
          </div>
        </div>
        <div class="card" style="padding:10px; margin: 15px; height:auto; background-color: gainsboro;">
            <h4 class="card-header bg-dark border-dark" style="color:white; text-align:center">${data1[k].name}</h4>
          <img style="padding:10px; display:block; margin-left: auto; margin-right: auto; width: 90%;" src="${data1[k].flag}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text" style="text-align:center">Capital: ${data1[k].capital}</p>
          <p class="card-text" style="text-align:center">Region: ${data1[k].region}</p>
          <p class="card-text" style="text-align:center">Country Code: ${data1[k].alpha3Code}</p>
          </div>
        </div>
      </div>`
      document.body.append(div);
      i=k;//2
      j=i+2;//4
      k=j+1;//5
    }
});