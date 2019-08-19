<template>
  <div>

    <br />
    <div id="dashboard" :class="collapsed">
      <div class="dashboard">
        <sidebar-menu :width="width" :menu="menu" @collapse="onCollapse" />
        <div class="dashboard-container">
          <br />
          <br />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      isLoggedIn: false,
      collapsed: "",
      width: "220px",
      dealsMenu:{
          title: "Deals",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/dashboard/deals",
              title: "View Deals"
            },
            {
              href: "/dashboard/deals/add",
              title: "Add deal"
            }
          ]
        },
        subscriptionMenu:{
          title: "Subscription",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/dashboard/subscription",
              title: "MooveMart Subscriptions"
            },
            {
              href: "/dashboard/subscription/history",
              title: "Subscription History"
            }
          ]
        },
      menu: [
        {
          href: "/dashboard",
          title: "Dashboard",
          icon: "fa fa-user"
          /*
                        // custom icon
                        icon: {
                            element: 'span',
                            class: 'fa fa-user',
                            attributes: {}
                            text: ''
                        }
                        */
          // disabled: true
          // class: ''
          // attributes: {}
          // alias: '/path'
          /*
                        badge: {
                            text: 'new',
                            class: 'default-badge'
                            // attributes: {}
                            // element: 'span'
                        }
                        */
        },
        {
          href: "/dashboard/leads",
          title: "Leads",
          icon: "fa fa-chart-area"
        }
      ]
    };
  },
  created() {
    this.verifyToken();
    this.updateMenu();
  },
  methods: {
    verifyToken() {
      this.$api.POST("/user", {}).then(response => {
        console.log(response);
        this.$cookies.set("user-data",response,0);


      }).catch(e => {
          this.$Bus.$emit("login")
        });
    },
    updateMenu(){
      let data = this.$cookies.get("user-data")
      if (data.vendor.has_deal == 1){
          this.menu.splice(1, 0, this.dealsMenu);
          this.menu.splice(3, 0, this.subscriptionMenu);
        }
    },
    onCollapse(collapsed) {
      if (collapsed) {
        this.collapsed = "collapsed";
      } else {
        this.collapsed = "";
      }
    }
  }
};
</script>

<style >
#dashboard {
  padding-left: 300px;
}
#dashboard.collapsed {
  padding-left: 40px;
}
.dashboard {
  padding: 40px;
}
.dashboard-container {
  max-width: 1200px !important;
}
.v-sidebar-menu .vsm-link {
  font-size: 14px;
}

.v-sidebar-menu > .vsm-list {
  margin-top: 30%;
}

.v-sidebar-menu.vsm-collapsed > .vsm-list {
  margin-top: 120%;
}

.nav-bar-dark.fixed {
  z-index: 10000;
  position: fixed;
}

.form-inline label {
  justify-content: left !important;
}
</style>
