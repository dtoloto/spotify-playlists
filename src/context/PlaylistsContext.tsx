import React, { createContext, useContext, useState, useCallback } from 'react';

interface PlaylistsContextData {
  playlists: any[];
  updatePlaylists: (data: any) => void;
  loading: boolean;
  toggleLoad: (status: boolean) => void;
}

const PlaylistsContext = createContext<PlaylistsContextData>(
  {} as PlaylistsContextData,
);

const PlaylistsProvider: React.FC = ({ children }) => {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoad = useCallback((status: boolean) => {
    setLoading(status);
  }, []);

  const updatePlaylists = useCallback(data => {
    setPlaylists(data);
  }, []);

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        updatePlaylists,
        loading,
        toggleLoad,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

function usePlaylists(): PlaylistsContextData {
  const context = useContext(PlaylistsContext);

  if (!context) {
    throw new Error('usePlaylists must be within an PlaylistsProvider');
  }
  return context;
}

export { PlaylistsProvider, usePlaylists };
