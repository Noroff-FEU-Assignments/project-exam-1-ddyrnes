export async function createSpecificArticle(data) {
  const articleHeader = document.querySelector(".specific-article-header");
  const articleContent = document.querySelector(".specific-article");
  const pageTitle = document.querySelector("title");
  pageTitle.innerHTML += ` | ${data.title.rendered} (${data._embedded["wp:term"][0][0].name})`;
  let newDate = new Date(data.date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }
  articleHeader.innerHTML = `
      <div class="category-title card-category flex-row ">
        <div class="${data._embedded["wp:term"][0][0].name} category-line"></div>
        <p class="${data._embedded["wp:term"][0][0].name}">${data._embedded["wp:term"][0][0].name}</p>
        <div class="${data._embedded["wp:term"][0][0].name} category-line"></div>
      </div>
      <h1>${data.title.rendered}</h1>
      <p>By ${data._embedded.author[0].name} | ${year + "-" + month + "-" + date}</p>
      `;
  articleContent.innerHTML = data.content.rendered;
  articleContent.innerHtml += `<div class="cta-container flex-row">
  <a href="/articles.html" class="cta">All Articles</a>
</div>`;
}
