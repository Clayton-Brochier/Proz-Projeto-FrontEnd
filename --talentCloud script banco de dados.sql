--talentCloud script banco de dados

--criar tabela loja
CREATE TABLE loja(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(255)
);

CREATE TABLE carro(
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(255),
    ano INTEGER,
    id_loja INTEGER,
    CONSTRAINT fk_carloja FOREIGN KEY (id_loja) REFERENCES loja(id)
);

CREATE TABLE vendedor(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    tipo_habilitacao VARCHAR(20),
    id_loja INTEGER,
    CONSTRAINT fk_vendloja FOREIGN KEY (id_loja) REFERENCES loja(id)
);

CREATE TABLE test_drive(
    id SERIAL PRIMARY KEY,
    data DATE,
    hora TIME,
    id_vendedor INTEGER,
    id_carro INTEGER,
    id_cliente INTEGER,
    CONSTRAINT fk_testvendedor FOREIGN KEY (id_vendedor) REFERENCES vendedor(id),
    CONSTRAINT fk_testcarro FOREIGN KEY (id_carro) REFERENCES carro(id),
    CONSTRAINT fk_testvendedor FOREIGN KEY (id_vendedor) REFERENCES cliente(id)
);

CREATE TABLE cliente(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    id_vendedor INTEGER,
    CONSTRAINT fk_clientvendedor FOREIGN KEY (id_vendedor) REFERENCES vendedor(id)
);

CREATE TABLE contato(
    id SERIAL PRIMARY KEY,
    por_whatsapp BOOLEAN,
    por_email BOOLEAN,
    telefone VARCHAR(20),
    id_cliente INTEGER,
    CONSTRAINT fk_contcliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

