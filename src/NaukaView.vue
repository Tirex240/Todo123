<template>


    <div class="ListApp">

  <v-list
      two-line
      flat
    >
        <v-list-item
          v-for= "task in tasks"
          :key="task.id"
          
          :class = "{'grey lighten-2' : task.done}"
          @click="doneTask(task.id)"
          >
        
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
              
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title style = "">{{task.title}}
                <h1>{{task.kategoria}}</h1>
              </v-list-item-title>
            </v-list-item-content>
            
          </template>
        </v-list-item>

    </v-list>
    </div>

</template>

<script>
export default{
name: 'NaukaApp',
 // name: 'TodoApp',
  data() {
    return {
      newTaskTitle: '',
      tasks: this.$store.getters.wypiszNauka
      
    }
  },
  methods:{
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
  }
  
}

</script>

<style>

</style>