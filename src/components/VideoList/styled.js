import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  width: 320px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  margin: 0.3rem 0;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 180px;
  margin-top: 0.5rem;
  border: none;
  border-radius: 6px;
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #555;
  border-radius: 4px;
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 0.5rem;
`;
