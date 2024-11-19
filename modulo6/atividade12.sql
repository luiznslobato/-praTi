-- 1) Listar os dados dos alunos
SELECT codigo_matricula, nome, endereco, telefone, data_nascimento, altura, peso
FROM ALUNO;

-- 2) Listar os dados dos alunos e as turmas que eles estão matriculados
SELECT a.codigo_matricula, a.nome AS nome_aluno, t.id_turma, t.tipo_curso
FROM ALUNO a
JOIN MATRICULA m ON a.codigo_matricula = m.codigo_matricula
JOIN TURMA t ON m.id_turma = t.id_turma;

-- 3) Listar os alunos que não possuem faltas
SELECT a.codigo_matricula, a.nome
FROM ALUNO a
JOIN MATRICULA m ON a.codigo_matricula = m.codigo_matricula
WHERE m.faltas = 0;

-- 4) Listar os professores e a quantidade de turmas que cada um leciona
SELECT p.nome, COUNT(t.id_turma) AS quantidade_turmas
FROM PROFESSOR p
JOIN TURMA t ON p.cpf = t.cpf_professor
GROUP BY p.cpf;

-- 5) Listar nome dos professores, um dos números de telefone do professor, dados das turmas e alunos matriculados, ordenado por nome do professor, id da turma e nome do aluno
SELECT 
    p.nome AS nome_professor,
    p.telefone AS telefone_professor,
    t.id_turma,
    t.data_inicio,
    t.data_fim,
    t.horario_aula,
    t.tipo_curso,
    a.nome AS nome_aluno
FROM PROFESSOR p
JOIN TURMA t ON p.cpf = t.cpf_professor
JOIN MATRICULA m ON t.id_turma = m.id_turma
JOIN ALUNO a ON m.codigo_matricula = a.codigo_matricula
ORDER BY p.nome, t.id_turma, a.nome;

-- 6) Alterar o nome de todos os professores para maiúsculo
UPDATE PROFESSOR
SET nome = UPPER(nome);

-- 7) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo
UPDATE ALUNO
SET nome = UPPER(nome)
WHERE codigo_matricula IN (
    SELECT m.codigo_matricula
    FROM MATRICULA m
    JOIN TURMA t ON m.id_turma = t.id_turma
    WHERE t.id_turma = (
        SELECT id_turma
        FROM TURMA
        ORDER BY quantidade_alunos DESC
        LIMIT 1
    )
);

-- 8) Excluir as ausências dos alunos nas turmas que eles são monitores
UPDATE MATRICULA m
JOIN MONITOR mon ON m.codigo_matricula = mon.codigo_matricula
SET m.faltas = 0
WHERE m.id_turma = mon.id_turma;
