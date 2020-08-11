<template>
<div class="wrapper-content">
    <section>
        <div class="container">
            <noteItem v-for="note in noteList" :key = "note.title"
            :note="note"/>
        </div>
    </section>
</div>
</template>

<script>
import noteItem from '@/components/NoteItem.vue'

export default {
    components: {
        noteItem
    },
    data () {
        return {
            noteList: null
        }
    },

    created () {
        this.noteList = this.$store.getters.getNoteList
        console.log(this.noteList)
    }
}

</script>