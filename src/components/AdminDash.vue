<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fas fa-user'
                },
                {
                    href: '#',
                    title: 'Charts',
                    icon: 'fas fa-chart-area'
                },
            ]
        }
    }
</script>