<template>
  <!-- Navbar -->
  <nav class="navbar">
    <!-- Navbar content (with toggle sidebar button) -->
    <div class="navbar-content">
      <button class="btn btn-action" onclick="halfmoon.toggleSidebar()" type="button">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <span class="sr-only">Toggle sidebar</span> <!-- sr-only = show only on screen readers -->
      </button>
    </div>
    <!-- Navbar brand -->
    <router-link class="navbar-brand" :to="{ name:  'home'}">{{ title }}</router-link>

    <!-- Navbar text -->
    <span class="navbar-text text-monospace">v1.0</span> <!-- text-monospace = font-family shifted to monospace -->
    <!-- Navbar nav -->
    <ul class="navbar-nav d-none d-md-flex"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name:  'home'}">Home</router-link>
      </li>
    </ul>
    <!-- Navbar form (inline form) -->
    <form class="form-inline d-none d-md-flex ml-auto"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
      <router-link class="nav-link" :to="{ name:  'settings'}">
        <button class="btn btn-action mr-5" type="button" aria-label="Toggle dark mode"> <!--  onclick="halfmoon.toggleDarkMode()"  -->
          <i class="fas fa-cog" aria-hidden="true"></i>
        </button>
      </router-link>

    </form>
    <!-- Navbar content (with the dropdown menu) -->
    <div class="navbar-content d-md-none ml-auto"> <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
      <div class="dropdown with-arrow">
        <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
          Menu
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> <!-- w-200 = width: 20rem (200px) -->
          <router-link class="dropdown-item" :to="{ name:  'home'}">Home</router-link>
          <div class="dropdown-divider"></div>
          <div class="dropdown-content">
            <form >
              <router-link class="nav-link" :to="{ name:  'settings'}">
                <button class="btn btn-action mr-5" type="button" aria-label="Toggle dark mode"> <!--  onclick="halfmoon.toggleDarkMode()"  -->
                  <i class="fas fa-cog" aria-hidden="true"></i>
                </button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    data () {
      return {
        title: 'Dashboard'
      }
    }
  }
</script>
