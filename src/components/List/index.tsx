import React from 'react';
import { usePlaylists } from '../../context/PlaylistsContext';
import Card from '../Card';
import Col from '../Col';
import Row from '../Row';

const List: React.FC = () => {
  const { playlists, loading } = usePlaylists();
  console.log(playlists);
  console.log(loading);

  return (
    <Row colgap={24} rowgap={24}>
      {playlists.map(playlist => (
        <Col key={playlist.id} span={2} xs={12} sm={6} md={4}>
          <Card
            description={playlist.description}
            name={playlist.name}
            image={playlist.images[0].url}
            link={playlist.href}
          />
        </Col>
      ))}
    </Row>
  );
};

export default List;
