<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import WebViewer from '@pdftron/webviewer'

export default defineComponent({
    props: { initialDoc: {type: String}},
    setup(props) {
        const viewer = ref(null)
        onMounted(() => {
            const path = `${process.env.BASE_URL}webviewer`;
            WebViewer({path, initialDoc: props.initialDoc}, viewer.value)
        })
        return {viewer}
    }
})
</script>


<style scoped>
#webviewer {
    height:100vh;
}
</style>