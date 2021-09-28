import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
}

export const Card = styled.div`
  width: 80%;
  background: #e0e0e0;
  margin: 1rem 2rem;
  padding: 2rem;
  border-radius: 10px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Activity = styled.h3`
  font-size: 0.75rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Image = styled.img.attrs((props: ImageProps) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 100%;
  max-width: 100%;
`;
