<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <form class="d-flex">
          <input class="form-control me-2 form-control-sm small" type="search" placeholder="Tokyo, Seoul..." aria-label="Search">
          <button class="btn btn-sm btn-outline-primary" type="submit">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <form class="d-flex">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
            <label class="form-check-label small" for="flexSwitchCheckChecked">Dark mode</label>
          </div>
        </form>
      </div>
    </div>
  </nav>

  <div class="container py-3 d-flex">
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
</script>