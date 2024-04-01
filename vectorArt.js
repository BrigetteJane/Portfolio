let http = new XMLHttpRequest();

http.open('GET','vectorArt.json', true);


http.send();

http.onload = function(){
  if (this.readyState ==4 && this.status==200){
    let vectorArt = JSON.parse(this.responseText);
    let output="";

    for (let item of vectorArt){
      output += `
      <tbody class="webproject" >
        <tr>
        <td class="date" scope="col-2" style="text-align:center;">${item.year}</td>
        <td class="title" scope="col-4" style="background-color:#f74e3b; color:white; text-align:center">${item.title}</td>
        <td  scope="col-2" style="background-color:#f74e3b; text-align:center; color:white" >${item.programmingLanguage}</td>
        <td class="certLink" scope="col-2" style="text-align:center;"><a href="${item.link}"><i class="fa-solid fa-play"></i><a></td>
        </tr>
        </tbody>
      `;
    }
    document.querySelector('.vectorArt').innerHTML = output;
  }
}







