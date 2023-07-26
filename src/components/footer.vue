<template>
<div class="container p-5">
    <div class="row">
        <!-- website details -->
        <div class="col-12 col-sm-6">
            <router-link class="navbar-brand  fs-2 me-4" to="/"><i class="text-danger fw-bold">ABC</i> Book</router-link>
            <p class="fs-5 my-3">Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-instagram fs-3"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-telegram fs-3"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-facebook fs-3"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="bi bi-telephone-fill fs-3"></i></a>
                </li>
            </ul>
        </div>
        <!-- categories -->
        <div class="col-6 col-sm-3 mt-5 mt-sm-0">
            <h4 class="mb-4 text-center">Category</h4>
            <ul class="nav flex-column align-items-center">
                <li class="nav-item"> 
                    <router-link class="nav-link active" to="/novelBooks">Novel</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/horrorBooks">Horror</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/historyBooks">History</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/scientificBooks">Scientific</router-link>
                </li>
            </ul>
        </div>
        <!-- views -->
        <div class="col-6 col-sm-3 mt-5 mt-sm-0 align-items-center">
            <h4 class="mb-4 text-center">Site Map</h4>
            <ul class="nav flex-column align-items-center">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "footer"
}
</script>

<style lang="scss" scoped>
.nav-link{
    font-size: 18px;
    color: black;
    &:hover{
        color: rgb(161, 9, 9);
    }
}
</style>
