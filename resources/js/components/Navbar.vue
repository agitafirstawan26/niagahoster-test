<template>
    <div :class='styles.navbarContainer' >
  <b-navbar class="nav-height mx-auto nav-container" toggleable="sm" type="light" variant="light">
    <b-navbar-brand class="d-md-none d-lg-block" href="#">Niagahoster</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
          <a href="#">Hosting</a>
          <a href="#">Domain</a>
          <a href="#">Server</a>
          <a href="#">Website</a>
          <a href="#">Afiliasi</a>
          <a href="#">Promo</a>
          <a href="#">Pembayaran</a>
          <a href="#">Review</a>
          <a href="#">Kontak</a>
          <a href="#">Blog</a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>
export default {
    name: 'Navbar',
    data () {
        return {
            styles: {
                navbarContainer: ['navbar-container']
            }
        }
    }
}
</script>

<style scoped>
.nav-height {
    min-height: 90px !important;
    max-width: 1280px;
    background-color: #fff !important;
  }
  .navbar-container {
      background-color: #fff !important;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .ml-auto a {
      font-size: 16px;
      color: #333;
      padding: 10px;
  }

  @media only screen and (max-width: 800px) {
  .ml-auto a {
      font-size: 14px;
      color: #333;
      padding: 10px;
  }
  }
</style>
