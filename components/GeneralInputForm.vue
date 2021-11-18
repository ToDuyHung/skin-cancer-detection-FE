<template>
  <b-form ref="form" @submit.prevent>
    <b-form-group
    id="age"
    label="Age:"
    label-for="input-1">
    <b-form-input
      id="input-1"
      v-model="form.age"
      type="number"
      min=0
      max=150
      number
      required
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
        v-model="form.gender"
        :options="options"
        :aria-describedby="ariaDescribedby"
        button-variant="outline-primary"
        size="md"
        name="radio-btn-outline"
        buttons
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group
      id="localization"
      label="Localization: ">
    <b-table-simple responsive bordered small fixed>
    <b-tbody>
        <b-tr v-for="x in parseInt((localization.length+2)/3)" :key="x">
          <b-td>
            <b-button class="local-btn" size="sm" variant="outline-primary" :pressed="localState==3*x-3" @click="onClick(3*x-3)">
              {{localization[3*x-3]}}
            </b-button>
          </b-td>
          <b-td v-if="3*x-2<localization.length">
            <b-button class="local-btn" size="sm" variant="outline-primary" :pressed="localState==3*x-2" @click="onClick(3*x-2)">
              {{localization[3*x-2]}}
            </b-button>
          </b-td>
          <b-td v-if="3*x-1<localization.length">
            <b-button class="local-btn" size="sm" variant="outline-primary" :pressed="localState==3*x-1" @click="onClick(3*x-1)">
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
      form: {
        age: null,
        gender: 'male',
        localization: 'abdomen',
      },
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      localization: [
        'abdomen',
        'acral',
        'back',
        'chest',
        'ear',
        'face',
        'foot',
        'genital',
        'hand',
        'lower extremity',
        'neck',
        'scalp',
        'trunk',
        'upper extremity',
        'unknown',
      ],
      localState: 1,
    }
  },
  watch: {
    localState(val) {
      this.form.localization = this.localization[val]
    },
    form: {
      handler(val) {
        this.$emit('update:clinical-data', val)
      },
      deep: true,
    },
  },
  methods: {
    onClick(x) {
      this.localState = x
    },
    isValid() {
      return this.$refs.form.reportValidity()
    },
  },
}
</script>
<style scoped>
#age,
#gender,
#localization {
  font-weight: bold;
}
.local-btn {
  width: 100%;
  height: 100%;
}
</style>