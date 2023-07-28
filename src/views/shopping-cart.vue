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
            <!-- cart detail -->
            <section>
                <div class="container">
                    <div class="row">
                        <h3>your cart</h3>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center my-1 mb-5" v-for="book in allUsrs.cart" :key="book.name">
                            <shoppingCard :bookData="book"></shoppingCard>
                        </div>
                    </div>
                </div>
            </section>
            <!-- credit detail -->
            <section>
                <div class="container">
                    <div class="row bg-light p-3" style="border-radius: 8px;">
                        <div class="col-8">
                            <p class="fs-4 fs-sm-3">your credit : <span class="fs-4 fs-sm-2"> {{ user.credit }}$ </span> </p>
                            <p class="fs-4 fs-sm-3" >total price : <span class="fs-4 fs-sm-2"> {{ allUsrs.totalPrice }}$ </span> </p>
                        </div>
                        <div class="col-3 col-lg-2">
                            <button type="button" class="btn btn-danger mb-4 py-1 px-3 py-sm-2 px-sm-4">Increase</button>
                            <button type="button" class="btn btn-danger py-1 px-3 py-sm-2 px-sm-4">Buy</button>
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
import { computed , watch } from "vue";
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import shoppingCard from "../components/shopping-card.vue"
import { allUsers } from "../stores/counter.js"
const users = allUsers()
export default {
    name : "shoppingCart" ,
    components:{
        Header ,
        shoppingCard ,
        Footer ,
    },
    setup(){
        const allUsrs = computed( () => users )
        const user = JSON.parse(localStorage.getItem("activeUser"))
        const showSearch = true
        function totalPriceCart() {
            users.getTotalPrice()
        }
        totalPriceCart()
        return{ allUsrs , user , showSearch , totalPriceCart }
    }
}
</script>

<style lang="scss" scoped>

</style>
