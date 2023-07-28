<template>
<div class="container">
  <div class="row">
    <div class="card mb-3 p-3" >
      <div class="row g-0" style="min-height: 250px;">
        <!-- book image -->
        <div class="col-md-4" @click="showBook(bookData)" style="cursor: pointer;">
          <img :src="bookData.bookImage" class="img-fluid rounded-start" alt="...">
        </div>
        <!-- book details -->
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ bookData.bookName }}</h5>
            <p class="card-text">{{ bookData.bookWriter }}</p>
            <p class="card-text">{{ bookData.bookPrice }}$</p>
            <div class="row">
              <div class="col-8 d-flex">
                <p class="card-text align-self-center">amount : {{ bookData.quantity }}</p>
              </div>
              <div class="col-4 d-flex flex-column">
                <i class="bi bi-caret-up-fill" style="cursor: pointer;" @click="increaseQuantity(bookData)"></i>
                <i class="bi bi-caret-down-fill" style="cursor: pointer;" @click="decreaseQuantity(bookData)"></i>
              </div>
            </div>
            <button type="button" class="btn btn-outline-light dropdown-toggle-split rounded-circle text-danger mt-3" @click="removeBook(bookData)" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-trash fs-6"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
    
<script>
import { useRouter } from "vue-router";
import { allUsers } from "../stores/counter.js";
const users = allUsers()
export default {
    name : "shoppingCard" ,
    props:[
        "bookData"
    ],
    setup(){
        const router = useRouter();
        const localStorageCart = JSON.parse(localStorage.getItem("cart"))
        
        function showBook(bookData){
            router.push(`/home/:${bookData.bookName}`)
        }
        function increaseQuantity(bookData) {
          users.addBookToCart(bookData)
        }
        function decreaseQuantity(bookData) {
          users.decreaseBookFromCart(bookData)
        }
        function removeBook(bookData) {
          bookData.quantity = 0
          users.removeBookFromCart(bookData)
        }
        return { router , showBook , increaseQuantity , decreaseQuantity , localStorageCart , removeBook }
    }
}
</script>

<style lang="scss" scoped>
.btn-outline-light{
    transition: background-color 0.4s linear;
    border: 1px solid red;
}
h5{
    font-size: 16px;
}
p{
    font-size: 14px;
}
i{
    font-size: 12px;
}
</style>
