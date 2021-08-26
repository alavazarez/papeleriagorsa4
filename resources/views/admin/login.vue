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
              v-model="form.email"
              label="Correo Electrónico"
            >
            </v-text-field>
            <v-text-field
              label="Contraseña"
              v-model="form.password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large block color="primary" @click="ingresar">Ingresar</v-btn>
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
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: "login",
    components: {},

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
    ingresar(){
      let response = {
        "email": this.form.email,
        "password": this.form.password
      };
      axios.post('/iniciar-sesion', response).then( data =>{
        console.log('pasa aquiiii')
        swal('Has iniciado sesion', 'Datos Correctos', 'success');
        this.$router.push({ path: 'admin/shops' })
        
      }).catch(error=>{
        console.log(error.response.data.errors)
        let err = error.response.data.errors;
        let mensaje = 'Error No Identificado';

        if(err.hasOwnProperty('email'))
        {
          mensaje = err.email[0];
        }
        else if(err.hasOwnProperty('password')){
          mensaje = err.password[0];
        }
        else if(err.hasOwnProperty('login')){
          mensaje = err.login[0];
        }
        swal('Error', mensaje, 'error');
      });
    }
  },
};
</script>
