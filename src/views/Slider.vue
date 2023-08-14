<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

let images = ref([
    'https://images.unsplash.com/photo-1691661485699-7e459573cb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1691858019962-303a7094a581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80',
    'https://images.unsplash.com/photo-1691859325266-5f812fcf81ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
    'https://images.unsplash.com/photo-1691512938804-d82fd0d0dd7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
]);

let carousel = null;

onMounted(() => {
    carousel = new Flickity("#slider", {
        autoPlay: 1000,
    });
});

onBeforeUnmount(() => {
    carousel.destroy();
});
</script>

<template>
    <div style="height: 480px;width: 640px;" id="slider">
        <div :style="`background-image:url(${item})`"  style="height: 480px;width: 640px;" v-for="item, index in images" :key="index"></div>
    </div>
</template>

