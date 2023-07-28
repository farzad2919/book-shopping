<template>
    <div class="container-fluid p-0">
        <header>
            <div class="row mx-0">
                <Header :showSearch="showSearch"></Header>
            </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a9d398" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <main style="background-color: #a9d398;">
            <!-- genre details -->
            <section>
                <div class="container">
                    <div class="row position-relative">
                        <img src="../../assets/img/slider/slider.novel category 1.jpg" alt="Novel books" class="img-fluid w-100 mb-3" width="100">
                        <!-- <p class="image-text">History Books</p> -->
                        <h3 class="mt-5">Novel:</h3>
                        <p class="fs-5" align="justify"> A novel is a relatively long work of narrative fiction, typically written in prose and published as a book. The English word to describe such a work derives from the Italian: novella for "new", "news",
                            or "short story of something new", itself from the Latin: novella, a singular noun use of the neuter plural of novellus, diminutive of novus, meaning "new". According to Margaret Doody, the novel has "a continuous and comprehensive
                            history of about two thousand years", with its origins in the Ancient Greek and Roman novel, in Chivalric romance, and in the tradition of the Italian Renaissance novella. The ancient romance form was revived by Romanticism, in the historical
                            romances of Walter Scott and the Gothic novel.
                        </p>
                    </div>
                </div>
            </section>
            <!-- books -->
            <section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in novelBooks" :key="book.name">
                            <smallCard :bookData="book"></smallCard>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a9d398" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
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
        name : "novelBooks" ,
        components:{
            Header ,
            smallCard ,
            Footer ,
        },
        setup(){
            const novelBooks = computed( () => books.novelBooks )
            const showSearch = true
            return{ novelBooks , showSearch }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    
    </style>
    