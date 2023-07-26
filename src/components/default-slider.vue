<template>
    <div class="row slider">
        <div id="carouselExampleCaptions" class="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000"  @click="showWriterBook0(sliderBooks[0])">
                    <img :src="(sliderBooks[0].imageSrc)" class=" w-100" alt="history category">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ sliderBooks[0].title }}</h5>
                        <p>{{ sliderBooks[0].discription }}</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000" @click="showWriterBook1(sliderBooks[1])">
                    <img :src="(sliderBooks[1].imageSrc)" class="w-100" alt="horror category">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ sliderBooks[1].image }}</h5>
                        <p>{{ sliderBooks[1].discription }}</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000" @click="showWriterBook2(sliderBooks[2])">
                    <img :src="sliderBooks[2].imageSrc" class=" w-100" alt="novel category">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ sliderBooks[2].title }}</h5>
                        <p>{{ sliderBooks[2].discription }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name : "defaultSlider" ,
    props :[ "sliderBooks" ],
    setup(){
        const router = useRouter();
        function showWriterBook0 (book){
            router.push(`/${book.title}`)
        }
        function showWriterBook1 (book){
            router.push(`/${book.title}`)
        }
        function showWriterBook2 (book){
            router.push(`/${book.title}`)
        }
        return { router , showWriterBook0 , showWriterBook1 , showWriterBook2 }
    }
}
</script>

<style lang="scss" scoped>
.carousel-inner{
    &:hover{
        cursor: pointer;
    }
}

</style>
