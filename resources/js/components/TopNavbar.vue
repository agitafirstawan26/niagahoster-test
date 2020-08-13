<template>
    <div class="border" >
        <b-row class="nav-height" >
            <b-col cols="4" :class="styles.leftNavbar" >
                <span  >Gratis Ebook cara cerdas menggunakan domain</span>
            </b-col>
            <b-col sm="12" md="8" xl="8" lg="8" :class="styles.rightNavbar"  >
                <a href="#"> <font-awesome-icon :icon="phoneIcon" /> 0274-5305505</a>
                <a href="#"><font-awesome-icon :icon="commentIcon" />Live Chat</a>
                <a href="#"><font-awesome-icon :icon="userIcon" />Member Area</a>
            </b-col>
        </b-row>
    </div>
</template>


<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faUser, faComment } from '@fortawesome/free-solid-svg-icons'
library.add(faPhone, faUser, faComment)
export default {
    name: 'TopNavbar',
    data () {
        return {
            styles: {
                rightNavbar: ['right-navbar'],
                leftNavbar: ['d-md-none', 'd-lg-block', 'd-none']
            },
            phoneIcon: ['fas', 'phone'],
            userIcon: ['fas', 'user'],
            commentIcon: ['fas', 'comment']
        }
    }
}
</script>


<style scoped>
    .container {
        width: 100%;
    }
    .nav-height {
    min-height: 45px !important;
    max-width: 1280px;
    background-color: #fff !important;
    margin: auto;
    padding: 0.3125rem 0px;
    }

    .border {
        border: 1px solid rgb(0,0,0,.4);
    }
    .right-navbar {
        text-align: right;
    }
    .right-navbar a {
        font-size: 12px;
        color: rgb(0, 0, 0,.5);
        margin-left: 10px;
    }

    .right-navbar a svg {
        margin-right: 5px;
    }
</style>
