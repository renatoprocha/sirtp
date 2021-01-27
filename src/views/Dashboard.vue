<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fas fa-chart-area',
                      
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fas fa-user'
                    }
                ]
            }
        }
    }
</script>