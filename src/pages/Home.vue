  <template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
            <newNote />
        </section>
          <search />
        <notes />
  </div>
</template>

<script>
  import newNote from '@/components/NewNote.vue'
  import notes from '@/components/Notes.vue'
  import search from '@/components/Search.vue'
  export default {
    components: {
      newNote,
      notes,
      search
    }
  }
</script>



