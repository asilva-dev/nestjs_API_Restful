import { UsuarioRepository } from "./usuario.repository";
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuarios(dadosDoUsuario: any): Promise<any>;
    listUsuarios(): Promise<any[]>;
}
