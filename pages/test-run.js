// node -r esm file.js
import axios_es from "./axios-elasticsearch";

let query = "test测试";
axios_es(query, "uncor")
.then(res => console.log(res))
.catch(e => console.log(e.message))

