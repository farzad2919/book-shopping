<template>
<div class="container-fluid p-0">
    <header>
        <div class="row">
            <Header :showSearch="showSearch"></Header>
        </div>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#eeeeee" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <main style="background-color: #eeeeee;">
        <!-- slider -->
        <section class="mb-5">
            <defaultSlider :sliderBooks="allBooks.sliderBooks"></defaultSlider>
        </section>
        <!-- best selling books -->
        <section class="mt-5">
            <div class="container py-5">
                <div class="row mt-5">
                    <h3 class="pb-4 text-center">Best selling books</h3>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in allBooks.bestSellingBooks" :key="book.name">
                        <smallCard :bookData="book"></smallCard>
                    </div>
                </div>
            </div>
        </section>
        <!-- best horror books -->
        <section>
            <div class="container py-5">
                <div class="row mt-5">
                    <h3 class="pb-4 text-center">best horror books</h3>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in allBooks.horrorBooks" :key="book.name">
                        <smallCard :bookData="book"></smallCard>
                    </div>
                </div>
            </div>
        </section>
        <!-- Latest published -->
        <section>
            <div class="container py-5">
                <div class="row mt-5">
                    <h3 class="pb-4 text-center">Latest published</h3>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in allBooks.latestPublishedBooks" :key="book.name">
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
import { computed } from "vue";
import Header from "../components/header.vue"
import defaultSlider from "../components/default-slider.vue"
import smallCard from "../components/small-card.vue"
import Footer from "../components/footer.vue"
import { allBooks } from "../stores/counter.js"
const books = allBooks()
export default {
    name : "home" ,
    components:{
        Header ,
        defaultSlider ,
        smallCard ,
        Footer,
    },
    setup(){
        const allBooks = computed( () => books )
        const showSearch = true 
        return{ allBooks , showSearch }
    }
}
</script>

<style lang="scss" scoped>

</style>
