<template>
  <div id="app">
    <!-- Page wrapper with overlayed sidebar -->
    <div  class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" data-sidebar-type="overlayed-all">
      <!-- Sidebar overlay -->
      <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>
      <!-- Navbar -->
      <Nav></Nav>
      <!-- Sidebar -->
      <Sidebar></Sidebar>

      <!-- Content wrapper -->
      <div class="content-wrapper">
        ...
      </div>

    </div>

  </div>
</template>

<script>
  import Nav from "./components/navbar/Nav";
  import Sidebar from "./components/navbar/Sidebar";

  export default {
    name: 'app',
    components: {
      Sidebar: Sidebar,
      Nav: Nav
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>
