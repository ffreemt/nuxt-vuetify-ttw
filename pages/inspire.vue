<template>
  <v-container>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
   </v-row>
   <v-row>
          <v-simple-table >
            <template v-slot:default>
              <thead> 
                thead
              </thead> 
              <tbody>
                <tr>
                  <td> td1 </td>
                  <td> td2 </td>
                </tr>
                <tr>
                  <td> r2 td1 </td>
                  <td> td2 </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
   </v-row>
  </v-container>
</template>
