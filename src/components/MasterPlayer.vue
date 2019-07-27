<template>
    <div id="media">

    </div>
</template>

<script>
     import OpenPlayer from 'openplayerjs';


    export default {
        name: "VideoPlayer",
        props: ['src','height']
        ,
        data() {
            return {
                player: null,
                vst: [],
                format: "video/mp4",
                url: '',

            }
        }
        ,
        async created() {


        }
        ,
        methods: {
            initPlayer(src, vst, old=false) {

                if (old) {
                    let media = document.getElementsByClassName("op-player__media")[0];
                    media.id='opPlayer';

                    media.innerHTML = '<source src="' + src + '" type="' + this.getMimeType(src) + '">';
                    console.log(media)
                    this.player = new OpenPlayer('opPlayer');
                    return this.player.init();
                }
                let opPlayer = document.getElementById('media');
                opPlayer.style.width = '100%';

                opPlayer.style.height = '100%';
                let media = document.createElement("video");
                media.id = 'opPlayer';
                media.setAttribute('playsinline', true);
                media.autoplay = true;
                media.controls = true;
                media.playsinline = true;
                media.height=this.height;
                media.className = 'op-player__media';
                media.innerHTML = '<source src="' + src + '" type="' + this.getMimeType(src) + '">';
                opPlayer.appendChild(media);
                this.player = new OpenPlayer('opPlayer');
                this.player.init();

            }
            ,
            getMimeType(url) {

                if (/\.m3u8/i.test(url)) {
                    return 'application/x-mpegURL';
                } else if (/\.mpd/i.test(url)) {
                    return 'application/dash+xml';
                }

                return ''
                // Let browser figure out if it can play it

            }
        }
        ,

        mounted() {
            this.initPlayer('')

        }
        ,
        watch: {
            src: {
                handler(value) {
                    console.log("new url==> "+ value);
                    if (this.player!=null) {
                        this.player.destroy()
                    }
                    this.initPlayer(value, null, true)

                }
            }
        }
        ,

        beforeDestroy() {
            if (this.player) {
                this.player.destroy()
            }
        }
    }
</script>
