<template>
    <div>
        <div class="container p-0 mb-2" >
            <div :class="data.isBestSeller ? styles.bestSeller : null" class="pt-1 pb-1 text-center bb" >
                <h5 class='bold' >{{data.name}} </h5>
            </div>
            <div :class="data.isBestSeller ? styles.bestSeller : null" class="pt-1 pb-1 text-center bb" >
                <p class="discount" > {{data.normalPrice | currency}}  </p>
                <b-row class="w-50 mx-auto" >
                        <p class='mr-1' >Rp.</p> <h2 class='mr-1 bold' > {{handleCurrency(data.realPrice).prefix}}  </h2> <p>{{handleCurrency(data.realPrice).suffix}}/bln</p>
                </b-row>
            </div>
            <div  :class="data.isBestSeller ? styles.bestSeller : null" class="pt-1 pb-1 text-center bb" >
                <p class='mb-0' > <strong>{{data.users}}</strong> Pengguna Terdaftar   </p>
            </div>
            <div class="pt-3 pb-2 text-center" >
                <p  > <strong>{{data.resourcePower || ''}}X </strong> RESOURCE POWER   </p>
                <p  > <strong>{{!data.diskSpace ? 'Unlimited' : `${data.diskSpace}MB`}} </strong> Disk Space   </p>
                <p v-if="data.bandwidth" style='text-transform:capitalize' > <strong style="text-style" >{{data.bandwidth}} </strong> Bandwidth  </p>
                <p v-if="data.popEmail" style='text-transform:capitalize' > <strong style="text-style" >{{data.popEmail}} </strong> POP3 Email  </p>
                <p v-if="data.database" style='text-transform:capitalize' > <strong style="text-style" >{{data.database}} </strong> Database  </p>
                <p v-if="data.domainAddon" style='text-transform:capitalize' > <strong style="text-style" >{{data.domainAddon}} </strong> Addon Domains  </p>
                <p v-if="data.backup" style='text-transform:capitalize' > <strong style="text-style" >{{data.backup}} </strong> Backup {{data.backup === 'magic auto' ? '& Restore' : ''}}  </p>
                <p v-if="data.freeDomain" style='text-transform:capitalize' > <strong style="text-style" >Domain Gratis </strong> Selamanya  </p>
                <p v-if="data.unlimitedSSL" style='text-transform:capitalize' > <strong style="text-style" >unlimited SSL</strong> Selamanya  </p>
                <p v-if="data.privateNameServer" style='text-transform:capitalize' > <strong style="text-style" >Private</strong> Name Server  </p>
                <p v-if="data.spam" style='text-transform:capitalize' > <strong style="text-style" >{{data.spam}}</strong> Protection  </p>
                <Button :title="buyTitle" :buttonStyle="styles.btnOutline" />
            </div>
        </div>
    </div>
</template>


<script>
import {currencyFormat} from '../helper'
import Button from './Button'
export default {
    name: 'PricingTable',
    props: ['data'],
    computed: {

    },
    methods: {
        handleCurrency (value) {
           return currencyFormat(value)
        }
    },
    data () {
        return {
            styles: {
                bestSeller: ['best-seller'],
                btnOutline: ['btn-outline']
            },
            buyTitle: 'Pilih Sekarang'
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
    .container {
        max-width: 400px;
        margin: auto;
        min-height: 200px;
        border: 1px solid rgb(0, 0, 0, .1);
    }
    .bb{
        border-bottom: 1px solid rgb(0, 0, 0, .1);
    }
    .discount {
        text-decoration: line-through;
    }

    .best-seller {
        background-color: #2997ff !important;
        border-bottom: none !important
    }

    .best-seller p {
        color: white !important;
    }

    .best-seller h2 {
        color: white !important;
    }
    .best-seller h5 {
        color: white !important;
    }
    .btn-outline {
        background-color: transparent !important;
        border: 1px solid #333 !important
    }
</style>
