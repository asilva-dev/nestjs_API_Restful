"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriaUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_eh_unico_validator_1 = require("../usuario/validacao/email-eh-unico.validator");
class CriaUsuarioDTO {
}
exports.CriaUsuarioDTO = CriaUsuarioDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio!' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'O e-mail informado é inválido!' }),
    (0, email_eh_unico_validator_1.EmailEhUnico)({ message: 'Já existe um usuário com esse e-mail' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'A senha precisa ter no mínimo 06 caracteres!' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=CriaUsuario.dto.js.map