<template>
  <!-- Page wrapper with overlayed sidebar -->
  <div  class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom" data-sidebar-type="overlayed-all">
    <!-- Sidebar overlay -->
<!--    <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>-->
    <!-- Navbar -->
    <Nav></Nav>
    <!-- Sidebar -->
<!--    <Sidebar></Sidebar>-->

    <!-- Content wrapper -->
    <div class="content-wrapper">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import Nav from "./menu/Nav";
  import Sidebar from "./menu/Sidebar";

  export default {
    name: "app",
    components: {
      Sidebar: Sidebar,
      Nav: Nav
    }
  }
</script>

<style scoped>
  .content-wrapper{
    width: 100%;
    height: 100% !important;
  }
</style>
