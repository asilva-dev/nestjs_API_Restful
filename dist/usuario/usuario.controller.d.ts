import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "src/dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuarios(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        id: string;
        mensagem: string;
    }>;
    listUsuarios(): Promise<UsuarioEntity[]>;
}
