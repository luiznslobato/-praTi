-- 1) Listagem do cardápio ordenada por nome
SELECT nome, descricao, preco_unitario
FROM CARDAPIO
ORDER BY nome;

-- 2) Apresentar todas as comandas e os itens da comanda ordenados por data, código da comanda e nome do café
SELECT 
    c.codigo_comanda,
    c.data,
    c.mesa,
    c.nome_cliente,
    cp.nome AS nome_cafe,
    cp.descricao,
    ic.quantidade,
    cp.preco_unitario,
    ic.quantidade * cp.preco_unitario AS preco_total
FROM COMANDA c
JOIN ITENS_COMANDA ic ON c.codigo_comanda = ic.codigo_comanda
JOIN CARDAPIO cp ON ic.codigo_cardapio = cp.codigo_cardapio
ORDER BY c.data, c.codigo_comanda, cp.nome;

-- 3) Listar comandas com o valor total da comanda, ordenado por data
SELECT 
    c.codigo_comanda,
    c.data,
    c.mesa,
    c.nome_cliente,
    SUM(ic.quantidade * cp.preco_unitario) AS valor_total
FROM COMANDA c
JOIN ITENS_COMANDA ic ON c.codigo_comanda = ic.codigo_comanda
JOIN CARDAPIO cp ON ic.codigo_cardapio = cp.codigo_cardapio
GROUP BY c.codigo_comanda, c.data, c.mesa, c.nome_cliente
ORDER BY c.data;

-- 4) Listar comandas com mais de um tipo de café, incluindo valor total da comanda, ordenado por data
SELECT 
    c.codigo_comanda,
    c.data,
    c.mesa,
    c.nome_cliente,
    SUM(ic.quantidade * cp.preco_unitario) AS valor_total
FROM COMANDA c
JOIN ITENS_COMANDA ic ON c.codigo_comanda = ic.codigo_comanda
JOIN CARDAPIO cp ON ic.codigo_cardapio = cp.codigo_cardapio
GROUP BY c.codigo_comanda, c.data, c.mesa, c.nome_cliente
HAVING COUNT(DISTINCT ic.codigo_cardapio) > 1
ORDER BY c.data;

-- 5) Total de faturamento por data, ordenado por data
SELECT 
    c.data,
    SUM(ic.quantidade * cp.preco_unitario) AS faturamento_total
FROM COMANDA c
JOIN ITENS_COMANDA ic ON c.codigo_comanda = ic.codigo_comanda
JOIN CARDAPIO cp ON ic.codigo_cardapio = cp.codigo_cardapio
GROUP BY c.data
ORDER BY c.data;
