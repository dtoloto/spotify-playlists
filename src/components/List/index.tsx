import React from 'react';
import { usePlaylists } from '../../context/PlaylistsContext';
import Card from '../Card';
import Col from '../Col';
import IF from '../IF';
import Row from '../Row';
import { Skeleton } from '../Skeleton';

const List: React.FC = () => {
  const { playlists, loading } = usePlaylists();

  return (
    <Row colgap={24} rowgap={24}>
      <IF condition={!loading}>
        {playlists.map(playlist => (
          <Col key={playlist.id} span={2} xs={12} sm={6} md={4}>
            <Card
              description={playlist.description}
              name={playlist.name}
              image={playlist.images[0].url}
              link={playlist.external_urls.spotify}
            />
          </Col>
        ))}
      </IF>

      <IF condition={loading}>
        {[...Array(10)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col key={i} span={2} xs={12} sm={6} md={4}>
            <Skeleton />
          </Col>
        ))}
      </IF>
    </Row>
  );
};

export default List;
