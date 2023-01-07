import { useParams } from "react-router-dom";
import { useCharactersContext } from "../../contexts";
import { changeSlug } from "../../helpers/slug";
import { GlobalStyles } from "../../styles";
import { Heading } from "../../components/Heading";
import {
  Header,
  HeadingDetail,
  HeaderInfoWrapper,
  DetailCharacters,
  UniqueCharacter,
  UniqueCharacterText,
  FilmDate,
} from "./styles";
import { Carousel } from "../../components";

const Detail = () => {
  const {
    characters,
    speciesData,
    filmsData,
    vehiclesData,
    starshipsData,
    planetsData,
  } = useCharactersContext();
  const params = useParams();

  const data = characters.filter((item) =>
    changeSlug(item.name).includes(params.name) ? item : "",
  );

  return (
    <div>
      {data.map((character) => (
        <div key={character.url}>
          <Header>
            <HeadingDetail>{character.name}</HeadingDetail>
            <HeaderInfoWrapper>
              <Carousel
                data={character}
                species={speciesData}
                planets={planetsData}
              />
            </HeaderInfoWrapper>
          </Header>

          <main>
            {character.starships.length > 0 && (
              <Heading
                level={4}
                fontSize="header4"
                color="redColor"
                weight="700"
                align="center"
                textTransform="uppercase"
              >
                Starships
              </Heading>
            )}
            <DetailCharacters>
              {starshipsData?.map(
                (starship) =>
                  character.starships.includes(starship.url) && (
                    <div key={starship.url}>
                      <UniqueCharacter>
                        <Heading
                          level={3}
                          fontSize="small"
                          textTransform="uppercase"
                          spacing="4px"
                          weight="700"
                        >
                          Starship
                        </Heading>
                        <Heading
                          level={4}
                          fontSize="header4"
                          color="redColor"
                          weight="700"
                        >
                          {starship.name}
                        </Heading>
                        <UniqueCharacterText>
                          Model: <strong>{starship.model}</strong>
                        </UniqueCharacterText>
                      </UniqueCharacter>
                    </div>
                  ),
              )}
            </DetailCharacters>
            {character.vehicles.length > 0 && (
              <Heading
                level={4}
                fontSize="header4"
                color="greenColor"
                weight="700"
                align="center"
                textTransform="uppercase"
              >
                Vehicles
              </Heading>
            )}
            <DetailCharacters>
              {vehiclesData?.map(
                (vehicle) =>
                  character.vehicles.includes(vehicle.url) && (
                    <div key={vehicle.url}>
                      <UniqueCharacter>
                        <Heading
                          level={3}
                          fontSize="small"
                          textTransform="uppercase"
                          spacing="4px"
                          weight="700"
                        >
                          Vehicle
                        </Heading>
                        <Heading
                          level={4}
                          fontSize="header4"
                          color="greenColor"
                          weight="700"
                        >
                          {vehicle.name}
                        </Heading>
                        <UniqueCharacterText>
                          Model: <strong>{vehicle.model}</strong>
                        </UniqueCharacterText>
                      </UniqueCharacter>
                    </div>
                  ),
              )}
            </DetailCharacters>
            {character.films.length > 0 && (
              <Heading
                level={4}
                fontSize="header4"
                color="blueColor"
                weight="700"
                align="center"
                textTransform="uppercase"
              >
                Films
              </Heading>
            )}
            <DetailCharacters>
              {filmsData?.map(
                (film) =>
                  character.films.includes(film.url) && (
                    <div key={film.url}>
                      <UniqueCharacter>
                        <FilmDate>{film.release_date.split("-")[0]}</FilmDate>
                        <Heading
                          level={4}
                          fontSize="header4"
                          color="blueColor"
                          weight="700"
                        >
                          {film.title}
                        </Heading>
                        <UniqueCharacterText>
                          Direct by: <strong>{film.director}</strong>
                        </UniqueCharacterText>
                        <UniqueCharacterText>
                          Producer by: <strong>{film.producer}</strong>
                        </UniqueCharacterText>
                      </UniqueCharacter>
                    </div>
                  ),
              )}
            </DetailCharacters>
          </main>
        </div>
      ))}
      <GlobalStyles backgroundColor="#303236" />
    </div>
  );
};

export default Detail;
