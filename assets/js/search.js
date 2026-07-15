/*
==========================================
Learn Cyber With Vano
Search Article
Version : 1.0
==========================================
*/

let articles = [];

const articleContainer =
document.getElementById("articleContainer");

const searchInput =
document.getElementById("searchInput");

const filterButtons =
document.querySelectorAll(".filter-btn");

// ==========================
// Load Articles
// ==========================

async function loadArticles(){

    try{

        const response =
        await fetch("data/articles.json");

        articles =
        await response.json();

        renderArticles(articles);

    }

    catch(error){

        console.error(error);

    }

}

// ==========================
// Render Articles
// ==========================

function renderArticles(data){

    if(!articleContainer) return;

    articleContainer.innerHTML="";

    if(data.length===0){

        articleContainer.innerHTML=`

            <p>

                Belum ada artikel.

            </p>

        `;

        return;

    }

    data.forEach(article=>{

        articleContainer.innerHTML+=`

        <div class="article-card">

            <div class="article-image">

            </div>

            <div class="article-content">

                <span class="article-category">

                    ${article.category}

                </span>

                <h3 class="article-title">

                    ${article.title}

                </h3>

                <p class="article-desc">

                    ${article.description}

                </p>

                <a
                class="read-more"
                href="detail.html?id=${article.slug}">

                    Baca Artikel →

                </a>

            </div>

        </div>

        `;

    });

}

// ==========================
// Search
// ==========================

if(searchInput){

searchInput.addEventListener("keyup",()=>{

    const keyword =
    searchInput.value.toLowerCase();

    const result =
    articles.filter(article=>{

        return(

            article.title
            .toLowerCase()
            .includes(keyword)

            ||

            article.description
            .toLowerCase()
            .includes(keyword)

        );

    });

    renderArticles(result);

});

}

// ==========================
// Filter Category
// ==========================

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

    filterButtons.forEach(btn=>{

        btn.classList.remove("active");

    });

    button.classList.add("active");

    const category=
    button.textContent;

    if(category==="Semua"){

        renderArticles(articles);

        return;

    }

    const result=
    articles.filter(article=>{

        return article.category===category;

    });

    renderArticles(result);

});

});

// ==========================
// Start
// ==========================

loadArticles();
