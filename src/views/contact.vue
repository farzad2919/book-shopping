<template>
    <div class="container-fluid p-0">
        <header>
            <div class="row mx-0">
                <Header :showSearch="showSearch"></Header>
            </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#caf0f8" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <main style="background-color: #caf0f8;">
            <!-- image -->
            <section>
                <div class="container">
                    <div class="row position-relative">
                        <img src="@/assets/img/slider/slider2.jpg" alt="contact us" class="img-fluid w-100 mb-3" width="100">
                        <!-- <p class="image-text">History Books</p> -->
                    </div>
                </div>
            </section>
            <!-- form -->
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-8 mt-5">
                            <h3>Get In Touch</h3>
                            <div class="my-4">
                                <textarea class="form-control p-3" id="exampleFormControlTextarea1" placeholder="Enter massage" rows="8"></textarea>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-3">
                                        <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter your Email address">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter your name">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 my-3">
                                <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter Subject">
                            </div>
                            <button type="button" class="button py-2 px-4 py-sm-2 px-sm-4">Send</button>
                        </div>
                        <div class="col-12 col-sm-4 mt-5 pt-5 justify-content-sm-center">
                            <div class="row mb-5 mx-auto">
                                <div class="col-2" style="width: fit-content;">
                                    <i class="bi bi-house fs-2 d-inline" style="width: fit-content;"></i>
                                </div>
                                <div class="col-10">
                                    <h5 class="fs-6 fs-sm-4">Buttonwood, California.</h5>
                                    <p class="fs-6 fs-sm-4">Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div class="row mb-5 mx-auto">
                                <div class="col-2" style="width: fit-content;">
                                    <i class="bi bi-phone fs-2"></i>
                                </div>
                                <div class="col-10">
                                    <h5 class="fs-6 fs-sm-4">+1 253 565 2365</h5>
                                    <p class="fs-6 fs-sm-4">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div class="row mx-auto">
                                <div class="col-2" style="width: fit-content;">
                                    <i class="bi bi-envelope fs-2"></i>
                                </div>
                                <div class="col-10">    
                                    <h5 class="fs-6 fs-sm-4">support@abcbooks.com</h5>
                                    <p class="fs-6 fs-sm-4">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#caf0f8" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
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
export default {
    name : "contact" ,
    components:{
        Header ,
        Footer ,
    },
    setup(){
        const showSearch = true 
        return{ showSearch }
    }
}
</script>
    
<style lang="scss" scoped>
.form-control::placeholder{
    opacity: 0.5;
    font-size: 12px;
}
.button{
    border: 1px solid red;
    background-color: transparent;
    border-radius: 3px;
    color: red;
    transition: all 0.5s;
    &:hover{
        color: white;
        background-color: red;
    }
}
</style>
