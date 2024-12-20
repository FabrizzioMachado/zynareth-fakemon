<template>
    <div class="statsBar" 
        :style="{ '--backgroundImage': `url(${statsBarBg[0].imageUrl})`}" 
        :class="{ 'withBackgroundImage': statsBarBg[0].imageUrl || 'black', 'reverse': reverse  }">
        <div class="statsBarContainer">
            <div class="skill" :style="{ background: complementaryColor }">
                <h1>{{ statsBarTitle }}</h1>
                <li v-for="(stat, index) in stats" :key="index">
                    <h3>{{ stat.name }}</h3>
                    <span class="bar">
                        <span class="barContainer" :style="{ width: `${(stat.value / maxValue) * 100}%` }">
                            <span class="barLoad" :style="{ background: barColor }">
                                <span class="barStat">{{ stat.value }}</span>
                            </span>
                        </span>
                    </span>
                </li>
            </div>

            <div class="skillImg">
                <img :src="statsBarImage" alt="">
                <div class="extraData">
                    <div class="abilities">
                        <h1> abilities </h1>
                        <li v-for="(ability, index) in abilities" :key="index">
                            {{ ability.name }}
                            <tooltip :toolTipTitle="ability.name" :toolTipDescription="ability.description"/>
                        </li>
                    </div>
                    <customIconsBar :icons="icons" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import customIconsBar from './customIconsBar.vue';
    import tooltip from './tooltip.vue';
    export default {
        name: 'statsBar',

        components: {
            customIconsBar,
            tooltip
        },

        props: {
            statsBarTitle: String,
            stats: Array,
            statsBarImage: String,
            abilities: Array,
            icons: Array,
            maxValue: { 
                type: Number,
                default: 100 
            },
            barColor: String,
            statsBarBg: { type: Object, required: false } ,
            reverse: { type: Boolean , default: false },
        },
        computed: {
            complementaryColor() {
                // Assuming `backgroundImage` is a valid CSS color (e.g., '#ff0000', 'rgb(255,0,0)')
                const color = this.backgroundImage || '#ff0000'; 
                const hexToRgb = (hex) =>
                    hex.replace('#', '').match(/.{2}/g).map((x) => parseInt(x, 16));
                const rgbToHex = (r, g, b) =>
                    `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
                const [r, g, b] = hexToRgb(color);
                const complement = [100 - r, 100 - g, 100 - b];
                return rgbToHex(...complement);
            },
        },
        data(){
            return {
                backgroundPositionX: this.statsBarBg[0].backgroundPositionX,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
    $font-family: "Josefin Sans";

    @keyframes load {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }

    .statsBar{
        width: 100%;
        position: relative;
        padding: 2em 0;
        
        &.withBackgroundImage::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--backgroundImage) no-repeat;
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
    }

    .statsBarContainer{
        color: white;
        width: min(90%, 90em) !important;
        min-height: 750px !important;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        justify-content: center;
        align-items: center;  
        margin: auto;
        gap: 2em;
        font-family: $font-family;

        li {
            list-style-type: none; 
        }
        
        .skill{
            width: 100%;
            text-align: center;
            overflow: hidden;
            position: relative;
            margin: auto;
            color: #fff;
            padding: 2em 1em;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

            li {
                margin: 20px 0 ;
                padding: 10px;
            }

            .bar {
                background: #353b48;
                display: block;
                height: 20px;
                margin-top: 0.25em;
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 1em;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                transition: width 0.3s ease-in-out;
                position: relative;

                &:hover {
                    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
                }

                span{
                    height: 20px;
                    float: left;
                    .barLoad{
                        width: 100%;
                        animation: load 3s;

                        .barStat{
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            margin-top: 0.1em;
                        }
                    }
                }
            }
        }

        .skillImg{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 
            position: relative;

            img{
                width: clamp(15em, 25em + 15vw, 85%);
            }

            .extraData{
                width: 90%;
                display: flex;
                bottom: 0;
                position: relative;

                .abilities{
                    width: 100%;
                    background: #272727;
                    border-radius: 1em;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: left;
                    padding: 1.5em 0;

                    h1{
                        font-size: clamp(1em, 1.5em + 1vw, 2em);
                        margin-bottom: 0.25em;
                    }

                    li{
                        display: flex;
                        gap: 0.5em;
                        padding: 0.1em; 
                        align-items: center;
                        text-align: center;
                        max-width: 20%;
                        justify-content: center;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 763px) {
        .statsBar{   
            &.withBackgroundImage::before {
                filter: none !important;
            }
            &.reverse{
                .statsBarContainer .skill{
                    order: 2;
                }
            }
        }
        .statsBarContainer{
            height: auto !important;
            .skillImg .extraData{
                position: absolute !important;
                bottom: 8% !important;

                .tooltip .popToolTip{
                    top: 0 !important;
                    height: 100% !important;
                }

                .extraData{
                    width: 100% !important;

                    .abilities{
                        li{
                            max-width: 100% !important
                        }
                    }
                }
            }
        }
    }
</style>
