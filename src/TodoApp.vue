<template>
  <div class="home pa-6">
    <h1>Notyfikacje:</h1>
    <v-card
    max-width="475"
    class="mx-auto"
  >
    <v-divider></v-divider>
<v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            v-model = "newTaskTitle"
            label="Wpisz cos"
            clearable
          >
          </v-text-field>
          <v-container
    class="px-0"
    fluid
  >
    <v-container fluid>
    <v-radio-group
      v-model="radios"
      mandatory
    >
      <v-radio
        label="Praca"
        value="Praca"
      ></v-radio>
      <v-radio
        label="Nauka"
        value="Nauka"
      ></v-radio>
      <v-radio
        label="Odpoczywanie"
        value="Odpoczywanie"
      ></v-radio>
    </v-radio-group>
  </v-container>
  </v-container>

  
 <v-btn style = "margin-left: 60%; background-color: #66FF99"
          @click="addTask()">Zatwierdz</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    
    <ListApp />

  </v-card>
  <v-list-item-action style = "margin-left: 45%;">
      
      <hr style = "width: 100%">
      <v-btn 
      @click="refresh()"
      icon
      >
    
      <v-icon>mdi-refresh</v-icon>
      Odswież</v-btn>

      </v-list-item-action>
  </div>
  
</template>
<script>
import ListApp from './ListVue.vue'
export default{

 // name: 'TodoApp',
  data() {
    return {
      newTaskTitle: '',
      tasks: this.$store.state.tasks
    }
  },
  methods:{
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        kategoria: this.radios,
        done: false
      }
      this.tasks.push(newTask)
      this.newTaskTitle = ''
  },
    doneTask(id){
      let task = this.tasks.filter(task => task.id === id) [0]
      task.done = !task.done

      console.log('wybrano id: ', id)
    },
    deleteTask(id){
    this.tasks = this.tasks.filter(task => task.id !== id)
 },
    refresh () {
      window.location.reload()
    }
  },
  
    components: {ListApp}
  
  
}
    //console.log(this.$store.state.task.title);

</script>
<style>



</style>