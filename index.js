

const submitbtn =  document.querySelector(".btn-submit")
const inputfield = document.querySelector(".input-url")
const tablebody = document.querySelector(".table-body")
const tableheading = document.querySelector(".table-heading")

submitbtn.addEventListener("click",(e)=> {
  tablebody.innerHTML = ''
  tableheading.innerHTML = ''
    url = inputfield.value
    // console.log(validateUrl(url)
        printresponse(url)
})

const validateUrl = (url)=>{

    console.log(url)
   match = url.match('^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$')
    if(match)
    return true
    else return false
}


const printresponse = (url) => {
    if(validateUrl(url)){
        fetch("https://flask-sonunigam4097.vercel.app/urlresponse", {
  method: "POST",
  // mode:'no-cors',
  body: JSON.stringify({
    url: url,
    // title: "Fix my bugs",
    // completed: false
  }),
  headers: {
    // "Content-type": "application/json; charset=UTF-8"
    // "Access-Control-Allow-Origin": "*"

  }
})
  .then((response) => response.json())
  .then((json) => displayHTML(json))


}


}



function displayHTML(data){
 

  tableheading.innerHTML =`
  
  <tr>
                      <th>URL</th>
                      <th>Status Code found</th>
                      <th>Link</th>
      
                    </tr>
  
  `


  success = data['success']
  fail = data["fail"]
  

  success.forEach(element => {
    html = `
  <tr class="has-background-success">
                      <th>${element}</th>
                      <td>   statuscode 200  </td>
                      <td>  <button class="button is-info"><a href="${element}">Click to browse</a></button>
                      </td>
                    </tr>
  
  
  `
      tablebody.innerHTML+= html
  });


  fail.forEach(element => {
    html = `
  <tr class="has-background-danger">
                      <th>${element}</th>
                      <td>   statuscode 200  </td>
                      <td>  <button class="button is-info"><a href="${element}">Click to browse</a></button>
                      </td>
                    </tr>
  
  
  `
      tablebody.innerHTML+= html
  });



}