let url = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=`;
let urlCategory = `&categories=`;

export const urlHomePage = [
  url + "12",
  url + "3" + urlCategory + "17",
  url + "3" + urlCategory + "18",
  url + "3" + urlCategory + "19",
  // Categories: Reviews = 17, Tutorials = 18, News = 19
];
export const urlSpecificPage = [
  url + "12",
  url + "4" + urlCategory + "17",
  url + "4" + urlCategory + "18",
  url + "4" + urlCategory + "19",
  // Categories: Reviews = 17, Tutorials = 18, News = 19
];

export const urlFirstPosts = [url + "9"];

export const urlAllPosts = [url + "100"];

export const specificUrl = `https://api.dd2.no/wp-json/wp/v2/posts/`;
