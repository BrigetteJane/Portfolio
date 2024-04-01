let http = new XMLHttpRequest();

http.open('GET','certificate.json','training.json', true);


http.send();

http.onload = function(){
  if (this.readyState ==4 && this.status==200){
    let certificate = JSON.parse(this.responseText);
    let output="";

    for (let item of certificate){
      output += `
      <tbody class="certificate" >
        <tr>
        <td class="date" scope="col" style="text-align:center;">${item.year}</td>
        <td scope="col" style="background-color:#f74e3b; text-align:center;"><img class="img-fluid logo" src="${item.img}" alt="logo"></td>
        <td class="title" scope="col" style="background-color:#f74e3b; color:white">${item.title}</td>
        <td class="location" scope="col" style="background-color:#f74e3b; color:white"><i class="fa-solid fa-location-dot"></i> ${item.location}</td>
        <td class="tags" scope="col" style="background-color:#f74e3b; color:white">${item.tag}</td>
        <td class="certLink" scope="col" style="text-align:center;"><a href="${item.link}"><i class="fa-solid fa-play"></i><a></td>
        </tr>
        </tbody>
      `;
    }
    document.querySelector('.certificate').innerHTML = output;
  }
}







