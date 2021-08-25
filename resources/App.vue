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
        <v-list nav dense>
          <v-list-group
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
            v-for="(item, i) in items"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.route"
            >
              <v-list-item-title v-text="child.text"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="child.icon"></v-icon>
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
    item: 0,
    drawer: null,
    items: [],
  }),

  mounted() {
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
  },
};
</script>