export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: any): Promise<void>;
    listar(): Promise<any[]>;
    existeComEmail(email: string): Promise<boolean>;
}
