import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoRepository } from './produto.repository';
export declare class ProdutoController {
    private readonly produtoRepository;
    constructor(produtoRepository: ProdutoRepository);
    criaNovo(dadosProduto: CriaProdutoDTO): void;
    listaTodos(): any[];
}
