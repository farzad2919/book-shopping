<template>
    <div class="container-fluid p-0">
        <header>
            <div class="row mx-0">
                <Header :showSearch="showSearch"></Header>
            </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#b1a7a6" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <main style="background-color: #b1a7a6;">
            <!-- user detail -->
            <section class="mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-11 col-sm-9 col-lg-7">
                        <div class="card w-100">
                            <div class="card-body p-5">
                                <h5 class="card-title fs-3 fs-sm-2 fs-bold  my-4">{{user.username}}</h5>
                                <p class="card-text fs-6 fs-sm-5 mb-4 text-muted">Name : {{user.name}}</p>
                                <p class="card-text fs-6 fs-sm-5 fs-5 mb-4 text-muted">Phone number : {{user.phoneNumber}}</p>
                                <p class="card-text fs-6 fs-sm-5 mb-3 text-muted">Email adress : {{user.email}}</p>
                                <p class="card-text fs-6 fs-sm-5 mb-3 text-muted">credit : {{user.credit}}$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- suggested books -->
            <section class="pt-5">
                <div class="container">
                    <div class="row">
                        <h3>suggested books for you</h3>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in allBooks.bestSellingBooks" :key="book.name">
                            <smallCard :bookData="book"></smallCard>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#b1a7a6" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <footer>
            <div class="row">
                <Footer></Footer>
            </div>
        </footer>
    </div>
</template>
        
<script>
import Header from "../components/header.vue"
import smallCard from "../components/small-card.vue"
import Footer from "../components/footer.vue"
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allBooks } from "../stores/counter.js"
const books = allBooks()
export default {
    name : "profile" ,
    components:{
        Header ,
        smallCard ,
        Footer ,
    },
    setup(){
        const route = useRoute()
        const allBooks = computed( () => books )
        const user = JSON.parse(localStorage.getItem("activeUser"))
        const showSearch = true
        return{ route , allBooks , user , showSearch }
    }
}
</script>

<style lang="scss" scoped>

</style>
