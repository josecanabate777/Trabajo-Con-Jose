function listar(id = undefined) {
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRE_LOAD), id))
}