<template>
  <div>
    <v-row align="center" justify="center">
      <v-col col="12" md="4" sm="5">
        <v-card class="mx-auto my-12" max-width="500">
          <v-card-title class=""> Iniciar sesión </v-card-title>
          <v-card-text>
            <div class="d-flex justify-space-between mb-6">
              <v-img
                max-height="200"
                max-width="200"

              ></v-img>
              <v-img
                max-height="100"
                max-width="100"
                src=""
              ></v-img>
            </div>
            <v-text-field
              prepend-icon="mdi-account"
  
              label="Correo Electrónico"
            >
            </v-text-field>
            <v-text-field
              label="Contraseña"
              
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large block color="primary">Ingresar</v-btn>
          </v-card-actions>
          <v-card-actions >


          </v-card-actions>
        </v-card>
        <v-snackbar
          v-model="snackbar"
          :top="true"
          :right="true"
          :color="'error'"
        >
          {{ message }}
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {  },
  name: "login",
  data: () => ({
    showPassword: false,
    form: {
      email: "admin@admin.com",
      password: "password",
    },
    snackbar: false,
    message: "",
    value: false,
  }),
  methods: {

  },
};
</script>
