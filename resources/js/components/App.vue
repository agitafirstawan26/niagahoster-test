<template>
    <div >
        <TopNavbar />
        <Navbar />
        <div class="w-100">
           <div class="container-home" >
                <b-row>
                <b-col lg="6" md="6" sm="12" xl="6" >
                <h1 class="bold" >PHP Hosting</h1>
                <h2 class="light-font" >Cepat handal penuh dengan modul PHP yang anda butuhkan</h2>
                <div v-for="(benefit, index) in hostingBenefits" :key="index">
                    <h4 class="light-font list-benefit" ><font-awesome-icon style="color: green" :icon="checkIcon" /> {{benefit}}  </h4>
                </div>
                </b-col>
                <b-col lg="6" md="6" sm="12" xl="6" >
                <img class="banner1" src="../../assets/illustration banner PHP hosting-01.svg" alt="banner1">
                </b-col>
            </b-row>
           </div>
           <div class="line huge-mt" ></div>
           <div class="container-home" >
               <b-row>
                   <b-col cols="12" >
                       <div class="banner2">
                           <b-row>
                               <b-col style="text-align:center" lg="4" md="4" sm="12" xl="4" >
                                   <img class="banner2-logo" src="../../assets/icon PHP Hosting_zendguard.svg" alt="">
                                   <h4 class="light-font mt-2 list-benefit" >PHP Zend Guard Loader</h4>
                               </b-col>
                               <b-col style="text-align:center" lg="4" md="4" sm="12" xl="4">

                                    <img class="banner2-logo" src="../../assets/icon PHP Hosting_composer.svg" alt="">
                                    <h4 class="light-font mt-2 list-benefit" >PHP Composer</h4>
                               </b-col>
                               <b-col style="text-align:center" lg="4" md="4" sm="12" xl="4">
                                          <img class="banner2-logo" src="../../assets/icon PHP Hosting_ioncube.svg" alt="">
                                    <h4 class="light-font mt-2 list-benefit" >PHP ionCube Loader</h4>
                               </b-col>
                           </b-row>
                           <b-row>
                               <b-col cols="12 huge-mt center-text bold" >
                                   <h2 class="bold" >Paket Hosting Singapura yang Tepat </h2>
                                   <h3 class="light-font" >Diskon 40% + Domain dan SSL Gratis untuk Anda</h3>
                               </b-col>
                           </b-row>
                       </div>
                   </b-col>
               </b-row>
               <b-row>
                   <b-col cols="12 huge-mt" >
                       <div class="w-100">
                           <b-row >
                        <b-col class="pricing" md="3" lg="3" xl="3" sm="12" v-for="(price, index) in dataPricing" :key="index">
                           <Pricing :data="price" />
                       </b-col>
                       </b-row>
                       </div>

                   </b-col>
               </b-row>
               <b-row>
                   <b-col cols="12 huge-mt" >
                       <h3 class="center-text">Powerful dengan Limit PHP yang Lebih Besar</h3>
                       <div class="divider mt-3" ></div>
                       <h3 class="mt-3 center-text" >
                           Semua Paket Hosting Sudah Termasuk
                       </h3>
                       <b-row class="pt-4" >
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                               <img class="package" src="../../assets/icon PHP Hosting_PHP Semua Versi.svg" alt="semua_versi">
                               <h5 class="bold" >PHP Semua Versi</h5>
                                <p>Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka anda!</p>
                           </b-col>
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                                <img class="package" src="../../assets/icon PHP Hosting_My SQL.svg" alt="sql">
                               <h5 class="bold" >MySQL Versi 5.6</h5>
                                <p>Nikmati MySQL versi terbaru, tercepat dan kaya kan fitur.</p>

                           </b-col>
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                                <img class="package" src="../../assets/icon PHP Hosting_CPanel.svg" alt="cpanel">

                               <h5 class="bold" >Panel Hosting cPanel</h5>
                               <p>Kelola website dengan panel canggih yang familiar di hati.</p>
                           </b-col>
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                                <img class="package" src="../../assets/icon PHP Hosting_garansi uptime.svg" alt="guaranted">
                                <h5 class="bold">Garansi Uptime 99.9%</h5>
                               <p>Data center mendukung kelangsungan website Anda 24/7</p>
                           </b-col>
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                                                               <img class="package" src="../../assets/icon PHP Hosting_InnoDB.svg" alt="inno_db">
                                  <h5 class="bold" >Database InnoDB Unlimited</h5>
                                                                 <p>Jumlah dan ukuran database yang tumbuh sesuai kebutuhan anda.</p>
                           </b-col>
                           <b-col class="center-text mt-4" lg="4" md="4" sm="12" xl="4" >
                                                                                              <img class="package" src="../../assets/icon PHP Hosting_My SQL remote.svg" alt="remote">
                               <h5 class="bold" >Wildcard Remote MySQL</h5>
                               <p>Mendukung s/d 25 max_user_connections dan 100 max_connections</p>
                           </b-col>
                       </b-row>
                       <div class="divider mt-3" ></div>
                       <h3 class='center-text mt-5' >Mendukung Penuh Framework Laravel</h3>
                   </b-col>
               </b-row>
           </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'
import Pricing from './Pricing'
import {HOSTING_BENEFIT} from '../constant'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {HOSTING_PRICE} from '../constant'
library.add(faCheckCircle)
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            Navbar,
            TopNavbar,
            Pricing
        },
        data () {
            return {
                hostingBenefits: HOSTING_BENEFIT,
                checkIcon: ['fas', 'check-circle'],
                dataPricing: HOSTING_PRICE
            }
        }
    }
</script>

<style >
    span {
        font-size: 12px;
    }
    .bold {
        font-weight: 700 !important;
    }

    .container-home {
            max-width: 1280px;
            margin: auto;
            padding: .5rem 1rem;
            margin-top: 3.5rem;
        }
    .light-font {
        font-weight: 100;
    }
    .banner1 {
        height: 300px;
        width: 100%;
    }
    .line {
        width: 100%;
        height: 1px;
        background: rgb(0, 0, 0, .2);
    }
    .huge-mt {
        margin-top: 7rem;
    }
    .list-benefit {
        font-size: 18px;
        padding-top: 10px;
    }

    .banner2 {
        width: 80%;
        margin: auto;
    }

    .banner2-logo {
        height: 200px;
        width: 70%;
    }

    .center-text {
        text-align: center !important;
    }

    .pricing {
        padding-right: 0px !important;
        margin: 0px;
        padding-left: 0px !important;
    }

    .divider {
        width: 10%;
        height: 7px;
        background-color: #ddd;
        margin: auto;
    }

    img.package {
        height: 100px;
        width: 100px;
    }
</style>
