// search_es.js based on axios_es.js

// import tracer from "tracer";
// const tracer = require("tracer");
// const axios = require("axios");
import axios from "axios";

// const jsonPath = require("JSONPath");

// const logger = tracer.colorConsole({
  // format : "{{timestamp}} <{{title}}>{{file}}:{{line}}: {{message}}",
  // dateformat : "HH:MM:ss.L",
  // level: "info",
// });

const ip = "216.24.255.63";
const corsproxy = "corsproxy.dattw.ga";

// let baseURL = `http://${ip}:1337/127.0.0.1:9200/dictcor/_search/`;
let baseURL;

let config = {
  //"method": "POST",
  //"baseURL": baseURL,
  "timeout": 20000,
  "headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  }
};

// module.exports = search_es;
export default search_es
async function search_es(query = "", index="", default_operator="") {
  // logger.debug("query: **%s**", query);
  if (typeof(query) === "string"){
    query = query.trim();
  }
  // let query = query.trim()

  if (!query){
    // return {text: [""]};
    return [];
  }

  if (!index) index =  ["yhdcd", "dictcor", "uncor"]; // earoparl-de-en xinhua
  if (typeof(index) === "string") index = index.split(",").map(el=>el.trim()); // comma separate indices of string

  if (!default_operator) default_operator = "AND"; // "OR"
  
  baseURL = `http://${ip}:1337/127.0.0.1:9200/${index.join(",")}/_search/`;
  baseURL = `https://${corsproxy}/127.0.0.1:9200/${index.join(",")}/_search/`;
  let data = "";
  let resp = "";
  let res = "";

  data = {"query":{"query_string":{"default_field": "text","default_operator": default_operator,"query":query}},"highlight": {"order" : "score", "type" : "unified",  "number_of_fragments" : 0,"fields": {"text":{}}}};

  // let resp = await instance(data=data)
  // var r0; resp.then(r => {r0 = r; console.log(r0.data)});
  // r0.data.hits.hits.map(el => el.highlight.text.join(" "))
  // query = "developing countries jointly 国"
  // query = ""
  // var r1; axios.post(baseURL, data, config).then(r=>{r1=r}).catch(e=>{r1=e.message})

  try {
    resp = await axios.post(
      baseURL,
      data, config
    );
  }
  catch (e) {
    // logger.error("e.message:", e.message);
    // return [{text: [e.message]}];
    return [e.message];
  }

  // debug(JSON.stringify(resp.data['hits']['hits']))

  // res = jsonPath.eval(resp.data, '$..highlight')

  // logger.debug("resp.data.hits.hits:", resp.data.hits.hits);

  res = resp.data.hits.hits.map(el => el.highlight.text.join(" "));

  // if (resp.data.hits.hits.length)
    // logger.debug("resp.data.hits.hits ", resp.data.hits.hits[0].highlight.text.join(" "));
  // logger.debug("res: ", res);

  if (res.length) {
    // info(jsonPath.eval(resp.data, '$.'))
    // res.push({text: [`(Search term(s): ${query}, took ${resp.data.took} ms)`]})
    // res.push({text: `(Search term(s): ${query}, took ${resp.data.took} ms)`});
    res.push(`(Search term(s): ${query}, took ${resp.data.took} ms)`);
    return res;
  }

  return [];

}

