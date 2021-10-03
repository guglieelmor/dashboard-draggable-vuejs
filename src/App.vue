<template>
  <!-- Page wrapper with overlayed sidebar -->
  <div class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" data-sidebar-type="overlayed-all" id="app">
    <!-- Sidebar overlay -->
    <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>

    <!-- Navbar -->
    <Nav></Nav>

    <!-- Sidebar -->
    <Sidebar></Sidebar>

    <div class="content-wrapper">
      <router-view />
    </div>

  </div>
</template>

<script>
import Nav from './components/menu/Nav'
import Sidebar from "./components/menu/Sidebar";

export default {
  name: "App",
  components: {
    Nav,
    Sidebar
  }
}
</script>

<style scoped>
.content-wrapper{
  width: 100%;
  height: 100% !important;
}
</style>
