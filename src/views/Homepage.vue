<template>
  <div class="home">
    <p id="title">Ωριαίο Πρόγραμμα</p>

    <button id="ruthmiseis" @click="openConfigFolder()">
      Ρυθμίσεις
    </button>

    <button id="eclass" @click="openEclass()">
      E-Class
    </button>

    <div v-if="config.links" id="programma_table">
      <table>

        <tr id="meres">
          <th id="wra">Ώρα</th>
          <th>Δευτέρα</th>
          <th>Τρίτη</th>
          <th>Τετάρτη</th>
          <th>Πέμπτη</th>
          <th>Παρασκευή</th>
        </tr>
        
        <tr>
          <th id="wres">8:30 - 9:10</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[0], config)"> {{ item[0] }} </th>
        </tr>

        <tr>
          <th id="wres">9:20 - 10:00</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[1], config)"> {{ item[1] }} </th>
        </tr>

        <tr>
          <th id="wres">10:10 - 10:50</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[2], config)"> {{ item[2] }} </th>
        </tr>
        
        <tr>
          <th id="wres">11:00 - 11:40</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[3], config)"> {{ item[3] }} </th>
        </tr>

        <tr>
          <th id="wres">11:50 - 12:30</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[4], config)"> {{ item[4] }} </th>
        </tr>

        <tr>
          <th id="wres">12:40 - 13:20</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[5], config)"> {{ item[5] }} </th>
        </tr>

        <tr>
          <th id="wres">13:30 - 14:10</th>

          <th id="kathigitis" v-for="item in config.programma" :key="item" @click="openLink(item[6], config)"> {{ item[6] }} </th>
        </tr>
      </table>
    </div>

    <p v-else> Δεν υφίσταται η κατάληλη ρύθμιση. </p>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      config: require("../../conf/userconf.json") ? require("../../conf/userconf.json") : null
    }
  },

  methods: {
    openLink(kathigitis, config) {
      window.open(config.links[kathigitis]);
    },
    openConfigFolder() {
      window.open(`file:///C:/Users/Antreas/Documents/Programming/webex-schedule/conf/`);
    },
    openEclass() {
      window.open("https://eclass.sch.gr");
    }
  }
}
</script>

<style scoped>
* {
  font-family: arial, sans-serif;
}

#title {
  color: #adeebd;
  font-size: 65px;

  text-shadow: 3px 3px 1px rgb(12, 12, 12);

  margin-top: 200px;
}

#eclass, #ruthmiseis {
  color: #bdadea;

  box-shadow: 3.5px 3.5px 0px rgb(29, 29, 29);

  border: 5px solid #000000;
  border-radius: 20px;
  
  font-size: 15px;
  padding: 10px;
}

#eclass:hover, #ruthmiseis:hover {
  color: aqua;
  text-shadow: 2px 2px 0px rgba(12, 12, 12, 0.3)
}

#ruthmiseis {
  position: absolute;
  top: 5px;
  left: 5px;
}

#eclass {
  position: absolute;
  left: 115px;
  top: 5px;
}

#kathigitis {
  color: #c3c3e6;
}

#kathigitis:hover {
  color: aqua;
  text-shadow: 2px 2px 0px rgba(12, 12, 12, 0.3)
}

#meres, #wra, #wres {
  color: #c1edcc;
}

table {
  border-collapse: collapse;
  width: 40%;

  margin: auto;
}

td, th {
  background: #23272A;
  border: 3px solid #000000;
  text-align: left;
  padding: 10px;
  text-align: center;
}
</style>