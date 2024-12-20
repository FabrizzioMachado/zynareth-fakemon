<template>
    <div class="text-chunk-custom-icons">
        <div v-for="(icon, iconIndex) in  icons" :key="iconIndex" 
                class="text-chunk-custom-icon" 
                :class="`text-chunk-custom-icon-${iconIndex + 1}`"
                :style="{ '--shadowColor': icon.shadowColor || 'transparent' }">
            <img :style="{ 'border-radius': icon.iconBorderRadius ? '50%' : '0' }" :src="icon.icon" :alt="icon.iconSpan">
            <span> {{ icon.iconSpan }} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customIconsBar',
        props: {
            icons: {
                type: Array,
                required: true,
            },
        },
    };
</script>

<style scoped lang="scss">
    .text-chunk-custom-icons {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;

        .text-chunk-custom-icon{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            gap: 0.5em;
            
            img {
                width: clamp(2em, 2.5vw + 2em, 5em);
                position: relative;
                object-fit: contain;
                background: transparent;
                box-shadow: 0 0 2.5em 0.25em var(--shadowColor); 
            }
            
        }
    }

    @media screen and (min-width: 768px) {
        .text-chunk-custom-icons {
            flex-direction: row;
        }
    }
</style>  