SELECT '1. Nomes de todos os alunos' AS pergunta, nome AS resposta
FROM ALUNO

UNION ALL

SELECT '2. Números das matrículas dos alunos', matricula_id
FROM MATRÍCULA

UNION ALL

SELECT '3. Matrículas de alunos não matriculados em nenhuma turma', matricula_id
FROM MATRÍCULA
WHERE turma_id IS NULL

UNION ALL

SELECT '4. Matrículas dos alunos na turma número 30', m.matricula_id
FROM MATRÍCULA m
JOIN TURMA t ON m.turma_id = t.turma_id
WHERE t.turma_id = 30

UNION ALL

SELECT '5. Horário da turma do aluno PATOLINO', t.horario
FROM ALUNO a
JOIN MATRÍCULA m ON a.aluno_id = m.aluno_id
JOIN TURMA t ON m.turma_id = t.turma_id
WHERE a.nome = 'PATOLINO';
