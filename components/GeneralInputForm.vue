<template>
  <b-form @submit.prevent="">
    <b-form-group
    id="age"
    label="Age:"
    label-for="input-1">
    <b-form-input
      id="input-1"
      v-model="age"
      type="number"
      min=0
      max=150
      number
      placeholder="Type age here..."
      style="text-align: left"
    ></b-form-input>
    </b-form-group>

    <b-form-group
      id="gender"
      v-slot="{ ariaDescribedby }"
      label="Gender: ">
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      id="localization"
      label="Localization: ">
    <b-table-simple responsive bordered>
    <b-tbody>
      
        <b-tr v-for="x in parseInt((localization.length+2)/3)" :key="x">
           <!-- <b-td>{{x}}</b-td> -->
        
          <b-td>
            <b-button variant="outline-primary" :pressed="localState==3*x-3" @click="onClick(3*x-3)">
              {{localization[3*x-3]}}
            </b-button>
          </b-td>
          <b-td v-if="3*x-2<localization.length">
            <b-button variant="outline-primary" :pressed="localState==3*x-2" @click="onClick(3*x-2)">
              {{localization[3*x-2]}}
            </b-button>
          </b-td>
          <b-td v-if="3*x-1<localization.length">
            <b-button variant="outline-primary" :pressed="localState==3*x-1" @click="onClick(3*x-1)">
              {{localization[3*x-1]}}
            </b-button>
          </b-td>
        </b-tr>
      
    </b-tbody>
    </b-table-simple>
    </b-form-group>
    
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      age: null,
      selected: 'male',
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      localization : ['back', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'],
      localState: 1
    }
  },
  watch: {
    file(val) {
      if (!val) {
        this.imgBase64 = 'default-skin-thumbnail.png'
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(val)
      reader.onload = (event) => {
        this.imgBase64 = event.target.result
      }
    },
  },
  methods: {
    onClick(x) {
      this.localState = x
    },
    
  },
}
</script>
<style scoped>
#age, #gender, #localization {
  font-weight: bold;
}

</style>