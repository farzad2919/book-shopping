<template>
    <div class="container-fluid p-0">
        <header>
            <div class="row mx-0">
                <Header></Header>
            </div>
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#eeeeee" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <main>
            <section style="background-color: #eeeeee;">
                <div class="container p-5" style="background-color: white; max-width: 700px;">
                    <div class="row">
                        <div class="col">
                            <h3 class="text-center mt-3">Login</h3>
                            <h5 class="text-center my-5">Enter Login details to get access</h5>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <form action="#" @submit.prevent="checkUser" class="needs-validation" novalidate>
                            <div class="mb-4">
                                <label for="phoneNumber" class="form-label">Phone Number</label>
                                <input type="number" class="form-control p-3" id="phoneNumber" placeholder="Enter your Phone number" v-model.lazy.trim="inputPhoneNumber" required>
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please enter phone number!</div>
                            </div>
                            <div class="mb-5">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control p-3" id="password" placeholder="Enter your Password" v-model.lazy.trim="inputPassword" required>
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please enter password!</div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-8 form-check">
                                    <input class="form-check-input" type="checkbox" value="terms" id="flexCheckIndeterminate" required>
                                    <label class="form-check-label" for="flexCheckIndeterminate">Keep me login</label>
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">You must agree before submitting.</div>
                                </div>
                                <a class="col-4 text-end" style="text-decoration: none;color: red;" href="#">forgot password?</a>
                            </div>
                            <div class="row mt-5">
                                <div class="col d-flex align-items-center">
                                    <p class="align-middle m-0">Don’t have an account? <router-link to="/register1" style="text-decoration: none;color: red;">Sign Up</router-link> here</p>
                                </div>
                                <div class="col text-end">
                                    <button class="btn btn-primary py-sm-2 px-sm-4 py-lg-3 px-lg-5" type="submit" @click="bootstrapValidate">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#eeeeee" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,176C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <footer>
            <div class="row">
                <Footer></Footer>
            </div>
        </footer>
    </div>
</template>
    
<script>
import Header from "../../components/header.vue"
import Footer from "../../components/footer.vue"
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { allUsers } from "../../stores/counter.js"
const allUsersApi = allUsers()
export default {
    name : "login" ,
    components:{
        Header ,
        Footer ,
    },
    setup(){
        const router = useRouter()
        const users = computed( () => allUsersApi.users )
        const isValid = computed( ()=> allUsersApi.isValid)
        const inputPhoneNumber = ref("")
        const inputPassword = ref("")

        function bootstrapValidate() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
            })
        }
        bootstrapValidate()
        async function checkUser() {
            if (inputPhoneNumber.value && inputPassword.value){
                await allUsersApi.validateUser([ inputPhoneNumber.value , inputPassword.value ])
                if (isValid.value) {
                    localStorage.setItem("accessToken", isValid.value.token);
                    router.push("/profile")
                }else{ 
                    Swal.fire({
                    title: "You are not sign up !",
                    text: 'Please sign up first',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                    })
                    router.push("/register1")
                
                }
            }
        }
        return{ router , users , inputPhoneNumber , inputPassword , bootstrapValidate , checkUser , isValid }
    }
}
</script>
    
<style lang="scss" scoped>
.form-control::placeholder{
    opacity: 0.5;
}
button{
    border: 1px solid red;
    color: red;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover{
        color: white;
        background-color: red;
        border: 1px solid red;
    }
}
</style>
