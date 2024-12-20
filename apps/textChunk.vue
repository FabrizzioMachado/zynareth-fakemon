<template>
    <div class="text-chunk" 
        :class="{ 'withBackgroundImage': textChunkBg[0].imageUrl, 'reverse': reverse  }"
        :style="{
            '--textChunkbg': `url(${textChunkBg[0].imageUrl})`, 
            backgroundColor: '#181818'
        }" 
    >
        <div class="text-chunk-container">
            <div class="text-chunk-content">
                <h2> {{ title }}</h2>
                <p><slot></slot></p>

                <customIconsBar :icons="icons" v-if="icons"/>

            </div>
            <div class="image">
                <img :src="textChunkImage" alt=""  v-if="textChunkImage">
            </div>
        </div>
    </div>
</template>

<script>
    import customIconsBar from './customIconsBar.vue';

    export default {
        name: 'TextChunk',

        components: {
            customIconsBar,
        },

        props: {
            title:{ type: String, required: true },
            icons: { type: Array, required: false },
            textChunkImage: { type: String, required: false },
            textChunkBg: { type: Object, required: true },
            reverse: { type: Boolean , default: false },
        },

        data(){
            return {
                backgroundPositionX: this.textChunkBg[0].backgroundPositionX,
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    .text-chunk {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        color: hsl(214, 30%, 90%);

        &.withBackgroundImage::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--textChunkbg) no-repeat;
            background-position: v-bind(backgroundPositionX) center;
            filter: saturate(2) brightness(0.25) contrast(0.95);
            background-size: cover;
            pointer-events: none; 

            @media screen and (min-width: 1700px) {
                background-position: center -10vh;
            }

            @media screen and (min-width: 1900px) {
                background-position: center -15vh;
            }

            @media screen and (min-width: 2200px) {
                background-position: center -20vh;
            }

            @media screen and (min-width: 2500px) {
                background-position: center -25vh;
            }
        }

        &, & * {
            font-family: "Poppins", serif;
            font-weight: 500;
        }

        .text-chunk-container {
            width: min(90%, 90em);
            height: 100%;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr; 
            text-align: justify;
            padding: clamp(1em, .25em + 7.5vw, 7.5em) clamp(1em, 0.5em + 0.5vw, 5em);
            gap: 1em;

            .text-chunk-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding-left: calc(1.5vw);
                padding-top:  calc(0.25vw);
                z-index: 100;

                h2 {
                    font-size: clamp(1em, 2vw + 1.25em, 3.25em);
                    font-family: #{'Josefin Sans'};
                    font-weight: bold;
                    word-wrap: break-word;
                    margin-bottom: 0.5em;
                }

                p {
                    font-size: clamp(1em, 1vw + 0.45em, calc(1.5em - 0.1vh));
                    z-index: 10;
                    padding: 1em 0;
                }
            }
            
            .image {
                width: 100%;
                object-fit: cover;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-1.5em);
                
                img {
                    width: clamp(10em, 50vw, 100%);
                    border-radius: 8px;
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .text-chunk{
            height: auto !important;

            &.withBackgroundImage::before {
                filter: none !important;
            }
        }
        
        .text-chunk-container .image {
            transform: translateY(0) !important
        }

        .text-chunk-content {
            text-align: left !important;
            align-items: start !important;
            margin-left: 1.5em;

            .text-chunk-custom-icons {
                transform: translateX(-1em);
            }
        }

        .text-chunk.reverse {
            .text-chunk-content {
                order: 2;
                align-items: end !important;
                text-align: right !important;
                padding-left: 0 !important;
                padding-right: calc(1.5vw);

                .text-chunk-custom-icons {
                    transform: translateX(1em);
                }
            }
        }
        .text-chunk.reverse, .text-chunk{
            .text-chunk-container {
                grid-template-columns: 1fr 1fr !important;
            }
        }   
    }
</style>