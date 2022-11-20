<script lang="ts" setup></script>

<template>
  <div class="bg-slate-300 dark:bg-slate-800 dark:text-white h-screen">
    <div class="pt-5 w-100 lg:w-4/5 m-auto flex flex-col items-center">
      <h1>Short</h1>
      <p class="mb-2">
        Welcome! This website is used mostly by myself for shortening links I
        use daily!
      </p>
      <p class="mb-2">
        You can have a look around, here are the availables codes !
      </p>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/vsc">vsc - Visual Studio Code installer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pwned">pwned - Have I been pned?</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mld">mld - DrawSql.app</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rr">rr - Check it out yourself!</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
