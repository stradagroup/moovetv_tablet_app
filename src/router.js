import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing/Landing';
import Login from './views/Login/Login';
import HomePage from './views/HomePage/Homepage';
import Category from './views/Category/Category';
import Channels from './views/Channels/Channels';
import Movies from './views/Channels/Movies/Movies';
import MoviePlayer from './views/Channels/Movies/MoviePlayer';
import Ebooks from './views/Channels/Ebooks/Ebooks';
import Music from './views/Channels/Music/Music';
import MusicPlayer from './views/Channels/Music/MusicPlayer';
import Genres from './views/Channels/Music/Genres';
import Songs from './views/Channels/Music/Songs';
import Radio from './views/Channels/Radio/Radio';
import RadioPlayer from './views/Channels/Radio/RadioPlayer';
import Games from './views/Channels/Games/Games';
import LiveTv from './views/LiveTv/LiveTv';
import Store from './store/store'
import EbookReader from "./views/Channels/Ebooks/EbookReader";
import LiveScore from "./views/Livescore/LiveScore";
import SingleFixture from './components/Fixtures/SingleFixture.vue'
import Lineups from './components/Fixtures/Stats/Lineups.vue'
import Stats from './components/Fixtures/Stats/Stats.vue'
import Goalscorers from './components/Fixtures/Stats/Goalscorers.vue'
import ListSource from "./views/News/ListSource";
import newsReader from "./views/News/newsReader";
import newsDetail from "./views/News/newsDetail";

// for moove-mart

import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import VendorDeals from "./components/VendorDeals";
import VendorLeads from "./components/VendorLeads";
import VendorAddDeal from "./components/VendorAddDeal";
import Subscription from "./components/Subscription";
import VendorSubscriptions from "./components/VendorSubscriptions";


Vue.use(Router);

const router = new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
    routes: [

        {
            path: '/landing',
            name: 'landing',
            component: Landing,
            meta: {
                title: "Landing",

            }
        },

        {
            path: '/',
            name: 'login',
            component: Login,
            meta: {
                title: "Login",
                public: true,  // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },

        {
            path: '/home',
            name: 'homepage',
            component: HomePage,

        },

        {
            path: '/category',
            name: 'category',
            component: Category,

        },

        {
            path: '/channels/:channelID',
            name: 'channels',
            component: Channels,
            props: true,
            meta: {
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/movies',
            name: 'movies',
            component: Movies,
            meta: {
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/movies/:uuid',
            name: 'moviePlayer',
            component: MoviePlayer,
            props: true,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },
        {
            path: '/music/:uuid',
            name: 'musicPlayer',
            component: MusicPlayer,
            props: true,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },
        {
            path: '/read/:uuid',
            name: 'ebookReader',
            component: EbookReader,
            props: true,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },
        {
            path: '/ebooks',
            name: 'ebooks',
            component: Ebooks,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/music',
            name: 'music',
            component: Music,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/music/player',
            name: 'Music Player',
            component: MusicPlayer,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/music/genres',
            name: 'Genres',
            component: Genres,
            meta: {

            }
        },

        {
            path: '/music/songs',
            name: 'Songs',
            component: Songs,
            meta: {

            }
        },

        {
            path: '/radio',
            name: 'radio',
            component: Radio,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/radio/player',
            name: 'Radio Player',
            component: RadioPlayer,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/games',
            name: 'Games',
            component: Games,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/livetv',
            name: 'LiveTv',
            component: LiveTv,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },
        {
            path: '/livescore',
            name: 'LiveScore',
            component: LiveScore,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },
        {
            path: '/singleFixture',
            component: SingleFixture,
            children: [
                {
                    path: '',
                    component: Lineups,
                    name: 'singleFixture'
                },
                {
                    path: 'stats',
                    component: Stats,
                    name: 'stats'
                },
                {
                    path: 'goalscorers',
                    component: Goalscorers,
                    name: 'goalscorers'
                }
            ]
        },
        {
            path: '/news',
            name: 'News Feed',
            component: ListSource,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            },

        },
        {
            path: '/news/reader',
            component: newsReader,
             props:true,
            name: 'newsReader',
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            },
        },
        {
            path: '/news/details',
            component: newsDetail,
             props:true,
            name: 'newsDetail',
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            },
        },

        {
            path: "/mart",
            name: "mart",
            meta: { layout: "user" },
            component: Welcome
        },

        {
            path: "/dashboard",
            name: "dashboard",
            meta: { layout: "vendor" },
            component: Dashboard
        },
        {
            path: "/dashboard/leads",
            name: "vendor-leads",
            meta: { layout: "vendor" },
            component: VendorLeads
        },
        {
            path: "/dashboard/deals",
            name: "vendor-deals",
            meta: { layout: "vendor" },
            component: VendorDeals
        },
        {
            path: "/dashboard/deals/add",
            name: "vendor-deals-create",
            meta: { layout: "vendor" },
            component: VendorAddDeal
        },
        {
            path: "/dashboard/subscription",
            name: "vendor-subscription",
            meta: { layout: "vendor" },
            component: Subscription
        },
        {
            path: "/dashboard/subscription/history",
            name: "vendor-subscription-history",
            meta: { layout: "vendor" },
            component: VendorSubscriptions
        }


    ]
});


router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
    const loggedIn = Store.getters.IS_AUTHENTICATED;

    if (!isPublic && !loggedIn) {
        return next({
            name: '',
        });
    }

    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next({name: 'landing'});
    }

    next();
});

export default router;
