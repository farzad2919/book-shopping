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
                        <img src="../../assets/img/slider/slider.Scientific category.jpg" alt="Novel books" class="img-fluid w-100 mb-3" width="100">
                        <!-- <p class="image-text">History Books</p> -->
                        <h3 class="mt-5">Scientific:</h3>
                        <p class="fs-5" align="justify"> 
                            A science book is a work of nonfiction, usually written by a scientist, researcher, or professor like Stephen Hawking (A Brief History of Time), or sometimes by a non-scientist such as Bill Bryson (A Short History of Nearly Everything)
                            .Usually these books are written for a wide audience presumed to have a general education rather than a specifically scientific training, as opposed to the very narrow audience that a scientific paper would have, and are therefore referred
                            to as popular science. As such, they require considerable talent on the part of the author to sufficiently explain difficult topics to people who are totally new to the subject, and a good blend of storytelling and technical writing. In the UK,
                            the Royal Society Prizes for Science Books are considered to be the most prestigious awards for science writing.[1] In the US, the National Book Awards briefly had a category for science writing in the 1960s, but now they just have the broad categories of fiction and nonfiction.
                        </p>
                    </div>
                </div>
            </section>
            <!-- books -->
            <section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in scientificBook" :key="book.name">
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
    name : "scientuficBooks" ,
    components:{
        Header ,
        smallCard ,
        Footer ,
    },
    setup(){
        const scientificBook = computed( () => books.scientificBook )
        const showSearch = true
        return{ scientificBook , showSearch }
    }
}
</script>
    
<style lang="scss" scoped>

</style>
    