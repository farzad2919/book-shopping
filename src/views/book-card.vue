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
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="card mb-3 p-5" style="background-color: rgb(255, 22, 22);">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="book[0].bookImage" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8 ">
                                    <div class="card-body ms-5 ps-5 ">
                                        <h3 class="card-title mb-3 fs-bold fs-1">{{ book[0].bookName }}</h3>
                                        <p class="card-text mb-5 fs-bold fs-2">{{ book[0].bookWriter }}</p>
                                        <p class="card-text mb-3 fs-bold fs-3">{{ book[0].bookPrice }}$</p>
                                        <p class="card-text mb-3 fs-5">(120 review)</p>
                                        <p class="mb-5 fs-5 "> 
                                            <router-link class="text-dark router-class" :to="{ path: `/${genre}Books` }" >#{{ genre }} book</router-link>
                                        </p>
                                        <button type="button" @click="addBook" class="btn btn-light rounded-pill my-5 me-4 px-5 py-3 fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal">add</button>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-outline-light dropdown-toggle-split rounded-circle px-4 py-3 fs-6" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-share fs-6"></i></button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item d-flex justify-content-between" href="#">telegram<i class="bi bi-telegram fs-4"></i></a></li>
                                                <li><a class="dropdown-item d-flex justify-content-between" href="#">instagram<i class="bi bi-instagram fs-4"></i></a></li>
                                                <li><a class="dropdown-item d-flex justify-content-between" href="#">phone<i class="bi bi-phone fs-4"></i></a></li>
                                                <li><a class="dropdown-item d-flex justify-content-between" href="#">whats app<i class="bi bi-whatsapp fs-4"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- v-if="hasToken" -->
                    <div  class="modal fade has-login" style="display: none;" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Added successfuly</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">         
                                The book has been added to the cart successfuly
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="pushToShoppingCart" >shopping cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <!-- v-else -->
                    <div  class="modal fade" style="display: none;" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">you are not log in</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">                    
                                please login first
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button @click="pushToLogin" type="button" class="btn btn-primary"  data-bs-dismiss="modal">Login</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <h3>About <i class="fs-bold fs-1">{{ book[0].bookName }}</i> </h3>
                        <p class="my-4 fs-5">{{ book[0].discription }}</p>
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
import Footer from "../components/footer.vue"
import { computed , ref , watch } from "vue";
import { useRouter , useRoute } from "vue-router";
import { allBooks } from "../stores/counter.js"
const books = allBooks()
import { allUsers } from "../stores/counter.js";
const users = allUsers()
export default {
    name : "bookCard" ,
    components:{
        Header ,
        Footer ,
    },
    setup(){
        const showSearch = false 
        const route = useRoute()
        const router = useRouter()
        const book = ref("")
        const genre = ref("")
        const allBooks = computed( () => books )
        const hasToken = computed( ()=> localStorage.getItem("accessToken"))
        const name = ref(route.params.bookName.replace(':',''))
        const Param = ref(route.params.bookName)
        function findBook(){
            book.value = ""
            book.value = allBooks.value.novelBooks.filter((el) => {
                genre.value = "novel"
                return el.bookName == name.value
            })
            if (book.value == "") {
                book.value = allBooks.value.historyBooks.filter((el) => {
                    genre.value = "history"
                    return el.bookName == name.value
                })
                if (book.value == "") {
                    book.value = allBooks.value.horrorBooks.filter((el) => {
                        genre.value = "horror"
                        return el.bookName == name.value
                    })
                    if (book.value == "") {
                        book.value = allBooks.value.scientificBook.filter((el) => {
                            genre.value = "scientific"
                            return el.bookName == name.value
                        })
                    }
                }
            }
        };
        findBook()
        function addBook(){
            document.querySelector(".has-login").style.display="block"
            users.addBookToCart(book.value[0])
            document.querySelector(".has-login").style.display="none"
        }
        function pushToShoppingCart (){
            router.push("/shoppingCart")
        }
        function pushToLogin (){
            router.push("/shoppingCart")
        }
        return{ showSearch , router , findBook , allBooks , book , name , genre , hasToken , addBook , Param , pushToShoppingCart , pushToLogin }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
.btn-light{
    transition: background-color 0.4s linear , box-shadow 0.4s linear;
    &:hover{
        background-color: red;
        color: white;
        box-shadow: 1px 1px 1px white;
    }
}
.btn-outline-light{
    transition: background-color 0.4s linear;
    border: 3px solid white;
}
a{
    &:hover{
        background-color: black;
        color: white;
    }
}
.router-class{
    text-decoration: none;
    &:hover{
        cursor: pointer;
        background-color: red;
    }
}
</style>