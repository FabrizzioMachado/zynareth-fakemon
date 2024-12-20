<template>
    <div class="hexGridListContainer" :style="{ '--size': hexagonAttributes.width, '--translation': `calc(${hexagonAttributes.width} / 4 * -1)`}">
        <ul class="hexGridList">
            <li class="hexGridCell" v-for="(info, index) in hexagonInfo" :key="index">
                <div class="hexGridImgageContainer" :style="{ background: info.color }">
                    <img class="hexGridImage" :src="info.image">
                </div>
                <span class="hexGridTitle"> {{ info.title }} </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hexGrid',
        props: {
            hexagonInfo: { type: Object, required: true },
            hexagonAttributes: { type: Object, required: true }
        }
    }
</script>

<style lang="scss" scoped>
    .hexGridListContainer{
        width: 100%;
        margin: auto;
        
        .hexGridList{
            max-width: 450px;
            display: grid;
            list-style: none;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            margin: auto;
            padding: 1.5em;

            *{
                transition: all 0.25s ease-in-out;
            }

            .hexGridCell {
                width: var(--size); /* Adjust size for compact layout */
                aspect-ratio: 1.15/1;
                position: relative;
                text-align: center;
                margin: auto;
                z-index: 1;
                clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.1);
                border: 10px solid transparent;
                filter: grayscale(1);

                .hexGridImgageContainer{
                    width: 100%;
                    height: 100%;
                    clip-path: inherit;

                    .hexGridImage{
                        width: 100%;
                        transform: scale(1.5);
                        position: absolute;
                        top: 25%;
                        left: 25%;
                    }
                }

                .hexGridTitle{
                    width: 100%;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;
                    -webkit-box-pack: center;
                    justify-content: center;
                    hyphens: auto;
                    word-break: break-word;
                    text-transform: uppercase;
                    color: #fff;
                    font-size: 1.5em;
                    z-index: 10;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: 0.1s ease-in-out;
                }

                &::before, &::after{
                    content: '';
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }

                &::before{
                    background: white;
                    transform: scale(1.05)
                }
                
                &::after{
                    background: black;
                    opacity: 0.75;
                }

                &:hover{
                    filter: grayscale(0) !important;

                    &::before, &::after{
                        z-index: -1;
                    }

                    .hexGridTitle{
                        opacity: 0;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 786.40px) {
        .hexGridList{
            grid-template-columns: repeat(2, 1fr);
        }
        .hexGridCell:nth-child(odd) {
            transform: translateY(-20%);
            margin-block: 0.25em
        }

        .hexGridCell:nth-child(even) {
            transform: translate(clamp(var(--translation), var(--translation) + 0.1vw, -5em) , 30%);
        }
    }

    /*@media screen and (min-width: 1500px) {
        .hexGridList{
            grid-template-columns: repeat(3, 1fr);
        }
    }*/
</style>