//uncor based on Rcardv src/components/Rcardv.vue -> index=["yhdcd", "dictcor", "earoparl-de-en"]
<template>
    <!--v-container v-show="vshowflag"-->
    <v-container>
      <v-row> 联合国语料库（en-zh） {{resu}}</v-row>
          <v-simple-table >
          <!-- dense -->
            <template v-slot:default>
              <!-- <thead> -->
                <!-- <tr> -->
                  <!-- <th class="text-left">Dictcor</th> -->
                <!-- </tr> -->
              <!-- </thead> -->
              <tbody>
                <tr v-for="item in result" :key="item.text1 + item.text2">
                  <td v-html="item.text1"></td>
                  <td v-html="item.text2"></td>
                  <!-- <td>{{ item.calories }}</td> -->
                </tr>
              </tbody>
            </template>
          </v-simple-table>
      <!-- </v-col></v-row> -->
      <v-row>  <!-- spinner, where is diggin... -->
        <v-col>
            <v-progress-circular
              indeterminate
              color="primary"
              v-show="spflag"
            ></v-progress-circular> </v-col>
      </v-row>
      </v-container>
</template>
<script>
// import axios from "axios";
// eslint-disable-next-line
// import axios_es from './axios_es'
// import consola from "consola"
import axios_es from "./axios-elasticsearch"
//consola.level = process.env.CONSOLA_DEBUG || 5;  // show debug

export default {
    // props: {
    // phrase: {type: String, default: null},
     // sel: {type: Boolean, default: false}
    //},
    props: ["phrase", "sel"],
    data() {
      return {
        result: this.phrase,
        spflag: false,
        vshowflag: false,
        selflag: true,
        query: this.$route.query.phrase,
      }
    },
    watch: {
      //eslint-disable-next-line no-unused-vars
      sel: function(newVal, oldVal) {
        this.selflag = newVal;
      },

      //eslint-disable-next-line no-unused-vars
      phrase: function (newVal, oldVal) {
        // eslint-disable-line
        // this.result = newVal;
        // if (newVal == "") return "";

        if (!this.selflag | newVal === null | newVal === "") {this.vshowflag = false; return ""; }

        this.vshowflag = true;

        // this.result = "diggin...";
        this.spflag = 1;  // spinner flag

        let query = newVal;
        // this.result = "xxxx" + query;
        // /*

        console.log("query: ", query)

        axios_es(query, ["uncor"]).then(res => {
          // eslint-//disable-next-line
          //console.log("** res **", res);

          // this.result = query;
          //this.result = Array.from(new Set(res.filter(el => el.indexOf("_>") == -1).map(el => el.trim())));

          if (!res) {this.result = []; return}
          // remove items containing '_>' (errors in macm?)
          // remove dulicates
          res = Array.from(new Set(res.filter(el => el.indexOf("_>") == -1).map(el => el.trim())))
          // remove duplicate and split
          res = res.map(el => {let r = el.split(/→|←|->/g, 2); if (!r.length) return {text1:"", text2:""}; if (r.length === 1) return {text1: r[0], text2: ""}; return {text1: r[0], text2: r[1]} })

          //remove identical left/right column entries (compare after removing spaces '"`
          this.result = res.filter(el => el.text1.replace(/['"`\s?？.。]+/g, "") != el.text2.replace(/['"`\s?？.。]+/g, ""))
            /*console.log("this.res: ", this.result)*/
          this.spflag = 0;
        }).catch(e => {
          this.spflag = 0
          this.result = [{text1: e.message, text2:""}]
        });
        //*/
    }
    },
  computed: { 
    resu() {
        this.vshowflag = true;

        // this.result = "diggin...";
        this.spflag = 1;  // spinner flag

        /*let query = newVal;*/
        let query = this.$route.query.phrase;

        // this.result = "xxxx" + query;
        // /*

        //console.log("computed query: ", query)

        axios_es(query, ["uncor"]).then(res => {
          // eslint-//disable-next-line
          //console.log("** res **", res);

          // this.result = query;
          //this.result = Array.from(new Set(res.filter(el => el.indexOf("_>") == -1).map(el => el.trim())));

          if (!res) {this.result = []; return}

          // remove items containing '_>' (errors in macm?)
          // remove dulicates
          res = Array.from(new Set(res.filter(el => el.indexOf("_>") == -1).map(el => el.trim())))
          // remove duplicate and split
          res = res.map(el => {let r = el.split(/→|←|->/g, 2); if (!r.length) return {text1:"", text2:""}; if (r.length === 1) return {text1: r[0], text2: ""}; return {text1: r[0], text2: r[1]} })

          //remove identical left/right column entries (compare after removing spaces '"`
          //this.result = res.filter(el => el.text1.replace(/['"`\s?？.。]+/g, "") != el.text2.replace(/['"`\s?？.。]+/g, ""))
          res = res.filter(el => el.text1.replace(/['"`\s?？.。]+/g, "") != el.text2.replace(/['"`\s?？.。]+/g, ""))

          // modify <em>
          res = res.map(el => {
            const em = '<em style="color:red; font-weight: bolder;">';
            let text1 = el.text1.replace(/<em\s*?>|<b\s*?>/g, em);
            let text2 = el.text2.replace(/<em\s*?>|<b\s*?>/g, em);
            return {text1: text1, text2: text2};
          });

          //this.result = res;
          //console.log("this.reslt: ", this.result)

          this.spflag = 0;
          return this.result = res;

        }).catch(e => {
          this.spflag = 0
          this.result = [{text1: e.message, text2:""}]
        });
        //*/
    }
 }};
//  font-style: italic;
</script>
<style scoped>
em { font-style: normal; font-weight: bolder; color: red; }
b { font-style: normal; font-weight: bolder; color: red; }
</style>
