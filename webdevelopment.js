let http = new XMLHttpRequest();

http.open('GET','webdevelopment.json', true);


http.send();

http.onload = function(){
  if (this.readyState ==4 && this.status==200){
    let webdevelopmentproject = JSON.parse(this.responseText);
    let output="";

    for (let item of webdevelopmentproject){
      output += `
      <tbody class="webproject" >
        <tr>
        <td class="date" scope="col-2" style="text-align:center;">${item.year}</td>
        <td class="title" scope="col-4" style="background-color:#f74e3b; color:white; text-align:center">${item.title}</td>
        <td  scope="col-2" style="background-color:#f74e3b; text-align:center; color:white" >${item.programmingLanguage}</td>
        <td class="location" scope="col-2" style="background-color:#f74e3b;"><a href="${item.code}">
        <i class="fa-solid fa-code"></i></a></td>
        <td class="certLink" scope="col-2" style="text-align:center;"><a href="${item.link}"><i class="fa-solid fa-play"></i><a></td>
        </tr>
        </tbody>
      `;
    }
    document.querySelector('.webproject').innerHTML = output;
  }
}







