<template>
    <div class="">
        <perfect-scrollbar ref="pdfContainer" @contextmenu.prevent="">
            <pdf :page=page
                 :scale="scale"
                 :src=pdfSource
                 :text=true
                 @loading="loadingState"
                 @numpages="numPages = $event"
                 style="position: relative !important; height: 90vh">
                <template slot="loading">
                    <Loader :showFull=false loading-text="Loading"></Loader>
                </template>
            </pdf>
        </perfect-scrollbar>
        <footer class="mt-auto py-3" style="padding-right: 0; padding-left: 0">
            <div class="row" v-if="numPages > 0">
                <div class="col-3 float-left">
                    <button :disabled="numPages === 0" @click.prevent="previousPage"
                            class="btn btn-primary float-left">Previous Page
                    </button>
                </div>
                <div class="col-6">
                    <div class="row col-auto">
                        <div class="col-4"></div>
                        <div class="form-group col-4">
                            <input :max="numPages" :min="1" class="form-control"
                                   type="number"
                                   v-model="currentPage">
                        </div>
                        <div class="col-4">
                            <label class="text-info"> of {{numPages}}</label>
                        </div>
                    </div>
                    <!--                        {{page}} of {{numPages}}-->
                </div>
                <div class="col-3 float-right">
                    <button :disabled="numPages === 0" @click.prevent="nextPage" class="btn btn-info">Next Page
                    </button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import pdfVuer from 'pdfvuer';
    import {PerfectScrollbar} from 'vue2-perfect-scrollbar'
    import Loader from "./Loader/Loader";

    export default {
        name: "ReaderComponent",
        components: {
            pdf: pdfVuer,
            PerfectScrollbar,
            Loader
        },
        props: {
            pdfSource: String
        },
        data() {
            return {
                page: 1,
                currentPage: 1,
                numPages: 0,
                pdfData: undefined,
                errors: [],
                scale: 'page-width'
            }
        },
        methods: {
            toTop() {
                this.$nextTick(() => {
                    this.$refs.pdfContainer.$el.scrollTop = 0;
                    this.$refs.pdfContainer.update();
                });
            },
            nextPage() {
                if (this.numPages === 0 || this.numPages === this.page) return;
                this.page += 1;
                this.toTop();
            },
            previousPage() {
                if (this.numPages === 0 || this.page === 1) return;
                this.page -= 1;
                this.toTop();
            },
            loadingState(ev) {
                if (ev)
                    this.$emit('loaded');
            }
        },
        watch: {
            page: {
                handler(newPage, previous) {
                    this.currentPage = newPage;
                    this.$emit('pageChanged', {
                        toPage: newPage,
                        fromPage: previous
                    })
                }
            },
            currentPage: {
                handler(page) {
                    let newPage = Number(page);
                    this.page = (newPage > this.numPages) ? this.numPages : newPage;
                }
            }
        },

        beforeDestroy() {
            if (this.pdfData) {
                this.pdfData.destroy()
            }
        }
    }
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style scoped>
</style>