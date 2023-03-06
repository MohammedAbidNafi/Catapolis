
   const container = document.querySelector(".post-container");


function getImage(){

    document.getElementById("LoaderDiv").style.display = "block"


    container.innerHTML  = ""
    
    fetch(`https://www.reddit.com/r/cats/top.json?t=all`)
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
          markup = `<h3>Top posts from r/cat</h3>`;
          
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
                       <img src="${currPost.thumbnail}"></img> 
                       </br></br>
                       <span>${currPost.url}</span>
                   </div>
                   <div class="author"> Posted by ${currPost.author} </div>
                </a>
             `;
          }
          // Insert the markup HTML to our container
          container.insertAdjacentHTML('afterbegin',markup);
          document.getElementById("LoaderDiv").style.display = "none";
    })
    .catch(function(err) {
      console.log(err);   // Log error if any
    });


  

    
}
