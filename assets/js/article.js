/*
==========================================
Learn Cyber With Vano
Article Reader
Version : 1.0
==========================================
*/

let articles = [];

// ==========================
// Ambil parameter URL
// ==========================

const params =
new URLSearchParams(window.location.search);

const slug =
params.get("id");

// ==========================
// Load Articles JSON
// ==========================

async function loadArticle(){

    try{

        const response =
        await fetch("data/articles.json");

        articles =
        await response.json();

        const article =
        articles.find(item=>item.slug===slug);

        if(!article){

            showNotFound();

            return;

        }

        loadMarkdown(article);

    }

    catch(error){

        console.error(error);

    }

}

// ==========================
// Load Markdown
// ==========================

async function loadMarkdown(article){

    try{

        const response =
        await fetch(article.file);

        const markdown =
        await response.text();

        document.getElementById("articleTitle").textContent =
        article.title;

        document.getElementById("articleCategory").textContent =
        article.category;

        document.getElementById("content").innerHTML =
        markdownToHTML(markdown);

        createTOC();

        createNavigation(article);

    }

    catch(error){

        console.error(error);

    }

}

// ==========================
// Markdown Parser Sederhana
// ==========================

function markdownToHTML(text){

    return text

    .replace(/^### (.*$)/gim,"<h3>$1</h3>")

    .replace(/^## (.*$)/gim,"<h2>$1</h2>")

    .replace(/^# (.*$)/gim,"<h1>$1</h1>")

    .replace(/\*\*(.*?)\*\*/gim,"<strong>$1</strong>")

    .replace(/\*(.*?)\*/gim,"<em>$1</em>")

    .replace(/\n/g,"<br>");

}

// ==========================
// Table Of Contents
// ==========================

function createTOC(){

    const toc =
    document.getElementById("toc");

    if(!toc) return;

    toc.innerHTML="";

    const headings =
    document.querySelectorAll(

        "#content h1,#content h2,#content h3"

    );

    headings.forEach((heading,index)=>{

        heading.id="heading-"+index;

        toc.innerHTML+=`

        <li>

            <a href="#heading-${index}">

                ${heading.textContent}

            </a>

        </li>

        `;

    });

}

// ==========================
// Previous & Next
// ==========================

function createNavigation(article){

    const index =
    articles.indexOf(article);

    const nav =
    document.querySelector(".article-navigation .container");

    if(!nav) return;

    nav.innerHTML="";

    if(index>0){

        nav.innerHTML+=`

        <a href="detail.html?id=${articles[index-1].slug}">

            ← ${articles[index-1].title}

        </a>

        `;

    }

    if(index<articles.length-1){

        nav.innerHTML+=`

        <a href="detail.html?id=${articles[index+1].slug}">

            ${articles[index+1].title} →

        </a>

        `;

    }

}

// ==========================
// Artikel Tidak Ditemukan
// ==========================

function showNotFound(){

    document.getElementById("content").innerHTML=`

        <h2>

            Artikel tidak ditemukan

        </h2>

        <p>

            Artikel yang kamu cari belum tersedia.

        </p>

    `;

}

// ==========================
// Start
// ==========================

loadArticle();
