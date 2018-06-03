const mutations = {
  /**
   * Guardar Valores introducidos en el SignUp para su posterior modificación
   */
  settingInitialValues: function (state, valores) {
    let usuario = state.usuario
    for (let valor in valores) {
      if (valor === `${valor}`) {
        if (valor === 'apellidos' && valor !== null && valor !== '') {
          const apellidosAislados = valores[valor].split(' ')
          usuario[valor] = apellidosAislados
        } else {
          usuario[valor] = valores[valor]
        }
      }
      console.log(usuario)
    }
  }
}

export default mutations
