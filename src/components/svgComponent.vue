<template>

    <svg
            width="24"
            height="24" viewBox="0 0 24 24"
            version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" v-html="path" >

    </svg>
</template>

<script>
    const icons = {
        'fast-foward': '<svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Media" transform="translate(-104.000000, -66.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(20.000000, 20.000000)"> <path d="M95.684,50.6935295 L91.207,53.8245295 C90.571,54.2535295 90,53.8455295 90,53.1315295 L90,51.1405295 L85.78,53.8245295 C85.145,54.2535295 84,53.8455295 84,53.1315295 L84,46.8685295 C84,46.1545295 85.145,45.7465295 85.78,46.1745295 L90,48.8595295 L90,46.8685295 C90,46.1545295 90.571,45.7465295 91.207,46.1745295 L95.516,49.3065295 C96.03,49.6535295 96.198,50.3465295 95.684,50.6935295" id="next-[#998]"></path> </g> </g> </g> </svg>',
        'fast-backward': '<svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Media" transform="translate(-64.000000, -66.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(20.000000, 20.000000)"> <path d="M55.9990013,46.8681581 L55.9990013,53.1311581 C55.9990013,53.8451581 54.8540013,54.2531581 54.2180013,53.8251581 L49.9990013,51.1401581 L49.9990013,53.1311581 C49.9990013,53.8451581 49.4260013,54.2531581 48.7900013,53.8251581 L44.4790013,50.6931581 C43.9650013,50.3461581 43.7980013,49.6531581 44.3120013,49.3061581 L48.7900013,46.1751581 C49.4260013,45.7461581 49.9990013,46.1541581 49.9990013,46.8681581 L49.9990013,48.8591581 L54.2180013,46.1751581 C54.8540013,45.7461581 55.9990013,46.1541581 55.9990013,46.8681581" id="previous-[#999]"></path> </g> </g> </g> </svg>',
        'play': '<svg width="150px" height="152px" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Media" transform="translate(-25.000000, -64.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(20.000000, 20.000000)"> <path d="M14.074,51.7334959 L8.308,55.6314959 C6.903,56.5814959 5,55.5834959 5,53.8984959 L5,46.1014959 C5,44.4154959 6.903,43.4184959 8.308,44.3684959 L14.074,48.2664959 C15.306,49.0994959 15.306,50.9004959 14.074,51.7334959" id="play-[#1000]"></path> </g> </g> </g> </svg>',
        'pause': '<svg width="6px" height="8px" viewBox="0 0 6 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Media" transform="translate(-187.000000, -26.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(20.000000, 20.000000)"> <path d="M168,6 C167.448,6 167,6.448 167,7 L167,13 C167,13.552 167.448,14 168,14 C168.552,14 169,13.552 169,13 L169,7 C169,6.448 168.552,6 168,6 M173,7 L173,13 C173,13.552 172.552,14 172,14 C171.448,14 171,13.552 171,13 L171,7 C171,6.448 171.448,6 172,6 C172.552,6 173,6.448 173,7" id="pause-[#1006]"></path> </g> </g> </g> </svg>'
    }
    export default {
        name: "svgComponent",
        props: {
            name: String
        },
        computed: {
            path() {
                return icons[this.name];
            }
        }
    }
</script>

<style scoped>

</style>


<svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Media" transform="translate(-104.000000, -66.000000)" fill="#FFFFFF">
            <g id="icons" transform="translate(20.000000, 20.000000)">
                <path d="M95.684,50.6935295 L91.207,53.8245295 C90.571,54.2535295 90,53.8455295 90,53.1315295 L90,51.1405295 L85.78,53.8245295 C85.145,54.2535295 84,53.8455295 84,53.1315295 L84,46.8685295 C84,46.1545295 85.145,45.7465295 85.78,46.1745295 L90,48.8595295 L90,46.8685295 C90,46.1545295 90.571,45.7465295 91.207,46.1745295 L95.516,49.3065295 C96.03,49.6535295 96.198,50.3465295 95.684,50.6935295"
                      id="next-[#998]"></path>
            </g>
        </g>
    </g>
</svg>
