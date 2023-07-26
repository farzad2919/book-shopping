<template>
<div class="header-area px-0" >
    <!-- header top -->
    <div>
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg navbar-light py-4">
                    <div class="container-fluid justify-content-between">
                        <!-- Logo -->
                        <router-link class="navbar-brand fs-4 fs-sm-2 me-0 me-sm-4 order-1 order-lg-1 col-6 col-lg-2" to="/"><i class="text-danger fw-bold">ABC</i> Book</router-link>
                        <!-- search book -->
                        <form action="#" v-show="showSearch" class="w-50 order-3 order-lg-2 mt-4 mt-lg-0 m-auto col-12 col-lg-7">
                            <div class="p-2 bg-light rounded rounded-pill shadow-sm">
                                <form class="input-group">
                                    <input type="search" placeholder="Search book by name" aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model.trim.lazy="searchValue">
                                    <div class="input-group-append" >
                                        <button id="button-addon1" @click.prevent="searchBook" type="submit" class="btn btn-link text-primary" ><i class="bi bi-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </form>
                        <!-- login & cart button -->
                        <div class="row g-lg-5 order-2 order-lg-3 col-6 col-lg-3 ms-max align-items-center" style="flex-basis: content;">
                            <router-link class="col-3 bg-transparent text-dark" to="/shoppingCart" ><i class="bi bi-cart fs-4 fs-sm-2" ></i></router-link>
                            <div class="col-9 d-flex" ><router-link to="/login" class="px-4 py-2 px-sm-5 py-sm-3 bg-danger rounded-pill text-light fw-bold text-decoration-none">Login</router-link></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- header bottom -->
    <div>
        <div class="container">
            <ul class="nav nav-tabs justify-content-center my-3 by-0">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">Categories</a>
                    <ul class="dropdown-menu border-radius-3">
                        <li><router-link class="dropdown-item pb-2" to="/novelBooks">Novel</router-link></li>
                        <li><router-link class="dropdown-item pb-2" to="/horrorBooks">Horror</router-link></li>
                        <li><router-link class="dropdown-item pb-2" to="/historyBooks">History</router-link></li>
                        <li><router-link class="dropdown-item pb-2" to="/scientificBooks">Scientific</router-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/profile">Profile</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import {useRouter} from 'vue-router'
import { ref } from 'vue';
import { allBooks } from '../stores/counter';
const books = allBooks()
export default {
    name : "header" ,
    props:[ "showSearch" ] ,
    setup(){
        const router = useRouter()
        const searchValue = ref("")
        let findedBook = ""
        function searchBook(){
            if(searchValue.value){
                findedBook = books.novelBooks.filter((el)=>el.bookName == searchValue.value)
                if(findedBook == ""){
                    findedBook = books.historyBooks.filter((el)=>el.bookName == searchValue.value)
                    if (findedBook == "") {
                        findedBook = books.horrorBooks.filter((el)=>el.bookName == searchValue.value)
                        if (findedBook == "") {
                            findedBook = books.scientificBook.filter((el)=>el.bookName == searchValue.value)
                        }
                    }
                }
            }else{
            }
            if (findedBook.length == 0){
                Swal.fire({
                    title: "we dont have this book !",
                    text: 'Please make sure for name',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
            }else{
                router.push(`/home/:${findedBook[0].bookName}`)
            }
        }
        return{ router , searchValue , findedBook , searchBook }
    }
}
</script>

<style lang="scss" scoped>
input:focus{
    border-color: none;
    box-shadow: none;
}
input::placeholder{
    font-size: 14px;
    font-weight: bold;
    opacity: 0.5;
}
.collapse{
    display: flex;
}
.nav-link{
    font-size: 18px;
    &:hover{
        color: rgb(161, 9, 9);
    }
}
.nav-tabs{
    border: none;
}
.bi-cart{
    cursor: pointer;
    &:hover{
        color: blue;
    }
}
</style>
