<template>
  <v-app>
    <nav>
      <div>
        <v-toolbar dark color="primary">
          <v-app-bar-nav-icon>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>
            <v-btn text to="/">INICIO</v-btn>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/login">
            <v-btn icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </div>

      <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list rounded>
      <v-subheader>ACCIONES</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


      <v-list>
        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      
    </v-list>
    </v-navigation-drawer>
    </nav>

    <v-main>
      <div>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
   data: () => ({
       drawer: null,
       selectedItem: 1,
      items: [
        { text: 'Articulos', icon: 'mdi-shopping', route: "/public/articles",},
        { text: 'Servicios', icon: 'mdi-calendar-check', route: "/public/services" },
        { text: 'Ventas', icon: 'mdi-cart', route: "/admin/shops" },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),

  /*mounted() {
    this.items = [
      {
        text: "Eventos",
        icon: "mdi-soccer",
        children: [
          {
            text: "Ver",
            icon: "mdi-format-list-bulleted",
            route: "/event/index",
          },
          {
            text: "Asignar",
            icon: "mdi-account-check-outline",
            route: "/event/asignar",
          },
          {
            text: "Consultar",
            icon: "mdi-arrow-right-bold-circle-outline",
            route: "/event/consultar",
          },
          {
            text: "Reportes",
            icon: "mdi-file-document",
            route: "/event/reports",
          },
        ],
      },
      {
        text: "Actividad complementaria",
        icon: "mdi-soccer",
        children: [
          { text: "Ver", icon: "mdi-eye", route: "/acom/list" },
          { text: "Crear ", icon: "mdi-pencil", route: "/acom/create" },
          {
            text: "Configuracion ",
            icon: "mdi-message-processing",
            route: "/acom/configuration",
          },
          {
            text: "Reportes",
            icon: "mdi-file-document",
            route: "/acom/Reports",
          },
        ],
      },
    ];
  },*/
};
</script>