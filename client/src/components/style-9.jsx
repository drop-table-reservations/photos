import styled from 'styled-components';


export const PhotoBody = styled.div`
  width: 618px;
`;

export const HeaderPhotoAmount = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #333;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 16px;
  margin: 0 0 16px 0;
  display: flex;
  justify-content: space-between;
`;

export const HeaderViewMore = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: auto 0 0 0;
  color: #da3743;
  cursor: pointer;
  text-decoration: none;
`

export const Wrapper = styled.div`
  height: 280px;
  width: 610px;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(10, 61px);
  grid-template-rows: repeat(6, 46.5px);
  grid-template-areas: 'photo0 photo0 photo2 photo2 photo2 photo2 photo3 photo3 photo4 photo4'
                      'photo0 photo0 photo2 photo2 photo2 photo2 photo3 photo3 photo4 photo4'
                      'photo0 photo0 photo2 photo2 photo2 photo2 photo5 photo5 photo6 photo6'
                      'photo1 photo1 photo2 photo2 photo2 photo2 photo5 photo5 photo6 photo6'
                      'photo1 photo1 photo2 photo2 photo2 photo2 photo7 photo7 photo8 photo8'
                      'photo1 photo1 photo2 photo2 photo2 photo2 photo7 photo7 photo8 photo8';
`;

export const Photos = styled.div`
  grid-area: ${props => props.photoNum}; 
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  height: 500px;
  width: 500px;

`;





