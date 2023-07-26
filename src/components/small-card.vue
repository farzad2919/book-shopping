<template>
<div class="container" style="cursor: pointer;" @click="showBook(bookData)">
    <div class="row justify-content-center">
        <div class="card p-0" style="width: 18rem ; min-height: 650px">
            <img :src="bookData.bookImage" class="card-img-top w-100">
            <div class="card-body pb-3">
                <h5 class="card-title pb-0 fw-bold">{{ bookData.bookName }}</h5>
            </div>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item">{{ bookData.bookWriter }}</li>
                <li class="list-group-item fw-bold text-danger">{{ bookData.bookPrice }}$</li>
                <li class="list-group-item "><i>(120 review)</i></li>
            </ul>
        </div>
    </div>
</div>
</template>
    
<script>
import { useRouter } from "vue-router";
export default {
    name : "smallCard" ,
    props:[
        "bookData"
    ],
    setup(){
        const router = useRouter();
        function showBook(bookData){
            router.push(`/home/:${bookData.bookName}`)
        }
        return { router , showBook }
    }
}
</script>

<style lang="scss" scoped>
h5{
    font-size: 16px;
}
p{
    font-size: 14px;
}
i{
    font-size: 12px;
}
.list-group-item{
    border : none;
}
.list-group{
    border: none;
}
</style>
