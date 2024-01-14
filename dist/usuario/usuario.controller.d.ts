import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "src/dto/CriaUsuario.dto";
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuarios(dadosDoUsuario: CriaUsuarioDTO): Promise<CriaUsuarioDTO>;
    listUsuarios(): Promise<any[]>;
}
