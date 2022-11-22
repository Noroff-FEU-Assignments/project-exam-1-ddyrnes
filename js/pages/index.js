import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlHomePage } from "../module/urls.js";
import { carousel } from "../module/carousel.js";

const posts = await makeApiCalls(urlHomePage);
async function writePosts(item) {
  cardInnerHtml(item[0], "carousel");
  cardInnerHtml(item[1], "review");
  cardInnerHtml(item[2], "tutorial");
  cardInnerHtml(item[3], "news");
  // "text" adds correct classes to pair with the posts categories
  carousel();
  // calling carousel function after cards has loaded from api
}
writePosts(posts);
