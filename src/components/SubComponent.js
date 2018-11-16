export const TitleAndInput = {
  template: `
    <div :style="containerStyle">
      <span :style="titleStyle">{{title}}</span>
      <el-input size="medium" :type="type" :style="inputStyle" :disabled="disabled" :value="value" :placeholder="placeholder" @input="input" clearable></el-input>
    </div>
  `,
  props: {
    title: String,
    disabled: Boolean,
    value: String,
    onInput: Function,
    type: String,
    placeholder: String
  },
  data: () => {
    return {
      containerStyle: {
        height: '36px',
        width: '100%',
        margin: '20px 0',
        fontSize: '14px',
        lineHeight: '36px'
      },
      titleStyle: {
        display: 'inline-block',
        width: '100px',
        textAlign: 'right',
        paddingRight: '10px',
        boxSizing: 'border-box'
      },
      inputStyle: {
        marginLeft: '10px',
        width: '400px',
        height: '36px'
      }
    }
  },
  methods: {
    input (value) {
      this.onInput(value)
    }
  }
}
