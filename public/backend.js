document.getElementById("getFact").onclick = getFact;
const container = document.querySelector(".post-container");


function getFact(){
    document.getElementById("LoaderDiv").style.display = "block"
    document.getElementById('factTxt').innerText = "Fact Loading...."
    


    const myURL = new URL("https://meowfacts.herokuapp.com/?count=1")

    fetch(myURL).then(function (response){
        return response.json();
    }).then(function (json){
        document.getElementById('factTxt').innerText = json.data
        document.getElementById("LoaderDiv").style.display = "none";
        console.log(json);
    })

    console.log(myURL);


}


function getPosts(){

    container.innerHTML  = ""
    
    fetch(`https://www.reddit.com/r/catpics/rising.json?limit=50`)
    .then(function(res) {
      return res.json();
         // Convert the data into JSON
    })
    .then(function(res) {
       // Logs the data to the console
      

       let currPost, markup = ``;
          
          // The array that contains our posts
          const postsArr = res.data.children;
          
          // Add a header based on post type
          markup = `<h2>Trending cats</h2>`;
          
          // Iterate through our posts array and chain
          // the markup based on our HTML structure
          for (let i = 0; i < postsArr.length; i++) {
             currPost = postsArr[i].data;   // a single post object
             markup += `
                <a class="post" href="https://www.reddit.com${currPost.permalink}">
                   <div class="title"> ${currPost.title} </div>
                   <div class="content"> 
                       ${currPost.selftext}
                       </br>
                       <img src="${currPost.thumbnail}" alt="A Cat photo"></img> 
                       </br></br>
                       <span>${currPost.url}</span>
                   </div>
                   <div class="author"> Posted by ${currPost.author} </div>
                </a>
             `;
          }
          // Insert the markup HTML to our container
          container.insertAdjacentHTML('afterbegin',markup);
    })
    .catch(function(err) {
      console.log(err);   // Log error if any
    });


}