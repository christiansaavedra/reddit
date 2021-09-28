import { IPost } from './types';
import {
  Activity,
  Card,
  Details,
  ImageContainer,
  Image,
  Row,
  Title,
} from './styled';
import {
  getHourDifferenceBetweenDates,
  replaceCharacterInString,
} from 'helpers';

const Post = ({
  author,
  created,
  num_comments,
  preview,
  thumbnail,
  title,
  visited,
}: IPost): JSX.Element => {
  const handleImageClick = () => {
    if (!preview.images.length) {
      return null;
    }

    /* amp query param must be removed to avoid HTTP 403 code */
    const imageSourceWithoutAmpParam: string = replaceCharacterInString(
      preview.images[0].source.url,
      '&amp;',
      '&'
    );
    return window.open(imageSourceWithoutAmpParam, '_blank');
  };

  return (
    <Card>
      <Row>
        <Details>
          {' '}
          Posted by {author} {getHourDifferenceBetweenDates(created)} hours ago
        </Details>
      </Row>
      <Title>{title}</Title>
      <ImageContainer>
        {thumbnail ? (
          <Image src={thumbnail} alt={title} onClick={handleImageClick} />
        ) : (
          <h1>No image</h1>
        )}
      </ImageContainer>
      <Row>
        <Activity>
          {num_comments} comments. {visited && 'Visited'}
        </Activity>
      </Row>
    </Card>
  );
};

export default Post;
