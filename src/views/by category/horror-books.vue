<template>
<div class="container-fluid p-0">
    <header>
        <div class="row mx-0">
            <Header :showSearch="showSearch"></Header>
        </div>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#eeeeee" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <main style="background-color: #eeeeee;">
        <!-- genre details -->
        <section>
            <div class="container">
                <div class="row position-relative">
                    <img src="@/assets/img/slider/slider.horror category.jpg" alt="Horror books" class="img-fluid w-100 mb-3" width="100">
                    <!-- <p class="image-text">History Books</p> -->
                    <h3 class="mt-5">Horror Fiction:</h3>
                    <p class="fs-5" align="justify">Horror is a genre of fiction that is intended to disturb, frighten or scare.Horror is often divided into the sub-genres
                        of psychological horror and supernatural horror, which are in the realm of speculative fiction.Literary historian J. A. Cuddon, in 1984, defined 
                        the horror story as "a piece of fiction in prose of variable length... which shocks, or even frightens the reader, or perhaps induces a feeling of repulsion
                        or loathing".Horror intends to create an eerie and frightening atmosphere for the reader. Often the central menace of a work of horror fiction can be interpreted as a metaphor for larger fears of a society.
                    </p>
                </div>
            </div>
        </section>
        <!-- books -->
        <section>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in horrorBooks" :key="book.name">
                        <smallCard :bookData="book"></smallCard>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#eeeeee" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
    <footer>
        <div class="row">
            <Footer></Footer>
        </div>
    </footer>
</div>
</template>

<script>
import Header from "../../components/header.vue"
import smallCard from "../../components/small-card.vue"
import Footer from "../../components/footer.vue"
import { computed } from "vue";
import { allBooks } from "../../stores/counter.js"
const books = allBooks()
export default {
    name : "horrorBooks" ,
    components:{
        Header ,
        smallCard ,
        Footer ,
    },
    setup(){
        const horrorBooks = computed( () => books.horrorBooks )
        const showSearch = true
        return{ horrorBooks , showSearch }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
