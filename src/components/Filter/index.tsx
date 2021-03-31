import React, { useEffect, useState } from 'react';
import { usePlaylists } from '../../context/PlaylistsContext';
import useDebounce from '../../hooks/useDebounce';
import { auth, getFilters, getPlaylists } from '../../services/api/endpoints';
import Select from '../Select';

import { Container } from './styles';

interface IOptions {
  name: string;
  value: string;
}
interface IFilter {
  locale: string;
  country: string;
  pattern: string;
}

const Filter: React.FC = () => {
  const [locales, setLocales] = useState<IOptions[]>([]);
  const [countries, setCountries] = useState<IOptions[]>([]);
  const [filters, setFilters] = useState<IFilter>();
  const { updatePlaylists, toggleLoad } = usePlaylists();

  useEffect(() => {
    const timer = setInterval(() => {
      alert('Oi');
      getPlaylistsData(filters.country, filters.locale);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getFiltersData = async () => {
      const response = await getFilters();
      setLocales(response.filters[0].values);
      setCountries(response.filters[1].values);
      setFilters({
        locale: response.filters[0].values[0].value,
        country: response.filters[1].values[0].value,
        pattern: response.filters[2].validation.pattern,
      });
    };
    getFiltersData();
  }, []);

  useEffect(() => {
    if (filters) {
      debouncedgetPlaylistsData(filters.country, filters.locale);
    }
  }, [filters]);

  const getPlaylistsData = async (country: string, locale: string) => {
    try {
      toggleLoad(true);
      await auth();
      const data = await getPlaylists({
        country,
        locale,
        pattern: filters.pattern,
      });

      updatePlaylists(data.playlists.items);
    } catch (err) {
      console.log(err);
    }
    toggleLoad(false);
  };

  const debouncedgetPlaylistsData = useDebounce(getPlaylistsData, 500);

  const handleChangeFilter = async (value: string, filter: string) => {
    if (filters) setFilters({ ...filters, [filter]: value });
  };

  return (
    <Container>
      <Select
        label="Locale"
        filter="locale"
        options={locales}
        onChange={handleChangeFilter}
      />
      <Select
        label="Country"
        filter="country"
        options={countries}
        onChange={handleChangeFilter}
      />
    </Container>
  );
};

export default Filter;
