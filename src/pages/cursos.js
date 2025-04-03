import React, { useState } from 'react';
import VideoList from '@/components/VideoList';

export default function Cursos() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [videos, setVideos] = useState([]);

    // Exemplos de categorias (IDs fictícios, ajuste conforme sua necessidade)
    const categorias = [
        { id: '3', nome: 'Matemática', totalVideos: 148 },
        { id: '2', nome: 'Português', totalVideos: 141 },
        { id: '1', nome: 'História', totalVideos: 130 },
        { id: '7,9', nome: 'Inglês', totalVideos: 104 },
        { id: '10', nome: 'Física', totalVideos: 141 },
        { id: '4', nome: 'Química', totalVideos: 141 },
        { id: '6', nome: 'Biologia', totalVideos: 141 },
        { id: '10636', nome: 'Redação', totalVideos: 141 },
    ];

    const handleCategoryClick = async (catId) => {
        try {
            // Faz uma chamada para a sua rota de API interna
            // (por exemplo, /api/videos_disciplinas?cat=3&usuario=13336766)
            const res = await fetch(`/api/videos_disciplinas?cat=${catId}&usuario=13336766`);
            const json = await res.json();

            // Ajuste conforme a estrutura de dados retornada pela sua API
            // Aqui assumimos que a API retorna um objeto com videos_disciplinas: [...]
            setVideos(json.videos_disciplinas || []);
            setSelectedCategory(catId);
        } catch (error) {
            console.error('Erro ao buscar vídeos:', error);
            setVideos([]);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ marginBottom: '1rem' }}>Escolha uma Categoria</h1>

            <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
            }}>
                {categorias.map((categoria) => (
                    <div
                        key={categoria.id}
                        onClick={() => handleCategoryClick(categoria.id)}
                        style={{
                            width: '150px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            padding: '1rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        {/* Aqui você pode colocar um ícone ou imagem */}
                        <h3 style={{ marginBottom: '0.5rem' }}>{categoria.nome}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            {categoria.totalVideos} Vídeos
                        </p>
                    </div>
                ))}
            </div>

            {selectedCategory && (
                <div>
                    {videos.length > 0 ? (
                        <VideoList data={videos} />
                    ) : (
                        <p style={{ color: '#666' }}>
                            Nenhum vídeo encontrado para essa categoria.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
