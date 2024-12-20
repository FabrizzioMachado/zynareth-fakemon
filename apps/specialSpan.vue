<template>
    <span class="specialSpanContainer" 
            @mouseover="showImage"
            @mousemove="moveImage($event)"
            @mouseleave="hideImage"
            :style="{ background: colorImg[0].color }">
        <span class="specialspan"> 
            {{ text }} 
        </span>
        <img ref="hiddenImage" class="specialSpanHiddenImg" 
            v-if="colorImg[0].img"
            :src="colorImg[0].img" style="display: none;">
    </span>
</template>

<script>
    export default {
        name: 'spanny',
        props: {
            text: { type: String, required: true },
            colorImg: { type: Object, default: [{color: 'red'}] },
        },
        methods: {
            showImage() {
                const hiddenImage = this.$refs.hiddenImage;
                hiddenImage.style.display = 'block';
            },
            moveImage(event) {
                // Declarations and Calculations
                const hiddenImage = this.$refs.hiddenImage;
                const container = event.currentTarget;
                const containerWidth = container.offsetWidth; 
                const mouseX = event.clientX - container.getBoundingClientRect().left;   
                
                // Ensure the mouse is within the container
                if (mouseX < 0 || mouseX > containerWidth) {
                    hiddenImage.style.display = 'none';
                    hiddenImage.style.transform = 'translateX(0)';
                    return;
                }

                // Calculate based on the number of words the span has.
                const words = this.text.split(' '); 
                const percentageX = (mouseX / containerWidth) * 100; 
                // Condition to not exceed as on one word it moves too much.
                const movementFactor = words.length === 1 ? 
                                        0.25 : (words.length >= 2 && words.length <= 6 ? 
                                        0.5 * words.length : (0.5 * (words.length - 0.5)));
                // Relative movement
                hiddenImage.style.transform = `translateX(${percentageX * movementFactor}%)`;
            },
            hideImage() {
                const hiddenImage = this.$refs.hiddenImage;
                hiddenImage.style.display = 'none';
                hiddenImage.style.transform = 'translateX(0)';
            }
        }
    }
</script>

<style lang="scss">
    .specialSpanContainer {
        position: relative;
        border-radius: 1em;
        padding-inline: 0.5em;
        
        .specialSpan {
            font-weight: bold;
            font-size: smaller;
        }

        .specialSpanHiddenImg {
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(0) translateY(-50%);
            transition: transform 0.2s ease-out;
            width: 5em;
            z-index: 1000;
        }

        @media screen and (min-width: 768px) {
            display: inline !important; 
            white-space: nowrap !important;
        }
    }
</style>
