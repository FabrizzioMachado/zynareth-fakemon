<template>
    <div class="tooltip" @mouseover="activateTooltip">
        <div class="tooltip-circle" >
            <span class="tooltip-text">?</span>
        </div>
        <transition name="fade" @before-leave="beforeLeave">
            <div class="tooltip-expanded" v-if="isHovered">
                <span class="tooltip-close" @click="isHovered = false"> ✖ </span>
                <h2>{{ toolTipTitle }}</h2>
                <p>{{ toolTipDescription }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "tooltip",
        props: {
            toolTipTitle: {
                type: String,
                required: true,
            },
            toolTipDescription: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                isHovered: false,
            };
        },
        methods: {
            activateTooltip() {
                this.isHovered = true;
            },
            beforeLeave(el) {
                el.style.opacity = 0;  // Ensuring opacity is 0 before leaving
            }
        }
    };
</script>
    
<style scoped lang="scss">
    $bgColor: #333;
    $textColor: #fff;
    .tooltip {
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }
    
    .tooltip-circle {
        width: 2.5em;
        height: 2.5em; 
        border-radius: 50%;
        background-color: var(--bgColor, #333);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--textColor, #fff);
        font-size: 14px;
        transition: all 0.3s ease;    
    }
    
    .tooltip-text {
        pointer-events: none;
    }
    
    .tooltip-expanded {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        padding: 1em;
        background-color: var(--bgColor, #333);
        color: var(--textColor, #fff);
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
        animation: fadeIn 0.3s ease;
        transition: all 0.3s ease;
        transform-origin: left;

        .tooltip-close {
            position: absolute;
            top: 1em;
            right: 2.5%;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scaleX(0);
        }
        to {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    .tooltip-expanded.fade-enter-active,
    .tooltip-expanded.fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .tooltip-expanded.fade-enter, 
    .tooltip-expanded.fade-leave-to {
        opacity: 0;
        transform: scaleX(0);
    }
</style>  