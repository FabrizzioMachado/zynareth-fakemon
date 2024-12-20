<template>
    <div id ="appDiv">
        <navbar :titleLogo="titleLogo"
                :slots="slots"
                :color="neonGreen"
                navBackgroundColor="#181818"
        /> 

        <hero3D title1="Introducing" 
                titleSpan="Zynareth"
                :buttonAttributes="buttonAttributes"
                :backgroundData="backgroundData"
        />

        <cardTexted title="Zynareth's Taxonomy"
                    :cardImgs="cardImgs"
                    :cardTexts= "cardText"
                    :cardColors="cardColors"
                    reverse="true"
                    :moveCard="true"
                    id="evolutionLine"
                    :hexagonInfo="hexagonInfo"
                    :hexagonAttributes="hexagonAttributes">

            <template v-slot:default>
                Zynareth’s elegant form aligns with other Pokémon celebrated for their mythological resonance.
                Its streamlined physique and vibrant patterns share similarities with 
                <spanny :text="'Zeraora'" :colorImg="[{color: this.yellow, img: '../imgs/Zynareth/zeraora.png'}]"/>
                highlighting its agility and mastery of electric power. The segmented, blade-like wings resemble to 
                <spanny :text="'Zygarde’s Complete Form'" :colorImg="[{color: this.darkGreen, img: '../imgs/Zynareth/zygarde.png'}]"/>
                symbolizing balance. Moreover, Zynareth’s sharp claws and fur are admired by 
                <spanny :text="'Luxrays'" :colorImg="[{color: this.skyBlue, img: '../imgs/Zynareth/Luxray.png'}]"/>, 
                as it embodies a more powerful version of their traits, which represents primal strength and energy control.
                <br><br>
                <spanny :text="'Zynareth doesn’t have an evolution line'" :colorImg="[{color: this.darkGreen}]"/>, 
                just as <spanny :text="'Thundurus'" :colorImg="[{color: this.purple, img: '../imgs/Zynareth/thundurus.png'}]"/> guardian’s companion.
            </template>
        </cardTexted> 

        <!--<hexGrid  :hexagonInfo="hexagonInfo"
        :hexagonAttributes="hexagonAttributes"/> -->

        <textChunk
            title="What is Zynareth?"
            :icons="icons2"
            :textChunkBg="entryTextChunkBg"
            id="pokedexEntry"
        >
            <template v-slot:default>
                Zynareth is a mythical 
                <spanny :text="'Dragon'" :colorImg="[{color: this.blue}]"/>
                /
                <spanny :text="'Electric'" :colorImg="[{color: this.yellow}]"/> 
                that emanates untamed energy from its obsidian body and resemble fractured blades of light. 
                Its sharp accents and white fur glow neon green when hit by electric attacks, entering on overcharged-mode. 
                Moreover, its wingspan grows significantly, allowing it to move at the 
                <spanny :text="'speed of lightnings'" :colorImg="[{color: this.darkGreen}]"/>.
                <br><br>
                Legends speak of Zynareth as a harbinger of cosmic storms, appearing only during celestial anomalies. It stores immense 
                electrical power within its body, which can overcharge entire regions when unleashed. Its
                <spanny :text="'sp. Attacks are fast as light itself'" :colorImg="[{color: this.darkGreen}]"/>.
            </template>
        </textChunk> 
        
        <statsBar
            :statsBarTitle="pokemon.name"
            :stats="pokemon.stats"
            :statsBarImage="pokemon.image"
            :abilities="pokemon.abilities"
            :icons="pokemon.iconTypes"
            :barColor="pokemon.barColor"
            :maxValue="pokemon.maxValue"
            :statsBarBg="pokemon.backgroundImage"
            reverse="true"
        />

        <cards3D :items="slides" 
                titleLogo="Gallery"
                :sidePopUpContent="sidePopUpContent"
                id="gallery"
        />

        <textChunk
            title="Zynareth in Battle!"
            :textChunkBg="competitiveTextChunkBg"
            id="competitive"
        >
            <template v-slot:default>
                Zynareth is a fast special attacker that leverages its Energy Surge ability to enhance Electric-type moves. 
                It excels in battle with
                <spanny :text="'Physhock'" :colorImg="[{color: this.purple}]"/> 
                for bulky foes while having STAB options like 
                <spanny :text="'Dragon Pulse'" :colorImg="[{color: this.blue}]"/> 
                and
                <spanny :text="'Thunderbolt'" :colorImg="[{color: this.yellow}]"/>
                offer strong STAB and coverage options. In doubles, pairing with 
                <spanny :text="'Tapu Koko'" :colorImg="[{color: this.yellow}]"/>, 
                amplifies its power through Electric Terrain.
                <br><br>
                As a lightning guardian, Zynareth's agility poses significant threats, especially with
                <spanny :text="'Calm Mind'" :colorImg="[{color: this.purple}]"/>
                setups. Its overcharge mode, though lasting two turns, boosts its competitive aggressiveness, solidifying it as a force on the battlefield.
            </template>
        </textChunk>

        <simpleFooter :footerColors="simpleFooterContent[0]"
                        :footerIcons="simpleFooterContent[1]"
                        :footerText="simpleFooterContent[2]"/>
    </div>
</template>

<script>
    import navbar from './navbar1.vue';
    import hero3D from './Hero3D.vue';
    import textChunk from './textChunk.vue';
    import cardTexted from './cardTexted.vue';
    import hexGrid from './hexGrid.vue';
    import cards3D from './cardsSHIP.vue';
    import simpleFooter from './simpleFooter.vue';
    import statsBar from './statsBar.vue';
    import spanny from './specialSpan.vue';

    export default {
        name: 'App',

        components: {
            navbar,
            hero3D,
            textChunk,
            cardTexted,
            hexGrid,
            cards3D,
            simpleFooter,
            statsBar,
            spanny
        },

        data() {
            const yellow = "#eeb918";
            const emeraldGreen = "#69bfa3";
            const neonGreen= "#08f26e";
            const darkGreen = "#347854";
            const skyBlue = "#87BEEB";
            const purple = "#602060";
            const blue = "#576fbc";

            return {
                // Repeated colors and images.
                yellow,
                emeraldGreen,
                neonGreen,
                darkGreen,
                skyBlue,
                purple,
                blue,
                //Navbar.
                titleLogo: ["Zynareth", "#"],
                slots: [
                    {text: "Evo. Line", link: "#taxonomy"},
                    {text: "Pokedex Entry", link: "#pokedexEntry"},
                    {text: "Gallery", link: "#gallery"},
                    {text: "Competitive", link: "#competitive"},
                ],

                //Hero.
                backgroundData:{
                    imageUrl: "../imgs/Zynareth/zynareth-hero.png",
                    backgroundPositionX: "40%"
                },
                buttonAttributes: {
                    text: "Get Started",
                    hoverColor: neonGreen,
                    backgroundColor: "#272727",
                    link: "#evolutionLine"
                },

                //Evolution Line.
                cardImgs: [
                    "./imgs/Zynareth/zynareth-taxo.png",
                ],
                cardColors: ["#383838", "#69bfa3"],
                hexagonInfo: [
                    {title: "Zeraora", color: yellow, image: "./imgs/Zynareth/zeraora.png"},
                    {title: "Zygarde", color: darkGreen, image: "./imgs/Zynareth/zygarde.png"},
                    {title: "Luxray", color: skyBlue, image: "./imgs/Zynareth/Luxray.png"},
                    {title: "Thundurus", color: purple, image: "./imgs/Zynareth/thundurus.png"},
                ],
                hexagonAttributes: {
                    width: '12.5em'
                },

                //Entry.
                entryTextChunkBg: [{ imageUrl: "./imgs/Zynareth/zynareth-entry.png", backgroundPositionX: '80%'}],
                
                icons2: [
                    { icon: "./imgs/extraIcons/weight.svg", iconSpan: "280 kg" },
                    { icon: "./imgs/extraIcons/height.svg", iconSpan: "3 m" },
                    { icon: "./imgs/extraIcons/gender.svg", iconSpan: "Genderless" },
                ],

                //Stats.
                pokemon: {
                    name: 'Zynareth',
                    stats: [
                        { name: 'HP', value: 55 },
                        { name: 'Attack', value: 70 },
                        { name: 'Defense', value: 70 },
                        { name: 'Sp. Attack', value: 120 },
                        { name: 'Sp. Defense', value: 70 },
                        { name: 'Speed', value: 175, },
                    ],
                    image: '',
                    abilities: [
                        { name: 'Pressure', description: 'Forces the opponent to use additional PP for each move.' },
                        { name: 'Lightning Rod', description: 'Draws electric movements to the user, nullifying their damage to boost its special attack.' },
                    ],
                    iconTypes: [
                        { icon: "./imgs/Icons/dragon.svg", iconSpan: "Dragon", shadowColor: blue, iconBorderRadius: true },
                        { icon: "./imgs/Icons/electric.svg", iconSpan: "Electric", shadowColor: yellow, iconBorderRadius: true },
                    ],
                    barColor: "linear-gradient(135deg, rgba(100, 223, 0, 1)0%, rgba(45, 120, 45, 1)100%)",
                    maxValue: 255,
                    backgroundImage: [{ imageUrl: './imgs/Zynareth/zynareth-stats.png', backgroundPositionX: '10%'}],
                },

                //Gallery.
                slides: [
                    {src: "./imgs/Zynareth/zynareth-card1.png"},
                    {src: "./imgs/Zynareth/zynareth-card2.png"},
                    {src: "./imgs/Zynareth/zynareth-card3.png"},
                ],
                
                sidePopUpContent : [
                    "While Thundurus is revered for its disruptive power, Zynareth’s refined form represents the mastery of energy and balance, making them rival-companions in mythological stories.",
                    ['./imgs/Icons/electric.svg', 'Thundurus and Zynareth often appear together on myths!'],
                    "70%",
                    '2.5em'
                ],

                //Competitive.
                competitiveTextChunkBg: [{ imageUrl: './imgs/Zynareth/zynareth-competitive.png', backgroundPositionX: '90%'}],

                //Footer.
                simpleFooterContent: [
                    ["#373737", emeraldGreen],
                    [   {icon: "youtube", link: "https://www.youtube.com/@CipherosX/featured"},
                        {icon: "instagram", link: "https://www.instagram.com/cipherosx/"},
                        {icon:"github", link: "https://github.com/FabrizzioMachado"},
                        {icon: "medium", link: "https://medium.com/@fabrizziomachado10"}
                    ],
                    "2024 Zynareth. All rights reserved.",
                ]
            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        overflow-x: hidden;
        overflow-y: scroll; 
        background: #181818;        

    }
    #appDiv{
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        background: #181818;        
    }
</style>
