import Index from './Index.svelte'

const index = new Index({
  target: document.getElementById('index'),
  props: {
    version: "telos"
  }
})

export default index
