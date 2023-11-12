import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom';
import SearchService from '../../services/searchService/searchService';

const PathNames = {
  planetDetails: ':planetName',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.planetDetails>>;
}

const planetDetailsLoader = async ({ params }: Args) => {
  const { planetName } = params;
  if (planetName) {
    const data = await SearchService.getPlanetData(planetName);

    return data.results[0];
  }
  return null;
};

export default planetDetailsLoader;
