<template>
  <div>
    <h3>Edit the User {{ $route.params.id }}</h3>
    <p>
      Local: {{ $route.query.locale }} & Analytics: {{ $route.query.analytics }}
    </p>
    <div style="height: 700px"></div>
    <p>Some Data</p>
  </div>
</template>
