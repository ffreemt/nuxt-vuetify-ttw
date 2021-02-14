// playground/axios-elasticsearch/index.js
import consola from "consola";
// const consola = require("consola");
//consola.level = process.env.CONSOLA_DEBUG || 3;
consola.level = process.env.CONSOLA_DEBUG || 5; //show debug

// const search_es = require("./search_es");
import search_es from "./search_es";

// module.exports = fetch_es;
export default axios_es;
async function axios_es(query, index="") {
  if (!query) {
    return [];
  }

  // default indices
  if (!index) {
    index = ["yhdcd", "dictcor", "uncor"];
  }

  let res;
  try {
    res = search_es(query, index);
  } catch (e) {
    consola.error("search_es e:", e);
    res = [e.message];
    return res;
  }

  // if (res.length)
  if (res.length > 1)
    return res;

  try {
    res = search_es(query, index, "OR"); // search with
    "OR";
  } catch (e) {
    consola.error(`suggest_es e: ${e}`);
    res = [e.message];
  }

  return res;

}

//someAsyncFunction().catch(console.log);
//axios_es('test').catch(console.log);

// /*
axios_es('test').then(res => {
  console
}).catch( e => {
  console.error(e.message)
})
// */
