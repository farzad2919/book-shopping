<template>
    <div class="container-fluid p-0">
        <header>
            <div class="row mx-0">
                <Header :showSearch="showSearch"></Header>
            </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#d8f3dc" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <main style="background-color: #d8f3dc;">
            <!-- image -->
            <section>
                <div class="container">
                    <div class="row position-relative">
                        <img src="@/assets/img/slider/slider.jpg" alt="Hermann Hesse" class="img-fluid w-100 mb-3" width="100">
                        <!-- <p class="image-text">History Books</p> -->
                    </div>
                </div>
            </section>
            <!-- about website -->
            <section>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col">
                            <h3 class="mt-5">Our Story:</h3>
                            <p class="fs-5" align="justify">
                                Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading
                                at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the 
                                Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it,
                                she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned 
                                lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of
                                spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
                            </p>
                            <h3 class="mt-5">Our Goal:</h3>
                            <p class="fs-5" align="justify">
                                Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading
                                at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the 
                                Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it,
                                she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned 
                                lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of
                                spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#d8f3dc" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
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
    name : "about" ,
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

</style>
