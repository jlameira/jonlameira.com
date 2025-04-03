import React, { useState } from 'react';
import {
  Container, Grid, Card, Thumbnail, Title, Text, Iframe, Pagination, Button, SearchInput, DownloadButton
} from './styled';

const VideoList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const videosPerPage = 6;

  if (!data || !Array.isArray(data)) return null;

  const videos = data.flatMap(disciplina =>
    disciplina.videos.map(video => ({
      ...video,
      categoria_nome: disciplina.nome
    }))
  );

  const filteredVideos = videos.filter(video =>
    video.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid>
        {currentVideos.map(video => {
          const videoSrc = video.link.replace('&autoplay=1', '').replace('?autoplay=1', '');
          return (
            <Card key={video.id}>
              {/*<Thumbnail src={video.imagem} alt={video.titulo} />*/}
              <Title>{video.titulo}</Title>
              <Text><strong>Disciplina:</strong> {video.categoria_nome}</Text>
              <Iframe
                src={videoSrc}
                title={video.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <Text><strong>Duração:</strong> {video.tempo}</Text>
              <Text><strong>Visualizações:</strong> {video.views}</Text>
              <DownloadButton
                href={video.conteudo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar PDF
              </DownloadButton>
            </Card>
          );
        })}
      </Grid>
      <Pagination>
        <Button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span style={{ margin: '0 1rem' }}>
          Página {currentPage} de {totalPages}
        </span>
        <Button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Próxima
        </Button>
      </Pagination>
    </Container>
  );
};

export default VideoList;
