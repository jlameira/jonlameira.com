// pages/api/videos_disciplinas.js

export default async function handler(req, res) {
    const { cat, usuario } = req.query;

    if (!cat || !usuario) {
        return res.status(400).json({ error: "Parâmetros 'cat' e 'usuario' são obrigatórios." });
    }

    // Para Matemática (categoria 3), chama a API externa.
    // if (cat === "3") {
        try {
            const response = await fetch(`https://app.estuda.com/apps/api/videos_disciplinas?cat=${cat}&usuario=${usuario}`, {
                headers: {
                    'Cookie': 'PHPSESSID=6d9965d303cf6f3d2f4634fc9ddb03b0'
                }
            });
            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: 'Falha ao buscar dados', details: error.toString() });
        }
    // }
}
